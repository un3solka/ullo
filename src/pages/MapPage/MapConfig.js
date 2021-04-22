import { mapStyles } from './mapStyles';

export const mapConfig = {
  center: {
    lat: 50.4501,
    lng: 30.5234,
  },
  zoom: 15,
  mapContainerStyle: {
    height: '100%',
    width: '100%',
  },
  options: {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
  },
  libraries: ['places'],
};
