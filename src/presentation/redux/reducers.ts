import { combineReducers } from 'redux';
import { homeMusicReducer, SebaMusicState } from './getMusicInfo';
import { loadingReducer, loadingState } from 'application/modules/loading';
import { playerReducer, PlayerState } from './player';
import { UserMeState, userMeReducer } from './userMe';

export interface StoreState {
  sebaMusic: SebaMusicState;
  player: PlayerState;
  loading: loadingState;
  userMe: UserMeState;
}

export default combineReducers({ 
  sebaMusic: homeMusicReducer,
  loading: loadingReducer,
  player: playerReducer,
  userMe: userMeReducer,
});
