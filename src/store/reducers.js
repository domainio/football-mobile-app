import { combineReducers } from 'redux'
import FootballReducer from './FootballReducer';

const reducers = combineReducers({
  football: FootballReducer
});

export default reducers;