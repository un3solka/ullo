import React, { useMemo, useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import restaurantIcon from '../../../assets/map/restaurant.svg';

export const MapComponent = ({ mapConfig, markers }) => {
  const { center, zoom, mapContainerStyle, options, libraries } = useMemo(
    () => mapConfig,
    [mapConfig],
  );
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_API,
    libraries,
  });
  const mapRef = useRef();
  const [selected, setSelected] = useState(null);
  const [bounds, setBounds] = useState(null);
  const onMapLoad = useCallback((map) => {
    setBounds(new window.google.maps.LatLngBounds());
    mapRef.current = map;
  }, []);

  const onMapUnmount = useCallback(() => {
    mapRef.current = null;
  }, []);

  const onMapClick = useCallback(() => {
    setSelected(null);
  }, []);

  const onBoundsChanged = useCallback(() => {
    setBounds(new window.google.maps.LatLngBounds());
  }, []);

  React.useEffect(() => {
    //get bounds
  }, [bounds]);

  if (loadError) return 'Error';
  if (!isLoaded) return 'Loading...';
  return (
    <GoogleMap
      id="map"
      mapContainerStyle={mapContainerStyle}
      zoom={zoom}
      center={center}
      options={options}
      onLoad={onMapLoad}
      onUnmount={onMapUnmount}
      onBoundsChanged={onBoundsChanged}
      onClick={onMapClick}
    >
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={{ lat: marker.location.lat, lng: marker.location.lng }}
          onClick={() => {
            setSelected(marker);
          }}
          icon={{
            url: restaurantIcon,
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
            scaledSize: new window.google.maps.Size(30, 30),
          }}
        />
      ))}

      {selected ? (
        <InfoWindow
          position={{ lat: selected.lat, lng: selected.lng }}
          onCloseClick={() => {
            setSelected(null);
          }}
        >
          <div>
            <h2>{selected.name}</h2>
          </div>
        </InfoWindow>
      ) : null}
    </GoogleMap>
  );
};

MapComponent.propTypes = {
  mapConfig: PropTypes.object,
  markers: PropTypes.array,
};
