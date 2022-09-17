import { RegisterInput, LoginInput, Auth } from '@src/models';
import axiosClient from './AxiosConfig'

const authApi = {
    register: (data: RegisterInput) => {
        return axiosClient.post<Auth>('auth/register', data)
    },
    login: (data: LoginInput) => {
        return axiosClient.post<Auth>('auth/login', data)
    },
    logout: () => {
        return axiosClient.post('auth/logout')
    }
}

export default authApi