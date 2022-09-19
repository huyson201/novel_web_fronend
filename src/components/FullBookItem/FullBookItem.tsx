import React from 'react'
import { Link } from 'react-router-dom'
import styles from './FullBookItem.module.scss'
import classNamesBind from 'classnames/bind'
import { Book } from '@src/models'

const cx = classNamesBind.bind(styles)
export interface Props {
    book: Book
}
const FullBookItem = ({ book }: Props) => {
    return (
        <Link to="#" className={cx('novel-full-item__links')}>
            <div className={cx('novel-full-items')}>
                <h3 className={cx('novel-full-items__title')}>{book.title}</h3>
                <div className={cx("novel-full-items__cates")}>
                    <span className='tag tag-yellow tag-vip hover-none'>vip</span>
                    <span className='tag tag-green hover-none'>Full</span>

                    {
                        book.categories?.map(value => (
                            <span key={value.slug} className='tag tag-blue hover-none'>{value.name}</span>
                        ))
                    }
                </div>
            </div>
        </Link>
    )
}
export default FullBookItem

