import { combineReducers } from 'redux';
import { musicPlayer } from './player/reducer';
import { homeMusicReducer, SebaMusicState } from './getMusicInfo';
import { loadingReducer, loadingState } from 'application/modules/loading';

export interface StoreState {
  sebaMusic: SebaMusicState;
  loading: loadingState;
}

export default combineReducers({ 
  sebaMusic: homeMusicReducer,
  loading: loadingReducer,
  musicPlayer
});
