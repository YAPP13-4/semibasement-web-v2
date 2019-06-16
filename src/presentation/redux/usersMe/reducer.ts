import { ActionType, getType } from 'typesafe-actions';

import { User } from 'domain/entity/user';
import { UserMeAction, REQUEST, SUCCESS, FAIL } from './actions';

interface UsersMeState {
  data: User;
}

const initialState: UsersMeState = {
  data: null as User,
};

export const usersMe = (
  state: UsersMeState = initialState,
  action: UserMeAction,
): UsersMeState => {
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
