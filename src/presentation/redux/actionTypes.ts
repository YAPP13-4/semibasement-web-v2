import { StatusCode } from "application/utils/api";

export const actionTypes = {
  HOME: {
    MUSIC: 'HOME/MUSIC'
  },
  PLAYER: 'PLAYER',
}

export type ErrorInfo = {
  statusCode: StatusCode;
  message?: string;
};
