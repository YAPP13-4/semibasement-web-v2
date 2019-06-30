import { actionTypes, ErrorInfo } from '../actionTypes';
import { User } from 'domain/entity/user';

const PREFIX = actionTypes.USERS_ME;
export const REQUEST = `${PREFIX}/REQUEST`;
export const SUCCESS = `${PREFIX}/SUCCESS`;
export const FAIL = `${PREFIX}/FAIL`;

type UserMeRequest = {
  type: string;
};

type UserMeSuccess = {
  type: string;
  data: User;
};

type UserMeFail = {
  type: string;
  error: ErrorInfo;
};

export type UserMeAction = UserMeRequest & UserMeSuccess & UserMeFail;

export type RequestUserMe = () => UserMeRequest;

export const requestUserMe: RequestUserMe = (): UserMeRequest => ({
  type: REQUEST,
});

export const requestUserMeSuccess = (data: User): UserMeSuccess => ({
  type: SUCCESS,
  data,
});

export const requestUserMeFail = (error: ErrorInfo): UserMeFail => ({
  type: FAIL,
  error,
});
