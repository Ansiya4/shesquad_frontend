import axios from "axios";
import { BACKEND_BASE_URL } from "../api/api";

const api = axios.create({
    baseURL: BACKEND_BASE_URL,
    timeout: 8000,
    headers: {
        "Content-Type" : "application/json",
    }
});

// Request middleware
api.interceptors.request.use(
    function (config) {
        const authToken = localStorage.getItem('token');
        const accessToken = JSON.parse(authToken);
        if (accessToken){
            config.headers.Authorization = `Bearer ${accessToken.access}`;
        }
        return config;
    },
    function (error){
        return Promise.reject(error);
    }
);


// Responce middleware

api.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        if (error.response && error.response.status === 401)
            location.assign("/")

        return Promise.reject(error)
    }
)

export {api};