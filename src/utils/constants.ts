import bookApi from "@src/apis/book.api"

export const ACCESS_TOKEN_KEY = 'auth.access_token'
export const REFRESH_TOKEN_KEY = 'auth.refresh_token'

export const menuList = [
    {
        name: 'Truyện mới cập nhật',
        slug: 'truyen-moi',
        fetchData: bookApi.getBookPagination

    }
]