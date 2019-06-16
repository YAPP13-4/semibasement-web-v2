import { combineReducers } from 'redux';
import { sebaMusic, sebaMusicFetchState } from './getMusicInfo/reducer';
import { musicPlayer } from './player/reducer';

export default combineReducers({ 
  sebaMusic,
  sebaMusicFetchState,
  musicPlayer
});
