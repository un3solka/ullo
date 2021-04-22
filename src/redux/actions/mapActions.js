import * as CONSTANTS from '../CONSTANTS';

export const initMap = () => (dispatch) => {
  dispatch({
    type: CONSTANTS.MAP_STATE_CHANGE,
    payload: { state: true },
  });
};
