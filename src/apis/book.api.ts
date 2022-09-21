import { ChapterResponse } from './../models/chapter';
import { Book, Chapter, PaginationResponse } from '@src/models';
import axiosClient from "./AxiosConfig"

const bookApi = {
    getBookPagination: (params?: { page: number, sort?: string, order?: 'asc' | 'desc' }) => {
        return axiosClient.get<PaginationResponse<Book>>('/books', { params: params })
    },
    getBook: (slug: string) => {
        return axiosClient.get<Book>(`/books/slug/${slug}`)
    },
    getRecommendBooks: () => {
        return axiosClient.get<Array<Book>>('/books/recommends')
    },
    getPopularBook: (params?: { limit: number, sort?: string, order?: 'asc' | 'desc' }) => {
        return axiosClient.get<Array<Book>>('/books/popular', { params })
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
    },
    getByCate: (cateSlug: string, params?: { page?: number, order?: 'desc' | 'asc', sort?: string }) => {
        return axiosClient.get<PaginationResponse<Book>>(`/categories/${cateSlug}/books`, { params: params })
    }
}

export default bookApi