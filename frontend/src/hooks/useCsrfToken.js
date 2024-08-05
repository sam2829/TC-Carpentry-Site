import { useEffect } from 'react';
import axios from 'axios';

// component to get the csrf token from backend
const useCsrfToken = () => {
    useEffect(() => {
        const fetchCsrfToken = async () => {
            try {
                const response = await axios.get('/get-csrf-token/');
                axios.defaults.headers.common['X-CSRFToken'] = response.data.csrfToken;
            } catch (error) {
                console.error('Error fetching CSRF token:', error);
            }
        };

        fetchCsrfToken();
    }, []);
};

export default useCsrfToken;