import React from 'react'
import styles from './SearchResultItem.module.scss'
import bindClass from 'classnames/bind'
import { Link } from 'react-router-dom'
import { Book } from '@src/models'
interface SearchResultItemProps {
    book: Book
}
const cx = bindClass.bind(styles)
const SearchResultItem = ({ book }: SearchResultItemProps) => {
    return (
        <Link to={'#'}>
            <div className={cx('result-item')}>
                <div className={cx("img-box")}>
                    <img src={book.image} alt="img" />
                </div>
                <div className={cx("result-content")}>
                    <div className={cx("book-title")}>{book.title}</div>
                    <div className={cx("book-cate")}>
                        {
                            book.categories?.map(cate => {
                                return (
                                    <span className={cx('tag tag-blue hover-none', 'book-cates')}>{cate.name}</span>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </Link>
    )
}

export default SearchResultItem