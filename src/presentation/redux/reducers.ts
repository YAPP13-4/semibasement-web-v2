import { combineReducers } from 'redux';
import { sebaMusic, sebaMusicFetchState } from './getMusicInfo/reducer';

export default combineReducers({ 
  sebaMusic,
  sebaMusicFetchState,
});
