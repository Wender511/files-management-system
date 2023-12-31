import axios from 'axios';
import qs from 'qs';

import authApi from './authApi';

export const getToken = () =>
  localStorage.getItem('access_token')
    ? localStorage.getItem('access_token')
    : null;

const getAuthorizationHeader = () => `Bearer ${getToken()}`;

export const request = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
    Authorization: getAuthorizationHeader(),
  },
  paramsSerializer: params => qs.stringify(params),
});

request.interceptors.request.use(function (config) {
  if (config.headers) {
    config.headers['Authorization'] = getAuthorizationHeader();
  }
  return config;
});

request.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response;
    }
    return response;
  },
  async function (error) {
    if (error.response.status === 404) {
      return error.response.status;
    }
    const originalRequest = error.config;
    if (error.code === 'ERR_NETWORK' && !originalRequest._retry) {
      originalRequest._retry = true;
      const response = await authApi.refresh();
      localStorage.setItem('access_token', response.data.refreshToken);
      request.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${response.data.refreshToken}`;
      originalRequest.headers = {
        Authorization: `Bearer ${response.data.refreshToken}`,
      };
      return axios(originalRequest);
    }
    return Promise.reject(error);
  },
);
