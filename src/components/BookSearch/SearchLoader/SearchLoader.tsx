import React from 'react'
import styles from './SearchLoader.module.scss'
import classNamesBind from 'classnames/bind'

const cx = classNamesBind.bind(styles)
const SearchLoader = () => {
    return (
        <div className={cx('searching-item')}>
            <div className={cx("searching-item__img")}>
                <div className={cx("img-mockup")}></div>
            </div>
            <div className={cx("searching-item__content")}>
                <div className={cx("title-mockup")}></div>
                <div className={cx("content-mockup")}></div>
            </div>
        </div>
    )
}

export default SearchLoader