import { actionTypes } from '../actionTypes';
import { createAsyncAction, ActionType, createSaga } from 'application/utils/actionUtils';
import { handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import { Application } from 'application/@context';
import { User } from 'domain/entity/user';

export const PREFIX = actionTypes.USER_ME;

export const getUserMe = createAsyncAction(PREFIX);

export type UserMeState = {
    data: User;
  }
  
  const initialState: UserMeState = {
    data: null as User,
  };

const reducer = {
  [getUserMe.SUCCESS]: (state: UserMeState, action: ActionType) => ({
    ...state,
    data: action.payload
  }),
  [getUserMe.FAILURE]: (state: UserMeState, action: ActionType) => ({
      ...state,
      data: null as User,
      errorMessage: action.payload,
  })
}

export const userMeReducer = handleActions(reducer, initialState)
export const userMeSaga = [takeLatest(
    getUserMe.FETCH, 
    createSaga(PREFIX, Application.userContext.service.getUserMe)
)]
