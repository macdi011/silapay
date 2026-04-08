import axios from 'axios';

// Si vous utilisez un émulateur Android, localhost est souvent 10.0.2.2
// Si vous utilisez un appareil physique, utilisez l'IP locale de votre ordinateur (ex: 192.168.1.x)
const API_URL = 'http://10.0.2.2:5000/api'; 

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const qrService = {
  generateQR: (data) => api.post('/qr/generate', data),
  getQR: (id) => api.get(`/qr/${id}`),
};

export const transactionService = {
  getTransactions: () => api.get('/transactions'),
  createTransaction: (data) => api.post('/transactions', data),
};

export const userService = {
  getUsers: () => api.get('/users'),
  createUser: (data) => api.post('/users', data),
};

export default api;
