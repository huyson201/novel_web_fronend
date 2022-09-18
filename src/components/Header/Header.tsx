import React, { useEffect, useState } from 'react'
import classnames from 'classnames/bind'
import { IoLogOutOutline, IoMenuOutline, IoPersonSharp } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import Dropdown from '../DropDown/DropDown'
import { LinkButton } from '../Button'
import style from './Header.module.scss'
import { useAppDispatch, useAppSelector } from '@src/redux'
import { Category } from '@src/models'
import categoryApi from '@src/apis/category.api'
import { logout } from '@src/redux/features/authSlice'
import authApi from '@src/apis/auth.api'
import HeaderMenuItem from '../HeaderMenuItem/HeaderMenuItem'
const cx = classnames.bind(style)

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
                    <div className={cx("logo")}>
                        <Link to={'/'}><h2><span className={cx('first')}>Net</span><span className={cx('last')}>Novels</span></h2></Link>
                    </div>
                    <button className={cx('menu-btn')} onClick={handleClickBars}><IoMenuOutline /></button>

                    <div className={cx('menu', { 'active': showMenu })}>
                        <div className={cx("list-option")}>
                            <HeaderMenuItem menuType='cate' />
                            <HeaderMenuItem menuType='list' />
                            {/* <Dropdown toggleClassName={cx('drop-toggle')} title='thể loại' dropContentClassName={cx('cate-drop-grid')} >
                                <Link to={'#'} className={`${cx("drop-content__items")} `}>
                                    Tiên Hiệp
                                </Link>
                                {
                                    categories.length > 0 && categories.map((value, _) => {
                                        return (
                                            <Link key={`category-${value.id}`} to={`/the-loai/${value.slug}`} className={`${cx("drop-content__items")} `}>
                                                {value.name}
                                            </Link>
                                        )
                                    })
                                }
                                {/* <Link to={'#'} className={`${cx("drop-content__items")} `}>
                                    Huyền Huyễn
                                </Link>
                                <Link to={'#'} className={`${cx("drop-content__items")} `}>
                                    Tiên Hiệp
                                </Link>
                                <Link to={'#'} className={`${cx("drop-content__items")} `}>
                                    Tiên Hiệp
                                </Link>
                                <Link to={'#'} className={`${cx("drop-content__items")} `}>
                                    Huyền Huyễn
                                </Link>
                                <Link to={'#'} className={`${cx("drop-content__items")} `}>
                                    Tiên Hiệp
                                </Link> */}
                            {/* </Dropdown> */}

                            {/* <Dropdown toggleClassName={cx('drop-toggle')} title='Danh sách' dropContentClassName={cx('list-drop-grid')}>
                                <Link to={'#'} className={`${cx("drop-content__items")} `}>
                                    Bảng Xếp hạng
                                </Link>
                                <Link to={'#'} className={`${cx("drop-content__items")} `}>
                                    Truyện miễn phí
                                </Link>
                                <Link to={'#'} className={`${cx("drop-content__items")} `}>
                                    Truyện đã hoàn thành
                                </Link>
                                <Link to={'#'} className={`${cx("drop-content__items")} `}>
                                    Truyện mới cập nhật
                                </Link>

                            </Dropdown> */}
                        </div>
                        {
                            auth.isLogged ?
                                (<div className={cx("account")}>
                                    <Dropdown title={auth.authProfile?.name || ''} toggleClassName={cx('account-drop-toggle')} className='custom-drop' dropContentClassName={cx('account-drop-content')}>
                                        <Link to='/account'>
                                            <IoPersonSharp />
                                            <span>Trang cá nhân</span>
                                        </Link>
                                        <Link to={'#'} onClick={handleLogout}>
                                            <IoLogOutOutline />
                                            <span>Đăng xuất</span>
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
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header