import { Music } from 'domain/entity/music';
import { List } from 'immutable';
import { actionTypes, ErrorInfo } from '../actionTypes';
import { emptyList } from 'application/utils';
import { createAsyncAction, ActionType, createSaga } from 'application/utils/actionUtils';
import { FetchResult } from 'presentation/redux/actionTypes';
import { FetchStatus } from '../FetchStatus';
import { handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import { Application } from 'application/@context';

export const PREFIX = actionTypes.HOME_MUSIC;

export const getMusicAction = createAsyncAction(PREFIX);

export type SebaMusicState = {
  musicList: List<Music>
  errorMessage?: string // FIXME: 
}

const initialState: SebaMusicState = {
  musicList: emptyList(),
};

const reducer = {
  [getMusicAction.SUCCESS]: (state: SebaMusicState, action: ActionType) => ({
    ...state,
    musicList: action.payload
  }),
  [getMusicAction.FAILURE]: (state: SebaMusicState, action: ActionType) => ({
    ...state,
    musicList: emptyList(),
    errorMessage: action.payload,
  })
}

export const homeMusicReducer = handleActions(reducer, initialState)
export const homeMusicSaga = [takeLatest(
  getMusicAction.FETCH, 
  createSaga(PREFIX, Application.service.getCurationMusicList)
)]
