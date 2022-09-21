import React from 'react'
import styles from './BookRank.module.scss'
import classBind from 'classnames'
import { Book, PaginationResponse } from '@src/models'
import { BookItem } from '@src/components/HomeListBook/BookItem/BookItem'
import { useFetch } from '@src/hooks'
import bookApi from '@src/apis/book.api'
const cx = classBind.bind(styles)

interface BooksProps {
    title?: string,
    data?: PaginationResponse<Book>
    onPageChange?: () => void
}

const BookRank = () => {
    const { data, isLoading, error } = useFetch(async () => bookApi.getPopularBook({ limit: 30 }), [])
    return (
        <div className={cx("list-book-page")}>
            <div className={cx('list-book')}>
                <div className="wrapper">
                    <div className={cx("list-book__title")}>
                        <h2>{'Bảng Xếp Hạng'}</h2>
                    </div>
                    <div className={cx('list_books')}>
                        {
                            data?.map((value, index) => {
                                return (
                                    <BookItem bookRank={(index + 1)} book={value} key={`key-${value.slug}`} />
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BookRank