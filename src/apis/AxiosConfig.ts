import authApi from '@src/apis/auth.api';
import axios from "axios";
declare module 'axios' {
    export interface AxiosResponse<T = any> extends Promise<T> { }
    export interface AxiosRequestConfig {
        _retry?: boolean
    }
}
const axiosClient = axios.create({
    baseURL: 'http://localhost:3002/api/v1/',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})

let isRefresh = false

axiosClient.interceptors.response.use((response) => {
    return response.data.data
}, error => {
    let { status, config } = error.response
    if (status === 401 && !config._retry) {
        if (isRefresh) {
            return
        }
        isRefresh = true
        config._retry = true
        return authApi.refreshToken().then(() => {
            isRefresh = false
            console.log("refresh token.....")
            return axiosClient(config)
        })
    }
    return Promise.reject(error);
})

export default axiosClient