// src/utils/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // This will be proxied to http://localhost:3000 via Vite
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
