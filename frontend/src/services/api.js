import axios from 'axios';
import 'dotenv/config';

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export default api;
