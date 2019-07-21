import { createAction, handleActions } from 'redux-actions';
import { ActionType } from 'application/utils/actionUtils';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = createAction<string>(START_LOADING);
export const finishLoading = createAction<string>(FINISH_LOADING);

const initialState = {}

export type loadingState = {
  [index: string]: boolean;
}

const reducer = {
  [START_LOADING]: (state: loadingState, action: ActionType) => ({
    ...state,
    [action.payload]: true,
  }),
  [FINISH_LOADING]: (state: loadingState, action: ActionType) => ({
    ...state,
    [action.payload]: false,
  }),
}

export const loadingReducer = handleActions(reducer, initialState)
