import React, { useEffect, useState } from 'react';
import ListSearch from '../components/ListSearch';
import Map from '../components/Map';
import BoxInformation from '../components/BoxInformation';
import FormSearch from '../components/FormSearch';
import './Main.css';
import { getClientIp } from '../helpers/getClientIp';
import { getIpLocation } from '../helpers/getIpLocation';
import { decorateLocation } from '../helpers/decorateLocation';

function Main() {
  const [userIp, setUserIp] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [searches, setSearches] = useState([]);
  const [searchText, setSearchText] = useState('');

  const detectUserLocation = async () => {
    const detectedIp = await getClientIp();
    const detectedLocation = await getIpLocation(detectedIp);

    setUserIp(detectedIp);
    setUserLocation(decorateLocation(detectedLocation));
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    const detectLocation = await getIpLocation(searchText);
    const newSearches = [
      {
        address: decorateLocation(detectLocation),
        ip: searchText,
      },
    ].concat(searches);

    setSearches(newSearches);
  };

  useEffect(detectUserLocation);

  return (
    <div className="grid grid-cols-3 h-screen">
      <ListSearch searches={searches} />
      <Map />
      <BoxInformation
        label="User location"
        ip={userIp}
        location={userLocation}
      />
      <FormSearch
        searchMethod={handleSearch}
        searchText={searchText}
        changeMethod={(e) => setSearchText(e.target.value)}
      />
      <Map />
      <BoxInformation
        label="Last search location"
        ip={searches[0]?.ip}
        location={searches[0]?.address}
      />
    </div>
  );
}

export default Main;
