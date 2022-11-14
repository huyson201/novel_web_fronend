import { RegisterInput, LoginInput, Auth, BookCase, DeleteBookCaseResponse, BookcaseResponse } from '@src/models';
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
    refreshToken: () => {
        return axiosClient.post('/auth/refresh-token')
    },
    deleteBookcase: (bookId: number) => {
        return axiosClient.delete<DeleteBookCaseResponse>('auth/me/bookcase/delete', { params: { book_id: bookId } })
    },
    addBookcase: (bookId: number, chapterId: number) => {
        return axiosClient.post<BookcaseResponse>('auth/me/bookcase/add', { book_id: bookId, chapter_id: chapterId })
    },
    getBookcaseById: (bookId: number) => {
        return axiosClient.get<BookcaseResponse>('auth/me/bookcase/find/' + bookId)
    },
    changeUsername: (username: string) => {
        return axiosClient.post<Auth>('auth/me/update/name', { username })
    },
    changePassword: (data: { oldPassword: string, newPassword: string, confirmPassword: string }) => {
        return axiosClient.post<{ message: string, data: any, status: number }>('auth/me/update/password', { ...data })
    }
}

export default authApi