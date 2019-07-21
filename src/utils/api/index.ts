export enum StatusCode {
  SUCCESS = 200,
  TOKEN_EXPIRED = 401,
  UNAUTHORIZED = 403,
  NOT_FOUND = 404,
  LOCKED = 423,
}

export type requestQueryParams = {
  offset: number;
  limit: number;
};
