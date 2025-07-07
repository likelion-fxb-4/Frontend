// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://silversieon.store:8080', // 🛠️ 실제 API 도메인으로 교체
  headers: {
    'Content-Type': 'application/json'
  }
});

// 로그인한 사용자 이름을 헤더에 자동 포함
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  if (token) config.headers['Authorization'] = `Bearer ${token}`;
  if (username) config.headers['X-User'] = username;
  return config;
});

export default api;
