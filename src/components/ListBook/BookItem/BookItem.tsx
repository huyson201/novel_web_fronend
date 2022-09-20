import React from 'react'
import { Link } from 'react-router-dom'
import styles from './BookItem.module.scss'
import classNamesBind from 'classnames/bind'
import { Book } from '@src/models/book'
import moment from 'moment'
import { getTimeToNow } from '@src/utils'

const cx = classNamesBind.bind(styles)
export interface Props {
    book: Book
}
const BookItem = ({ book }: Props) => {
    return (
        <div className={cx('list-items')}>
            <div className={cx("img-box")}>
                <Link to={book.slug || '#'}>
                    <img src={book.image} alt="avatar" />
                </Link>
            </div>
            <div className={cx("list-items__contents")}>
                <div className={cx("list-items__contents-title")}>
                    <Link to={book.slug || '#'}>
                        <h3 className={cx('title')}>{book.title || 'Đang Cập Nhật'} <span className="tag tag-yellow tag-vip">VIP</span></h3>
                    </Link>
                    <p className={cx("author")}>{book.author?.replace("Tác giả: ", "") || 'Đang Cập Nhật'}</p>
                </div>

                <div className={cx("cates")}>

                    {
                        book.categories && book.categories.map(value => {
                            return (
                                <Link key={`cate-${value.slug}`} to={`/the-loai/${value.slug}`}><span className='tag tag-blue'>{value.name}</span></Link>
                            )
                        })
                    }


                </div>
                {
                    book.chapters && (<div className={cx("chapter")}>
                        <Link to="#" className={cx('chapter__links')}>
                            <span className={cx('chapter__number')}>Chương {book.chapters[0]?.chapterNumber}.</span>
                            <span className={cx('chapter__title')}>{book.chapters[0]?.title}</span>
                        </Link>
                        <p className={cx("times")}>{getTimeToNow(book.chapters[0]?.updatedAt)}</p>
                    </div>)
                }

            </div>
        </div>
    )
}

export default BookItem