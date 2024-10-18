import axios from 'axios';
import Config from 'react-native-config';

export const axiosInstance = axios.create({
    baseURL: Config.API_URL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = Config.READ_TOKEN;

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

