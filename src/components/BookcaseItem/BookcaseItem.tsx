import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import styles from './BookcaseItem.module.scss'
import classNamesBind from 'classnames/bind'
import { BookCase } from '@src/models'
import { handleErrorImage } from '@src/utils'
const cx = classNamesBind.bind(styles)
interface BookCaseItemProps {
    bookcase: BookCase,
    onDelete?: (bookId: number) => void
}
const BookcaseItem = ({ bookcase, onDelete }: BookCaseItemProps) => {
    const handleDelete = () => {
        onDelete && onDelete(bookcase.book.id)
    }
    return (

        <div className={cx("book-items")}>
            <div className={cx("book-items__container")}>
                <div className={cx("book-items__img")}>
                    <Link to={`/${bookcase.book.slug}`}> <img src={`${import.meta.env.VITE_API_HOST}/api/v1/image?url=${bookcase.book.image}`} alt="book image" onError={handleErrorImage} /></Link>
                </div>
                <div className={cx("book-items__title")}>
                    <Link to={`/${bookcase.book.slug}`}>
                        <h3 >
                            {bookcase.book.title}
                        </h3>
                    </Link>
                </div>
                <div className={cx("book-items__chapter")}>
                    <Link to={`/${bookcase.book.slug}/chapter-${bookcase.chapter.chapterNumber}/${bookcase.chapter.id}`}>
                        Đọc tiếp chương {bookcase.chapter.chapterNumber}
                    </Link>
                </div>
                <button className={cx('btn', 'remove-btn')} onClick={handleDelete}><IoCloseOutline /></button>
            </div>
        </div>

    )
}

export default BookcaseItem