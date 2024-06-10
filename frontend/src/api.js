

import axios from 'axios';

// Create an instance of axios
const api = axios.create({
    baseURL: 'http://localhost:8000/api', // Base URL of your Django backend
});

// Add a request interceptor
api.interceptors.request.use(
    config => {
        // Get the token from localStorage
        const token = localStorage.getItem('token');

        // If the token exists, add it to the headers
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default api;
