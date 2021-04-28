import {
  SEARCH_START,
  SEARCH_END,
  SEARCH_REQUEST,
  SEARCH_RESPONSE,
} from '../CONSTANTS';

const initialState = {
  search: false,
  loading: false,
  results: [],
};

export const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_START:
      return { ...state, search: true };
    case SEARCH_END:
      return { ...state, search: false };
    case SEARCH_REQUEST:
      return { ...state, loading: true };
    case SEARCH_RESPONSE:
      return { ...state, loading: false, results: action.payload.results };
    default:
      return state;
  }
};
