import { StatusCode } from "application/utils/api";

export const actionTypes = {
  HOME: {
    MUSIC: 'HOME/MUSIC'
  },
  PLAYER: 'PLAYER',
  USER_ME: 'USERS_ME',
}

export type ErrorInfo = {
  statusCode: StatusCode;
  message?: string;
};
