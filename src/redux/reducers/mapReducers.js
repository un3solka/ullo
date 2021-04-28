import { MAP_GET_MARKERS } from '../CONSTANTS';

const initialState = {
  loaded: false,
  markers: [],
};

export const map = (state = initialState, action) => {
  switch (action.type) {
    case MAP_GET_MARKERS:
      return { ...state, markers: action.payload.markers, loaded: true };
    default:
      return state;
  }
};
