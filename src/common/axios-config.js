import axios from 'axios';
import { apiBaseUrl } from './global-constants';

const api = axios.create({
  baseURL: apiBaseUrl,
});
// 요청 인터셉터 추가
api.interceptors.request.use((config) => {
  // 로컬 스토리지에서 JWT 토큰을 가져옴
  const token = localStorage.getItem('Authorization');

  // JWT 토큰이 있다면, 헤더에 추가
  if (token) {
    config = {
      ...config,
      headers: {
        ...config.headers,
        Authorization: token,
        'Content-Type': 'application/json',
      },
    };
  }

  return config;
});

export default api;
