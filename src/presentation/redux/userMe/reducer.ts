import { User } from 'domain/entity/user';
import { UserMeAction, SUCCESS } from './actions';

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
