import { RegisterInput, LoginInput, Auth, BookCase, DeleteBookCaseResponse } from '@src/models';
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
    },
    deleteBookcase: (bookId: number) => {
        return axiosClient.delete<DeleteBookCaseResponse>('auth/me/bookcase/delete', { params: { book_id: bookId } })

    }
}

export default authApi