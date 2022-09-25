import BookcaseItem from '@src/components/BookcaseItem'
import React from 'react'
import styles from './Bookcase.module.scss'
import classNamesBind from 'classnames/bind'
import EmptyBookCase from '@src/components/EmptyBookCase'
import { useFetch } from '@src/hooks'
import authApi from '@src/apis/auth.api'
const cx = classNamesBind.bind(styles)

const Bookcase = () => {
    const { data: bookcase, isLoading, error } = useFetch(authApi.getBookcase, [])
    return (
        <div className={cx('book-case')}>
            <h2 className={cx("book-case__title")}>Tủ sách của bạn</h2>
            <div className={cx("book-case__list")}>
                {
                    bookcase?.map((value, index) => {
                        return (
                            <BookcaseItem bookcase={value} key={`${value.book.slug}-${index}`} />
                        )
                    })
                }

                {
                    !bookcase && isLoading && (<EmptyBookCase />)
                }
            </div>
        </div>
    )
}

export default Bookcase