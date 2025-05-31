import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true, // Optional if you plan to use cookies
});

export default API;
