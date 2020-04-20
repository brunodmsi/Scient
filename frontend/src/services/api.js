import axios from 'axios';
import 'dotenv/config';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:8080",
});

export default api;
