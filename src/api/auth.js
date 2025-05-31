import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

export const signup = async (userData) => {
    const res = await axios.post(`${API}/auth/signup`, userData);
    return res.data;
};

export const login = async (credentials) => {
    const res = await axios.post(`${API}/auth/login`, credentials);
    return res.data;
};

export const getProtectedData = async (token) => {
    const res = await axios.get(`${API}/protected`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return res.data;
};
