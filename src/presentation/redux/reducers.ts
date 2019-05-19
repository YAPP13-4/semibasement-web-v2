import { combineReducers } from 'redux';
import { sebaMusic, sebaMusicFetchState } from './music/reducer';

export default combineReducers({ 
  sebaMusic,
  sebaMusicFetchState,
});
