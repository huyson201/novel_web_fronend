import React from 'react'
import Pagination from '@src/components/Pagination'
import { Book, PaginationResponse } from '@src/models'
import styles from './Books.module.scss'
import classNamesBind from 'classnames/bind'
import HomeListBook from '@src/components/HomeListBook'
import { BookItem } from '@src/components/HomeListBook/BookItem/BookItem'
import { useSearchParams } from 'react-router-dom'
const cx = classNamesBind.bind(styles)
export interface BooksProps {
    title?: string,
    data?: PaginationResponse<Book>
    onPageChange?: () => void
}
const Books = ({ title, data }: BooksProps) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const handlePaginationOnchange = (current: number, pageSize: number) => {
        setSearchParams(`page=${current}`)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div className={cx("list-book-page")}>
            <div className={cx('list-book')}>
                <div className="wrapper">
                    <div className={cx("list-book__title")}>
                        <h2>{title || 'List'}</h2>
                    </div>
                    <div className={cx('list_books')}>
                        {
                            data?.result.map((value) => {
                                return (
                                    <BookItem book={value} key={`key-${value.slug}`} />
                                )
                            })
                        }
                    </div>
                    <div className={cx("pagination-wrapper")}>
                        <Pagination current={parseInt(searchParams.get('page') || '1')} onChange={handlePaginationOnchange} total={data?.total} pageSize={data?.per_page ?? 0} defaultPageSize={10} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Books