import axios from "axios";
declare module 'axios' {
    export interface AxiosResponse<T = any> extends Promise<T> { }
}
const axiosClient = axios.create({
    baseURL: 'http://localhost:3002/api/v1/',
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
})

axiosClient.interceptors.response.use(response => {
    return response.data.data
})

export default axiosClient