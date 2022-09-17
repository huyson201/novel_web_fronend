import { BookResponse, GetBook } from '@src/models';
import defaultAxios from "./AxiosConfig"

const bookApi = {
    getPagination: (page: number = 1, order: string = 'updatedAt:desc') => {
        return defaultAxios.get<BookResponse>('/books', { params: { page, order } })
    },
    getBook: (slug: string) => {
        return defaultAxios.get<GetBook>(`/books/${slug}`)
    }
}

export default bookApi