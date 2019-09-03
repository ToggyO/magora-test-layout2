import axios from 'axios';
import { REQUEST_ULR } from '../Constants';
import {getFromLocalState} from './localStorage';
import {refreshTokenData} from './HelperFunctions';


const instance = axios.create({
  baseURL: REQUEST_ULR.CORS_BASE_URL,
  timeout: 5000,
});

instance.interceptors.request.use((config) => {

  const tokenData = getFromLocalState('TOKEN_INFO');
  refreshTokenData(tokenData)

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return {
    ...config,
    headers,
  };
});

instance.interceptors.response.use(
  response => {
    return Promise.resolve((response && response.data) ? response.data : null)
  },
  error => Promise.reject(error.response),
);
