import axios, { AxiosResponse, AxiosPromise } from 'axios';
import { Config } from 'application/config';

export const AxiosInstance = axios.create({
	baseURL: Config.hosts.seba,
	timeout: 1000,
});

export const requestGET = (url: string, params?: Object, headers?: Object) =>
	AxiosInstance.get(url, { params, headers });
export const requestPOST = (
	url: string,
	data: any,
	headers: Object,
	params?: Object,
) => AxiosInstance.post(url, data, headers);
