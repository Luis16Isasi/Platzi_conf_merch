import * as React from 'react';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const Map = () => {
  const MapStyles = {
    height: '58vh',
    width: '80%',
    margin: '15px  auto',
  };

  const Position = {
    lat: 19.26265,
    lng: -99.1729878,
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyCYj2Ry8fDUdn1UgdT6zp9QOJkm4SZ3Wns">
      <GoogleMap mapContainerStyle={MapStyles} zoom={9} center={Position}>
        <Marker position={Position}></Marker>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
