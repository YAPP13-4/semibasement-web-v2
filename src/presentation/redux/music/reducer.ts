import { ActionType, getType } from 'typesafe-actions';
import * as Actions from './actions';
import { Music } from 'domain/entity/music';
import { List } from 'immutable';
import { emptyList } from 'application/utils';

export type SebaCurationMusicListAction = ActionType<typeof Actions>;

export type SebaCurationMusicState = {
  data: List<Music>;
  loading: boolean;
};

const initialState: SebaCurationMusicState = {
  data: emptyList(),
  loading: false,
};

export const sebaMusic = (
  state: SebaCurationMusicState = initialState,
  action: SebaCurationMusicListAction,
): SebaCurationMusicState => {
  switch (action.type) {
    case getType(Actions.requestSebaCurationMusicLists):
      return {
        ...state,
      };
    case getType(Actions.successSebaCurationMusicLists):
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
