import axios from 'axios';

export const API_URL = process.env.NODE_ENV === 'development' ?
    'http://localhost:5000/api' :
    'https://backend-749788198781.asia-south1.run.app/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const login = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

export const signup = async (name: string, email: string, password: string) => {
  const response = await api.post('/auth/signup', { name, email, password });
  return response.data;
};

export default api;
