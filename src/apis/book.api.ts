import { ChapterResponse } from './../models/chapter';
import { Book, Chapter, PaginationResponse } from '@src/models';
import axiosClient from "./AxiosConfig"

const bookApi = {
    getBookPagination: (page: number = 1, sort?: string, order?: string) => {
        return axiosClient.get<PaginationResponse<Book>>('/books', { params: { page } })
    },
    getBook: (slug: string) => {
        return axiosClient.get<Book>(`/books/slug/${slug}`)
    },
    getRecommendBooks: () => {
        return axiosClient.get<Array<Book>>('/books/recommends')
    },
    getPopularBook: () => {
        return axiosClient.get<Array<Book>>('/books/popular')
    },
    getFullBooks: () => {
        return axiosClient.get<Array<Book>>('/books/full')
    },
    getChapters: (bookId: number, params?: { page?: number, sort?: string, order?: string }) => {
        return axiosClient.get<PaginationResponse<Chapter>>(`/books/${bookId}/chapters`, { params: params })
    },
    searchChapters: (bookId: number, params?: { q: string, page?: number, sort?: string, order?: string }) => {
        return axiosClient.get<PaginationResponse<Chapter>>(`/books/${bookId}/chapters/search`, { params: params })

    },
    getChapter: (bookSlug: string, chapterId: number) => {
        return axiosClient.get<ChapterResponse>(`/books/slug/${bookSlug}/chapter/${chapterId}`)
    }
}

export default bookApi