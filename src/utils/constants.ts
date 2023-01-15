import bookApi from "@src/apis/book.api"

export const ACCESS_TOKEN_KEY = 'auth.access_token'
export const REFRESH_TOKEN_KEY = 'auth.refresh_token'
export const LOGIN_SUCCESS_MESSAGE = 'Đăng nhập thành công!'
export const LOGOUT_SUCCESS_MESSAGE = 'Đăng xuất thành công!'
export const REGISTER_SUCCESS_MESSAGE = 'Đăng ký thành công!'
export const ADD_BOOKCASE_SUCCESS_MESSAGE = 'Đã thêm vào tủ sách!'
export const REMOVE_BOOKCASE_SUCCESS_MESSAGE = 'Đã xóa khỏi tủ sách!'
export const REQUIRED_LOGIN_MESSAGE = 'Vui lòng đăng nhập để thực hiện chức năng này.'
export const HOME_TOAST_ID = 'HomeToast'
export const LOGIN_TOAST_ID = 'LoginToast'
export const menuList = [
    {
        name: 'Truyện mới cập nhật',
        slug: 'truyen-moi',
        fetchData: bookApi.getBookPagination

    }
]