import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { Adapter } from '../adapter';
import { BACKEND_URL, TOKEN_TYPE } from '../const';
import { getToken, saveToken } from './token';
import { IActivatedUserServer } from '../interfaces';

const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
    withCredentials: true,
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();
    const headers = config.headers;

    if (token && headers) {
      headers['authorization'] = `${TOKEN_TYPE}${token}`;
    }
    return config;
  });

  api.interceptors.response.use(
    (config) => {
      return config;
    },
    async (error) => {
      const originalRequest = error.config;
      if (
        error.response.status === 401 &&
        error.config &&
        !error.config._isRetry
      ) {
        originalRequest._isRetry = true;
        try {
          const { data } = await axios.get<IActivatedUserServer>(
            `${BACKEND_URL}/refresh`,
            { withCredentials: true }
          );
          const user = Adapter.ActivatedUser(data);
          saveToken(user.accessToken ?? '');
          return api.request(originalRequest);
        } catch (error) {
          console.log(error);
        }
      }
      throw error;
    }
  );

  return api;
};
