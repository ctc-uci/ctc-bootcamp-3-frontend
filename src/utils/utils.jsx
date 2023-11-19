import axios from 'axios';

const AboutYouBackend = axios.create({
  baseURL: import.meta.env.PROD
    ? import.meta.env.VITE_REACT_APP_BACKEND_HOST_PROD
    : import.meta.env.VITE_REACT_APP_BACKEND_HOST,
});

export { AboutYouBackend };
