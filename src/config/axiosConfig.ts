import Config from 'react-native-config';
import axios from 'axios';
import { handleResponseErrors } from './handle-response-errors.ts';


export const axiosInstance = axios.create({
    baseURL: Config.API_URL,
});

axiosInstance.interceptors.request.use(
    (response) => {
        const token = Config.READ_TOKEN;
        if (token) {
            response.headers.Authorization = `Bearer ${token}`;
        }
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) =>  response,
    (error) => handleResponseErrors(error)
);


