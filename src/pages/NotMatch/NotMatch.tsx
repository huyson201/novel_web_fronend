import React from 'react'
import styles from './ErrorPage.module.scss'
import bindClass from 'classnames/bind'
import Img from '@src/assets/images/error_page.png'
import { Link } from 'react-router-dom'
const cx = bindClass.bind(styles)
interface ErrorPageProps {
    title?: string
}
const NotMatch = ({ title }: ErrorPageProps) => {
    return (
        <div className={cx('page-wrapper')}>
            <img src={Img} alt="img" />
            <div className={cx('page-content')}>
                <h2 className={cx('page-title')}>{title ?? 'Truyện này không tồn tại hoặc bị xóa'}</h2>
                <Link className={cx('home-btn')} to={'/'}>Về Trang Chủ</Link>
            </div>
        </div>
    )
}

export default NotMatch