import { ActionType, getType } from 'typesafe-actions';
import * as Actions from './actions';
import { Music } from 'domain/entity/music';

type SebaCurationMusicListAction = ActionType<typeof Actions>;

interface SebaCurationMusicState {
  data: Music;
  loading: boolean;
}

const initialState: SebaCurationMusicState = {
  data: null as Music,
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
