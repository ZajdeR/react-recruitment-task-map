import React, { useEffect } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

function Map({ center }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCy3ZX0erJmctenAJBsLIzGdClZOrL2Ux4',
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const containerStyle = {
    width: '100%',
    height: 'calc(100% - 2rem)',
    margin: '1rem 0',
    borderRadius: '0.25rem',
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
    </GoogleMap>
  ) : null;
}

export default Map;
