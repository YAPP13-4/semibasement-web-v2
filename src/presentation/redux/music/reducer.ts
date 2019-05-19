import { Music } from 'domain/entity/music';
import { List } from 'immutable';
import { emptyList } from 'application/utils';
import { FetchResult } from '../actionTypes';
import { FetchStatus } from '../FetchStatus';
import { SebaMusicAction, REQUEST, SUCCESS, FAIL } from './actions';

const sebaMusicFetchInitialState: FetchResult = {
  fetchState: FetchStatus.DEFAULT,
};

export type SebaMusicStateProps = {
  data: List<Music>;
}

const sebaMusicInitialState: SebaMusicStateProps = {
  data: emptyList(),
};

export const sebaMusic = (
  state: SebaMusicStateProps = sebaMusicInitialState,
  action: SebaMusicAction,
): SebaMusicStateProps => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        data : action.data,
      };
    case FAIL:
      return sebaMusicInitialState;
    default:
      return state;
  }
};

export const sebaMusicFetchState = (
  state: FetchResult = sebaMusicFetchInitialState,
  action: SebaMusicAction,
): FetchResult => {
  switch (action.type) {
    case REQUEST:
      return {
        fetchState: FetchStatus.LOADING,
      };
    case SUCCESS:
      return {
        fetchState: FetchStatus.SUCCESS,
      };
    case FAIL:
      return {
        fetchState: FetchStatus.ERROR,
        error: action.error,
      };
    default:
      return state;
  }
};