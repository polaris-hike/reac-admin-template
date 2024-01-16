import Axios from 'axios';
import config from '../../config';

export const commonRequest = Axios.create({
  baseURL: config.commonServiceHost,
  timeout: 8000,
});
commonRequest.interceptors.request.use(
  (_config) => {
    _config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return _config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
