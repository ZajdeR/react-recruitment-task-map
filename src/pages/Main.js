import React from 'react';
import ListSearch from '../components/ListSearch';
import Map from '../components/Map';
import BoxInformation from '../components/BoxInformation';
import BoxSearch from '../components/BoxSearch';
import './Main.css';
import { getClientIp } from '../helpers/getClientIp';
import { getIpLocation } from '../helpers/getIpLocation';
import { decorateLocation } from '../helpers/decorateLocation';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userIp: null,
      userLocation: null,
      searches: [],
      searchText: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  async componentDidMount() {
    const detectedIp = await getClientIp();
    const detectedLocation = await getIpLocation(detectedIp);

    this.setState({
      userIp: detectedIp,
      userLocation: decorateLocation(detectedLocation),
    });
  }

  handleChange(event) {
    this.setState({ searchText: event.target.value });
  }

  async handleSearch(event) {
    event.preventDefault();
    const detectLocation = await getIpLocation(this.state.searchText);

    this.setState((state) => {
      const searches = state.searches.concat(decorateLocation(detectLocation));

      return { searches };
    });
  }

  render() {
    return (
      <div className="grid grid-cols-3 h-screen">
        <ListSearch searches={this.state.searches} />
        <Map />
        <BoxInformation
          ip={this.state.userIp}
          label="User data"
          location={this.state.userLocation}
        />
        <BoxSearch
          searchMethod={this.handleSearch}
          searchText={this.state.searchText}
          changeMethod={this.handleChange}
        />
        <Map />
        <BoxInformation label="Last search data" />
      </div>
    );
  }
}
