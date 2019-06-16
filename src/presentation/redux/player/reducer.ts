import { PlayerActions, ON_PLAY, ON_PAUSE, ON_TIME_UPDATE } from './actions';
import { Music } from 'domain/entity/music';

export type PlayerStateProps = {
  currentTime: number;
  isPlaying: boolean;
  currentMusic: Music;
}

const playerInitialState: PlayerStateProps = {
  currentTime: 0,
  isPlaying: false,
  currentMusic: null as Music,
}

export const musicPlayer = (
  state: PlayerStateProps = playerInitialState,
  action: PlayerActions,
): PlayerStateProps => {
  switch (action.type) {
    case ON_PLAY:
      return {
        ...state,
        currentMusic: action.music,
        isPlaying: action.isPlaying
      }
    case ON_PAUSE:
      return {
        ...state,
        isPlaying: action.isPlaying
      }
    case ON_TIME_UPDATE:
      return {
        ...state,
        currentTime: action.currentTime
      }
    default: 
      return state;
  }
}
