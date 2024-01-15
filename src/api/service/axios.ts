import Axios from 'axios';
import config from '../../config';

export const commonRequest = Axios.create({
  baseURL: config.commonServiceHost,
  timeout: 8000,
});
