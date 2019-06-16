import { actionTypes, ErrorInfo } from '../actionTypes';
import { User } from 'domain/entity/user';

const PREFIX = actionTypes.USERS_ME;
export const REQUEST = `${PREFIX}/REQUEST`;
export const SUCCESS = `${PREFIX}/SUCCESS`;
export const FAIL = `${PREFIX}/FAIL`;

type UsersMeRequest = {
  type: string;
};

type UsersMeSuccess = {
  type: string;
  data: User;
};

type UsersMeFail = {
  type: string;
  error: ErrorInfo;
};

export type UserMeAction = UsersMeRequest & UsersMeSuccess & UsersMeFail;

export type RequestUserMe = () => UsersMeRequest;

export const requestUsersMe: RequestUserMe = (): UsersMeRequest => ({
  type: REQUEST,
});

export const requestUsersMeSuccess = (data: User): UsersMeSuccess => ({
  type: SUCCESS,
  data,
});

export const requestUsersMeFail = (error: ErrorInfo): UsersMeFail => ({
  type: FAIL,
  error,
});
