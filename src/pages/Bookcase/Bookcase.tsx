import BookcaseItem from '@src/components/BookcaseItem'
import React from 'react'
import styles from './Bookcase.module.scss'
import classNamesBind from 'classnames/bind'
const cx = classNamesBind.bind(styles)

const Bookcase = () => {
    return (
        <div className={cx('book-case')}>
            <h2 className={cx("book-case__title")}>Tủ sách của bạn</h2>
            <div className={cx("book-case__list")}>
                <BookcaseItem />
                <BookcaseItem />
                <BookcaseItem />
                <BookcaseItem />
                <BookcaseItem />
                <BookcaseItem />
                <BookcaseItem />
                <BookcaseItem />
                <BookcaseItem />
                <BookcaseItem />
            </div>
        </div>
    )
}

export default Bookcase