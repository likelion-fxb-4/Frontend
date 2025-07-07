// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://43.201.107.45:8080', // 🛠️ 실제 API 도메인으로 교체
  headers: {
    'Content-Type': 'application/json'
  }
});

// 로그인한 사용자 이름을 헤더에 자동 포함
api.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken') || "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMTIzQGdtYWlsLmNvbSIsImp0aSI6InVzZXIxMjNAZ21haWwuY29tIiwiaWF0IjoxNzUxODc3MjUwLCJleHAiOjE3NTIwNTAwNTB9.pdXuqpTaJqeZu12tm7-BzRoCGwDo8aGCbg56mln2EcY";
  const username = localStorage.getItem('username');
  if (token) config.headers['Authorization'] = `Bearer ${token}`;
  if (username) config.headers['X-User'] = username;
  return config;
});

export default api;
