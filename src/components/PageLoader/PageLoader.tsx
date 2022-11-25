import React from 'react'
import classBind from 'classnames/bind'
import styles from './PageLoader.module.scss'
import taiChi from '@src/assets/icons/taichi.svg'
const cx = classBind.bind(styles)

const PageLoader = () => {
    return (
        <div className={cx('page-loader')}>
            <img className={cx('tai-chi')} src={taiChi} alt="tai chi" />
        </div>
    )
}

export default PageLoader