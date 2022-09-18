import React from 'react'
import { Link } from 'react-router-dom'
import styles from './BookCard.module.scss'

import classNamesBind from 'classnames/bind'
import classNames from 'classnames'
import { Book } from '@src/models'
import { removeHTML, getEllipsisText } from '@src/utils'
const cx = classNamesBind.bind(styles)

export interface Props {
    className?: string,
    book: Book
}


const BookCard = ({ className, book }: Props) => {
    return (
        <div className={classNames(cx('book-card-items'), className)}>
            <Link to={book.slug}>
                <img src={book.image} alt="slider-img" />

                <div className={cx("cates")}>
                    <span className="tag tag-vip tag-yellow">VIP</span>
                </div>
                <div className={cx("book-info")}>
                    <h2 className={cx("book-info__title")}>
                        {getEllipsisText(book.title, 50)}
                    </h2>
                    <div className={cx('book-info__wrapper')}>
                        <div className={cx("book-info__cates")}>
                            <span className="tag  tag-white tag-color-black hover-none">{book.categories?.[0].name}</span>
                        </div>
                        <div className={cx("book-info__desc")}>
                            {getEllipsisText(removeHTML(book.desc))}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default BookCard