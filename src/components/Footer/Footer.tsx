import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'
import classNamesBind from 'classnames/bind'

const cx = classNamesBind.bind(styles)
const Footer = () => {
    return (
        <footer className={cx('footer')}>
            <div className="wrapper">
                <div className={cx("container")}>
                    <div className={cx("footer__logo")}>
                        NetNovel
                    </div>
                    <p className={cx("footer__content")}>Website đọc truyện dịch nhanh nhất, ổn định nhất, đọc truyện KHÔNG quảng cáo.</p>
                    <div className={cx("footer__app-links")}>
                        <Link to="#"><img src="https://tienvuc.xyz/_nuxt/img/app-store-badge.fba0f3f.png" alt="app_store" /></Link>
                        <Link to="#"><img src="https://tienvuc.xyz/_nuxt/img/google-play-badge.0dbdf26.png" alt="google_store" /></Link>
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