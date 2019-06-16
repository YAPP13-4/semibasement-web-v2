import { StatusCode } from "application/utils/api";
import { FetchStatus } from "./FetchStatus";

export const actionTypes = {
  HOME_MUSIC : 'HOME_MUSIC',
  USERS_ME: 'USERS_ME',
}

export type ErrorInfo = {
  statusCode: StatusCode;
  message?: string;
};

export type FetchResult = {
  fetchState: FetchStatus;
  error?: ErrorInfo;
};
