import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Place } from '../addPlaces/PlaceList';
interface MapProps {
  selectedPlace: Place | null; 
}

const containerStyle = {
  width: '400px',
  height: '400px'
};

const MapComp: React.FC<MapProps> = ({ selectedPlace }) => {
  const center = {
    lat: selectedPlace ? selectedPlace.lat : -3.795,
    lng: selectedPlace ? selectedPlace.lng : -38.523
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBwkz_r1V2p6Slt23PqhGvvquR1UOgdbOM">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {selectedPlace && <Marker position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }} />}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComp;
