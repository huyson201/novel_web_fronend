import React, { useEffect, useState } from 'react'
import classnames from 'classnames/bind'
import { IoLogOutOutline, IoMenuOutline, IoPersonSharp } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import Dropdown from '../DropDown/DropDown'
import { LinkButton } from '../Button'
import style from './Header.module.scss'
import { useAppDispatch, useAppSelector } from '@src/redux'
import { logout } from '@src/redux/features/authSlice'
import authApi from '@src/apis/auth.api'
import HeaderMenuItem from '../HeaderMenuItem/HeaderMenuItem'
import logo from '@src/assets/images/logo.png'
import Logo from '../Logo/Logo'
import { HeaderMenu, MenuItem, SubMenuItem } from '../HeaderMenu/HeaderMenu'

const cx = classnames.bind(style)
export const menuList = [
    {
        name: 'Bảng xếp hạng',
        slug: 'bxh'
    },
    {
        name: 'Truyện mới cập nhật',
        slug: 'truyen-moi',
    },
]
const Header = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)


    const auth = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleClickBars = () => {
        setShowMenu(!showMenu)
    }

    const handleLogout = async () => {
        await authApi.logout()
        dispatch(logout())
    }


    return (
        <header className={cx('header-top')}>
            <div className="wrapper">
                <div className={cx("header-container")}>
                    <Logo />
                    <button className={cx('menu-btn')} onClick={handleClickBars}><IoMenuOutline /></button>
                    <HeaderMenu>
                        <MenuItem title='Thể Loại'>
                            <SubMenuItem to={'#'}>
                                dadasd
                            </SubMenuItem>
                            <SubMenuItem to={'#'}>
                                dadasd
                            </SubMenuItem>
                            <SubMenuItem to={'#'}>
                                dadasd
                            </SubMenuItem>
                            <SubMenuItem to={'#'}>
                                dadasd
                            </SubMenuItem>
                        </MenuItem>
                        <MenuItem title=' Danh Sách'>

                            {
                                menuList.map(data => {
                                    return (
                                        <SubMenuItem to={data.slug} key={data.slug}>
                                            {data.name}
                                        </SubMenuItem>
                                    )
                                })
                            }
                        </MenuItem>
                    </HeaderMenu>
                    {/* <div className={cx('menu', { 'active': showMenu })}>
                        <div className={cx("list-option")}>
                            <HeaderMenuItem title='Thể loại' menuType='cate' />
                            <HeaderMenuItem title='Danh sách' menuType='list' />
                        </div>
                        {
                            auth.isLogged ?
                                (<div className={cx("account")}>
                                    <Dropdown title={auth.authProfile?.name || ''} toggleClassName={cx('account-drop-toggle')} className='custom-drop' dropContentClassName={cx('account-drop-content')}>
                                        <Link to='/account'>
                                            <IoPersonSharp />
                                            Trang cá nhân
                                        </Link>
                                        <Link to={'#'} onClick={handleLogout}>
                                            <IoLogOutOutline />
                                            Đăng xuất
                                        </Link>
                                    </Dropdown>
                                </div>
                                ) : (
                                    <div className={cx("login-register")}>
                                        <LinkButton to='/register' title='Đăng ký' className='btn hover-primary text-white bg-primary' />
                                        <LinkButton btnType='gray' to='/login' title='Đăng nhập' className='btn hover-gray text-black bg-gray' />
                                    </div>
                                )
                        }
                    </div> */}
                </div>
            </div>
        </header>
    )
}

export default Header