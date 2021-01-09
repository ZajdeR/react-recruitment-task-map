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
  const [userLat, setUserLat] = useState(null);
  const [userLng, setUserLng] = useState(null);

  const [searches, setSearches] = useState([]);
  const [searchText, setSearchText] = useState('');

  const detectUserLocation = async () => {
    const detectedIp = await getClientIp();
    const detectedLocation = await getIpLocation(detectedIp);
    console.log(detectedLocation);
    setUserIp(detectedIp);
    setUserLocation(decorateLocation(detectedLocation));
    setUserLat(detectedLocation?.data?.latitude);
    setUserLng(detectedLocation?.data?.longitude);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    const detectedLocation = await getIpLocation(searchText);
    const newSearches = [
      {
        address: decorateLocation(detectedLocation),
        ip: searchText,
        lat: detectedLocation?.data?.latitude,
        lng: detectedLocation?.data?.longitude,
      },
    ].concat(searches);

    setSearches(newSearches);
  };

  useEffect(detectUserLocation);

  return (
    <div className="grid grid-cols-3 h-screen">
      <ListSearch searches={searches} />
      <Map center={{ lat: userLat, lng: userLng }} />
      <BoxInformation
        label="User location"
        ip={userIp}
        address={userLocation}
      />
      <FormSearch
        searchMethod={handleSearch}
        searchText={searchText}
        changeMethod={(e) => setSearchText(e.target.value)}
      />
      <Map center={{ lat: searches[0]?.lat, lng: searches[0]?.lng }} />
      <BoxInformation
        label="Last search location"
        ip={searches[0]?.ip}
        address={searches[0]?.address}
      />
    </div>
  );
}

export default Main;
