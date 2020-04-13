/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export default api;
