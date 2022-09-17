import React, { MouseEvent, useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import { IoKeyOutline } from 'react-icons/io5'
import styles from './Profile.module.scss'
import classNamesBind from 'classnames/bind'
const cx = classNamesBind.bind(styles)

const Profile = () => {

    const [showUpdateName, setShowUpdateName] = useState<boolean>(false)
    const [showUpdatePassword, setShowUpdatePassword] = useState<boolean>(false)
    const handleShowUpdateName = (e: MouseEvent) => {
        setShowUpdateName(!showUpdateName)
    }
    const handleShowUpdatePassword = (e: MouseEvent) => {
        setShowUpdatePassword(!showUpdatePassword)
    }

    return (
        <div className={cx('profile-page')}>
            <div className="wrapper">
                <h2 className={cx("profile-title")}>Thông tin tài khoản</h2>
                <div className={cx("profile-info")}>
                    <div className={cx("profile-field")}>
                        <div className={cx("profile-row")}>
                            <div className={cx("profile-row__title")}>Name</div>
                            <div >Huy Son</div>
                            {
                                !showUpdateName ? (
                                    <button className={cx('btn', 'edit-btn')} onClick={handleShowUpdateName}><FaPencilAlt />Sữa</button>
                                ) :
                                    (
                                        <button className={cx('btn', 'edit-btn')} onClick={handleShowUpdateName}>Close</button>
                                    )
                            }
                        </div>
                        {
                            showUpdateName && (
                                <div className={cx("edit-box")}>
                                    <div className={cx("edit-box__fields")}>
                                        <input type="text" placeholder='Nhập tên mới...' />
                                        <button className={cx('btn', 'btn-save')}>Lưu</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className={cx("profile-field")}>
                        <div className={cx("profile-row")}>
                            <div className={cx("profile-row__title")}>Email</div>
                            <div className={cx("disabled")}>huyson201@gmail.com</div>
                        </div>
                    </div>
                    <div className={cx("profile-field")}>
                        <div className={cx("profile-row")}>
                            <div className={cx("profile-row__title")}>Mật khẩu</div>
                            <div className={cx("profile-row__value")}><IoKeyOutline /> Nhấn sữa để thây đổi Mật khẩu</div>
                            {
                                !showUpdatePassword ? (
                                    <button className={cx('btn', 'edit-btn')} onClick={handleShowUpdatePassword}><FaPencilAlt />Sữa</button>
                                ) :
                                    (
                                        <button className={cx('btn', 'edit-btn')} onClick={handleShowUpdatePassword}>Close</button>
                                    )
                            }
                        </div>
                        {
                            showUpdatePassword && (
                                <div className={cx("edit-box")}>
                                    <div>
                                        <div className={cx("edit-box__fields")}>
                                            <input type="text" placeholder='Nhập mật khẩu cũ...' />
                                        </div>
                                        <div className={cx("edit-box__fields")}>
                                            <input type="text" placeholder='Nhập mật khẩu mới...' />
                                        </div>
                                        <div className={cx("edit-box__fields")}>
                                            <input type="text" placeholder='Nhập lại mật khẩu...' />
                                        </div>
                                    </div>
                                    <button className={cx('btn', 'btn-save-multi-field')}>Lưu</button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile