import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://tc-carpentry-d2974ed67d90.herokuapp.com',
    withCredentials: true,
});

export default axiosInstance;