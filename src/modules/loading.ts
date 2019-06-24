import { createAction, handleActions } from 'redux-actions';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = createAction<Boolean>(START_LOADING);
export const finishLoading = createAction<Boolean>(FINISH_LOADING);

const initialState = {}

export type loadingState = {
  [index: string]: boolean;
}

const reducer = {
  [START_LOADING]: (state: loadingState, action: any) => ({
    ...state,
    [action.payload]: true,
  }),
  [FINISH_LOADING]: (state: loadingState, action: any) => ({
    ...state,
    [action.payload]: false,
  }),
}

export const loadingReducer = handleActions(reducer, initialState)
