export interface DefaultApiResponse {
    status: number,
    message: String,
    data?: any
}

export interface PaginationResponse<T> {
    previous?: {
        page: number,
        limit: number
    },
    next?: {
        page: number,
        limit: number
    },
    total: number,
    per_page: number
    result: [T]
}

export interface Slider {
    id: number,
    bookId: number,
    bannerImg: string,
    book: {
        slug: string
    }
}
export type Order = 'asc' | 'desc'
