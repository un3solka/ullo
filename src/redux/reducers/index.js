import { combineReducers } from 'redux';
import { map } from './mapReducers';

const Reducers = combineReducers({ mapState: map });

export default Reducers;
