import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'
import classNamesBind from 'classnames/bind'
import appleStoreLogo from '@src/assets/images/app-store-logo.png'
import googlePlayLogo from '@src/assets/images/google-play-logo.png'
import Logo from '../Logo/Logo'
const cx = classNamesBind.bind(styles)
const Footer = () => {
    return (
        <footer className={cx('footer')}>
            <div className="wrapper">
                <div className={cx("container")}>
                    {/* <div className={cx("footer__logo")}>
                        NetNovel
                    </div> */}
                    <Logo />
                    <p className={cx("footer__content")}>Website đọc truyện dịch nhanh nhất, ổn định nhất, đọc truyện KHÔNG quảng cáo.</p>
                    <div className={cx("footer__app-links")}>
                        <Link to="#"><img src={appleStoreLogo} alt="app_store" /></Link>
                        <Link to="#"><img src={googlePlayLogo} alt="google_store" /></Link>
                    </div>
                    <div className={cx("footer__web-rule")}>
                        <Link to="#">Liên hệ hỗ trợ</Link>
                        <Link to="#">Quy Định & Chính Sách</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer