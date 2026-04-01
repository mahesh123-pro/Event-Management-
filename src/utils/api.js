import axios from 'axios';

// In development, Vite's proxy handles '/api' → 'http://localhost:5000'
// In production, VITE_API_URL points to your Heroku backend URL
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || '',
});

// Automatically attach admin token to requests if available
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('adminToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Handle expired tokens globally
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Token expired or invalid — clear it
            const currentPath = window.location.pathname;
            if (currentPath.startsWith('/admin') && currentPath !== '/admin/login') {
                localStorage.removeItem('adminToken');
                window.location.href = '/admin/login';
            }
        }
        return Promise.reject(error);
    }
);

export default api;
