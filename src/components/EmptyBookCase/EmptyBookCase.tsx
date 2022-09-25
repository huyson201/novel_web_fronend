import React from 'react'
import img from '@src/assets/images/emptyBook.png'
import styles from './EmptyBookCase.module.scss'
import bindClass from 'classnames/bind'

const cx = bindClass.bind(styles)

const EmptyBookCase = () => {
    return (
        <div className={cx('case-wrapper')}>
            <img src={img} alt="image" />
            <h2 className={cx('case-title')}>Bạn chưa đánh dấu truyện nào cả</h2>
            <p className={cx('case-content')}>Hãy đánh dấu truyện đang đọc để đưa vào Tủ sách nhé!</p>
        </div>
    )
}

export default EmptyBookCase