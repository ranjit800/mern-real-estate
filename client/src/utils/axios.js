// src/utils/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api', // This will be proxied to http://localhost:3000 via Vite
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // 🚨 REQUIRED to send/receive cookies
});

export default instance;
