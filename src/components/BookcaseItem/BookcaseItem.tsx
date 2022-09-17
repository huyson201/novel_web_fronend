import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import styles from './BookcaseItem.module.scss'
import classNamesBind from 'classnames/bind'
const cx = classNamesBind.bind(styles)
const BookcaseItem = () => {
    return (

        <div className={cx("book-items")}>
            <div className={cx("book-items__container")}>
                <div className={cx("book-items__img")}>
                    <Link to={'#'}> <img src="https://cdn.tienvuc.xyz/media/books/1490a227-5615-41c8-a37c-ac8835d9bba3-a51a85.jpeg" alt="book image" /></Link>
                </div>
                <div className={cx("book-items__title")}>
                    <Link to={'#'}>
                        <h3 >
                            Bắt Đầu Quá Mạnh Làm Sao Bây Giờ (Dịch)
                        </h3>
                    </Link>
                </div>
                <div className={cx("book-items__chapter")}>
                    <Link to={'#'}>
                        Đọc tiếp chương 23
                    </Link>
                </div>
                <button className={cx('btn', 'remove-btn')}><IoCloseOutline /></button>
            </div>
        </div>

    )
}

export default BookcaseItem