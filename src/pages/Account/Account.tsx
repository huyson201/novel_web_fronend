import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import formatCurrency from '../../Helper/currencyFormat'
import currencyIcon from '@src/assets/icons/dollar-circle.svg'
import { MdOutlineBookmarkAdded } from 'react-icons/md'
import { IoPersonOutline } from 'react-icons/io5'
import styles from './Account.module.scss'
import classNamesBind from 'classnames/bind'
const cx = classNamesBind.bind(styles)

type SidebarItem = {
    icon: JSX.Element,
    title: string,
    path?: string
}

const sideBarItems: Array<SidebarItem> = [
    {
        icon: <MdOutlineBookmarkAdded />,
        title: "Tủ sách",
        path: '.'
    },
    {
        icon: <IoPersonOutline />,
        title: "Thông tin tài khoản",
        path: './profile'
    }
]

const Account = () => {

    return (
        <div className={cx('account-page')}>
            <div className='wrapper'>
                <section>
                    <div className={cx("side-bar")}>
                        <div className={cx("side-bar__head")}>
                            <div className={cx("user-name")}>Sontk147vn</div>
                            <div className={cx("user-email")}>huyson@gmail.com</div>
                            <div className={cx("user-coins")}>
                                <img src={currencyIcon} alt="dollar icon" />
                                <span className={cx("coins")}>
                                    0 Xu
                                </span>
                            </div>
                        </div>
                        <ul className={cx("side-bar__menu")}>
                            {
                                sideBarItems.map((e, index) => {
                                    return (
                                        <li key={index}><NavLink end className={cx(`side-bar__links`)} to={e.path || '#'}>{e.icon}{e.title}</NavLink></li>
                                    )
                                })
                            }

                        </ul>

                    </div>
                    <div className={cx("account-content")}>
                        <Outlet />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Account