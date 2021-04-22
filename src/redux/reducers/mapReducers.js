import { MAP_STATE_CHANGE } from '../CONSTANTS';

const initialState = {
  state: false,
};

export const map = (state = initialState, action) => {
  switch (action.type) {
    case MAP_STATE_CHANGE:
      return { ...state, state: action.payload.state };
    default:
      return state;
  }
};
