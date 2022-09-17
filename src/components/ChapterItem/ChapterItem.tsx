import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ChapterItem.module.scss'
import classNamesBind from 'classnames/bind'
const cx = classNamesBind.bind(styles)
const ChapterItem = () => {
    return (

        <div className={cx('chapter-items')}>
            <Link to={'#'}>
                <div className={cx("chapter-items__title")}>
                    <span className={cx("chapter-items__title-number")}>
                        Chương 1.
                    </span>
                    <span className={cx("chapter-items__title-text")}>
                        Sống lại
                    </span>
                </div>
                <div className={cx("times")}>
                    Cập nhật: 8 tháng trước
                </div>
            </Link>
        </div>

    )
}

export default ChapterItem