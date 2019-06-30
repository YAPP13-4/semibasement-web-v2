import { ActionType, getType } from 'typesafe-actions';

import { User } from 'domain/entity/user';
import { UserMeAction, REQUEST, SUCCESS, FAIL } from './actions';

export interface UserMeState {
  data: User;
}

const initialState: UserMeState = {
  data: null as User,
};

export const userMe = (
  state: UserMeState = initialState,
  action: UserMeAction,
): UserMeState => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};
