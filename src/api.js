import axios from 'axios';

const api = axios.create({
  baseURL: 'https://silversieon.store',
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  if (token) config.headers['Authorization'] = `Bearer ${token}`;
  if (username) config.headers['X-User'] = username;
  return config;
});

export default api;
