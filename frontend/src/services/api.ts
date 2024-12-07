import axios from 'axios';

<<<<<<< HEAD
const API_URL = 'http://localhost:5000/api';
=======
const API_URL = 'https://greenai-services-backen.onrender.com/api';
>>>>>>> 4a71599686b0b33709b5cf545a07b8a9aeee4742

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