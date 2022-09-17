import React from 'react'
import ListBook from '@src/components/ListBook'
import Pagination from '@src/components/Pagination'
import styles from './Books.module.scss'
import classNamesBind from 'classnames/bind'
const cx = classNamesBind.bind(styles)
export interface Props {
    title?: string,
    onPageChange?: () => void
}
const Books = ({ title }: Props) => {
    return (
        <div className={cx("list-book-page")}>
            <div className={cx('list-book')}>
                <div className="wrapper">
                    <div className={cx("list-book__title")}>
                        <h2>{title || 'List'}</h2>
                    </div>
                    <ListBook />
                    <div className={cx("pagination-wrapper")}>
                        <Pagination total={100} pageSize={10} defaultPageSize={10} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Books