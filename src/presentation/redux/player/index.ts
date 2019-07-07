import { actionTypes } from "../actionTypes";
import { Music } from "domain/entity/music";
import { createNormalAction, ActionType } from "application/utils/actionUtils";
import { handleActions } from "redux-actions";

const PREFIX = actionTypes.PLAYER;
export const ON_PLAY = `${PREFIX}/ON_PLAY`;
export const ON_PAUSE = `${PREFIX}/ON_PAUSE`;
export const ON_TIME_UPDATE = `${PREFIX}/ON_TIME_UPDATE`;

export type PlayerState = {
  currentTime: number;
  isPlaying: boolean;
  currentMusic: Music;
}

const playerInitialState: PlayerState = {
  currentTime: 0,
  isPlaying: false,
  currentMusic: null as Music,
}

export const onPlay = createNormalAction(PREFIX, 'ON_PLAY');
export const onPause = createNormalAction(PREFIX, 'ON_PAUSE');
export const onTimeUpdate = createNormalAction(PREFIX, 'ON_TIME_UPDATE');

const reducer = {
  [onPlay.ACTION_TYPE]: (state: PlayerState, action: ActionType) => ({
    ...state,
    isPlaying: true,
    music: action.payload
  }),
  [onPause.ACTION_TYPE]: (state: PlayerState, action: ActionType) => ({
    ...state,
    isPlaying: false
  }),
  [onTimeUpdate.ACTION_TYPE]: (state: PlayerState, action: ActionType) => ({
    ...state,
    isPlaying: true,
    currentTime: action.payload
  }),
}

export const playerReducer = handleActions(reducer, playerInitialState);

