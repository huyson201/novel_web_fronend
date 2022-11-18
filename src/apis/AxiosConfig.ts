import authApi from '@src/apis/auth.api';
import axios from "axios";
declare module 'axios' {
    export interface AxiosResponse<T = any> extends Promise<T> { }
    export interface AxiosRequestConfig {
        _retry?: boolean
    }
}
const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_HOST}/api/v1`,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})

let isRefresh = false

axiosClient.interceptors.response.use((response) => {
    return response.data.data
}, error => {
    let { status, config, data } = error.response
    if (status === 401 && !config._retry && data === "Unauthorized") {
        if (isRefresh) {
            return
        }
        isRefresh = true
        config._retry = true
        return authApi.refreshToken().then(() => {
            isRefresh = false
            return axiosClient(config)
        })
    }
    return Promise.reject(error);
})

export default axiosClient