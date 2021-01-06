import ListSearch from '../components/ListSearch';
import Map from '../components/Map';
import BoxInformation from '../components/BoxInformation';
import BoxSearch from '../components/BoxSearch';
import './Main.css';

function Main() {
  return (
    <div className="grid grid-cols-3 h-screen">
      <ListSearch />
      <Map />
      <BoxInformation />
      <BoxSearch />
      <Map />
      <BoxInformation />
    </div>
  );
}

export default Main;
