import { Music } from 'domain/entity/music';
import { List } from 'immutable';
import { actionTypes, ErrorInfo } from '../actionTypes';

const PREFIX = actionTypes.HOME_MUSIC;
export const REQUEST = `${PREFIX}/REQUEST`;
export const SUCCESS = `${PREFIX}/SUCCESS`;
export const FAIL = `${PREFIX}/FAIL`;

type SebaMusicRequest = {
  type: string;
}


type SebaMusicSuccess = {
  type: string;
  data: List<Music>;
}

type SebaMusicFail = {
  type: string;
  error: ErrorInfo;
}

export type SebaMusicAction = SebaMusicRequest &
SebaMusicSuccess &
SebaMusicFail;

export type RequestSebaMusic = () => SebaMusicRequest;

export const requestSebaCurationMusicLists: RequestSebaMusic = (): SebaMusicRequest  => ({
  type: REQUEST,
})

export const requestSebaCurationMusicSuccess = (
  data: List<Music>
): SebaMusicSuccess => ({
  type: SUCCESS,
  data,
})

export const requestSebaCurationMusicFail = (
  error: ErrorInfo
): SebaMusicFail => ({
  type: SUCCESS,
  error,
})

