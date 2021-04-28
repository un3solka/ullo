import { combineReducers } from 'redux';
import { map } from './mapReducers';
import { search } from './searchReducer';

const Reducers = combineReducers({ mapState: map, searchState: search });

export default Reducers;
