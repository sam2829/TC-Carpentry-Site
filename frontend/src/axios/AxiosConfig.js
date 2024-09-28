import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://www.tomcostincarpentry.co.uk',
    withCredentials: true,
});

export default axiosInstance;