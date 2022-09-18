import { Book, PaginationResponse, GetBook } from '@src/models';
import axiosClient from "./AxiosConfig"

const bookApi = {
    getBookPagination: (page: number = 1, sort?: string, order?: string) => {
        return axiosClient.get<PaginationResponse<Book>>('/books', { params: { page } })
    },
    getBook: (slug: string) => {
        return axiosClient.get<GetBook>(`/books/${slug}`)
    },
    getRecommendBooks: () => {
        return axiosClient.get<Array<Book>>('/books/recommends')
    },
    getPopularBook: () => {
        return axiosClient.get<Array<Book>>('/books/popular')
    }
}

export default bookApi