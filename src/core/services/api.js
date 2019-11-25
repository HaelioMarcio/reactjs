import axios from "axios"
import {getToken} from './auth';

const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
})

api.interceptors.request.use(async config => {
    const token = getToken();
    if(token){
        config.headers.Authorization = `Beader ${token}`;
    }
    return config;
});

export default api;