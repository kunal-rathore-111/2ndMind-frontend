
// SERVICE LAYER PATTERN
// api service point for axios instance with base url

import axios from "axios";
import { API_BASE_URL } from "../config/api";


export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    timeout: 10000, // maximum 10 mints for response else close the request
    headers: {
        "Content-Type": "application/json" // backend always needs json
    }
})

apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) { // if unauth then handle the redirect and clearing the memory
            window.dispatchEvent(new CustomEvent('auth:unauthorized')); // trigger event to clear the cache

            window.location.href = '/signin'; // redirects to the signin page
        }

        return Promise.reject(error); // pass the error to the component in which apiClient is used
    }
)