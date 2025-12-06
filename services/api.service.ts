
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