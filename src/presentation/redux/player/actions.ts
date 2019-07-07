import { actionTypes } from "../actionTypes";
import { Music } from "domain/entity/music";

const PREFIX = actionTypes.HOME_MUSIC;
export const ON_PLAY = `${PREFIX}/ON_PLAY`;
export const ON_PAUSE = `${PREFIX}/ON_PAUSE`;
export const ON_TIME_UPDATE = `${PREFIX}/ON_TIME_UPDATE`;

export type PlayerStart = {
  type: string;
  isPlaying: boolean;
  music: Music
};

export type PlayerPause = {
  type: string;
  isPlaying: boolean;
}

export type PlayerTimeUpdate = {
  type: string;
  currentTime: number;
};

export type PlayerVolumeChange = {
  type: string;
  volume: number;
};

export type PlayerActions = PlayerStart & PlayerPause & PlayerTimeUpdate & PlayerVolumeChange;

export const onPlay =  (music: Music): PlayerStart => ({
  type: ON_PLAY,
  isPlaying: true,
  music
})

export const onPause = (): PlayerPause => ({
  type: ON_PAUSE,
  isPlaying: false
})

export const onTimeUpdate = (currentTime: number): PlayerTimeUpdate => ({
  type: ON_TIME_UPDATE,
  currentTime
})
