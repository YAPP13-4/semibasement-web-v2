import { combineReducers } from 'redux';
import { homeMusicReducer, SebaMusicState } from './getMusicInfo';
import { loadingReducer, loadingState } from 'application/modules/loading';
import { playerReducer, PlayerState } from './player';

export interface StoreState {
  sebaMusic: SebaMusicState;
  player: PlayerState;
  loading: loadingState;
}

export default combineReducers({ 
  sebaMusic: homeMusicReducer,
  loading: loadingReducer,
  playerReducer
});
