import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstore';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    'Content-Type': 'application/json',
  }
});

$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
  }
  return config;
});
