import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'
import bindClass from 'classnames/bind'
import logo from '@src/assets/images/logo.png'

const cx = bindClass.bind(styles)

const Logo = () => {
    return (
        <div className={cx("logo")}>
            <Link to={'/'}>
                <img src={logo} className={cx('logo-img')} alt="logo" />
                {/* <h2>
                                <span className={cx('first')}>Net</span><span className={cx('last')}>Novels</span>
                            </h2> */}
            </Link>
        </div>
    )
}

export default Logo