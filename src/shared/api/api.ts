import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstore';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    'Content-Type': 'application/json',
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '' // bug
  }
});
