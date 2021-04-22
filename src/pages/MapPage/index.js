import React from 'react';
import { MapComponent } from './components/MapComponent';
import { mapConfig } from './MapConfig';
import { MapWrapper } from './components/styled';

const markers = [
  {
    name: "McDonald's",
    lat: 50.45,
    lng: 30.523,
  },
  {
    name: 'KFC',
    lat: 50.452,
    lng: 30.524,
  },
  {
    name: 'Burger King',
    lat: 50.457,
    lng: 30.521,
  },
  {
    name: 'Potato',
    lat: 50.448,
    lng: 30.523,
  },
  {
    name: 'Kebab',
    lat: 50.4486,
    lng: 30.517,
  },
];

export const MapPage = () => {
  return (
    <MapWrapper>
      <MapComponent mapConfig={mapConfig} markers={markers} />
    </MapWrapper>
  );
};
