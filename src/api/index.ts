import axios from 'axios';
import { Config } from 'application/config';

export const AxiosInstance = axios.create({
  baseURL: Config.hosts.seba,
  timeout: 1000,
});

/* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-function-return-type */
export const requestGET = (url: string, params?: Record<string, any>, headers?: Record<string, any>) => {
  return AxiosInstance.get(url, { params, headers });
};

/* eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-function-return-type */
export const requestPOST = (url: string, data: any, params?: Record<string, any>, headers?: Record<string, any>) => {
  return AxiosInstance.post(url, data, { params, headers });
};
