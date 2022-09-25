import React, { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import formatCurrency from '../../Helper/currencyFormat'
import currencyIcon from '@src/assets/icons/dollar-circle.svg'
import { MdOutlineBookmarkAdded } from 'react-icons/md'
import { IoPersonOutline } from 'react-icons/io5'
import styles from './Account.module.scss'
import classNamesBind from 'classnames/bind'
import { useAppDispatch, useAppSelector } from '@src/redux'
import { fetchAuth, fetchAuthFail, fetchAuthSuccess } from '@src/redux/features/authSlice'
import authApi from '@src/apis/auth.api'
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
    const auth = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (auth.authProfile) return
        dispatch(fetchAuth())
        const fetchData = async () => {
            try {
                let resData = await authApi.getInFo()
                console.log(resData)
                dispatch(fetchAuthSuccess(resData))
            } catch (error: any) {
                dispatch(fetchAuthFail())
            }
        }
        fetchData()
    }, [])

    return (
        <div className={cx('account-page')}>
            <div className='wrapper'>
                <section>
                    <div className={cx("side-bar")}>
                        <div className={cx("side-bar__head")}>
                            <div className={cx("user-name")}>{auth.authProfile?.name}</div>
                            <div className={cx("user-email")}>{auth.authProfile?.email}</div>
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