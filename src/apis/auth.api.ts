import { RegisterInput, LoginInput, Auth, BookCase } from '@src/models';
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
    },
    getInFo: () => {
        return axiosClient.get<Auth>('auth/me')
    },
    getBookcase: () => {
        return axiosClient.get<Array<BookCase>>('auth/me/bookcase')
    }
}

export default authApi