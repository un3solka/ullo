import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MapComponent } from './components/MapComponent';
import { mapConfig } from './MapConfig';
import { MapWrapper, SearchPanel } from './components/styled';
import { getMarkers } from '../../redux/actions/mapActions';
import { TOP_BAR_HEIGHT } from '../../CONSTANTS';
import { List } from '../../components/List';

export const MapPageComponent = ({
  markers = [],
  loaded,
  getMarkers,
  showSearch,
  searchResults,
}) => {
  useEffect(() => {
    getMarkers();
  }, [getMarkers]);

  if (!loaded) {
    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: `${TOP_BAR_HEIGHT}px`,
        }}
      >
        Map is loading...
      </div>
    );
  }
  return (
    <>
      <SearchPanel showSearch={showSearch}>
        <List collection={searchResults} />
      </SearchPanel>
      <MapWrapper>
        <MapComponent mapConfig={mapConfig} markers={markers} />
      </MapWrapper>
    </>
  );
};

const mapStateToProps = (store) => ({
  markers: store.mapState.markers,
  loaded: store.mapState.loaded,
  showSearch: store.searchState.search,
  searchResults: store.searchState.results,
});
const mapDispatchProps = (dispatch) =>
  bindActionCreators({ getMarkers }, dispatch);
export const MapPage = connect(
  mapStateToProps,
  mapDispatchProps,
)(MapPageComponent);
