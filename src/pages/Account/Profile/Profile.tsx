import React, { MouseEvent, useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import { IoKeyOutline } from 'react-icons/io5'
import styles from './Profile.module.scss'
import classNamesBind from 'classnames/bind'
import { useAppDispatch, useAppSelector } from '@src/redux'
import { updateName, updateNameFail, updateNameSuccess } from '@src/redux/features/authSlice'
import authApi from '@src/apis/auth.api'
import { Auth, ChangePasswordInput } from '@src/models'
import * as yup from "yup"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import FormFeedBack from '@src/components/FormFeedBack'
import InputField from '@src/components/InputField'
const cx = classNamesBind.bind(styles)


const passwdSchema = yup.object({
    oldPasswd: yup.string().min(6, 'Password must be at least 6 characters').required('Password is a required field'),
    newPasswd: yup.string().min(6, 'Password must be at least 6 characters').required('Password is a required field'),
    reNewPasswd: yup.string().min(6, 'Password must be at least 6 characters').required('Password is a required field').oneOf([yup.ref('newPasswd'), null], 'Confirm password must match.')
})

const Profile = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ChangePasswordInput>({
        resolver: yupResolver(passwdSchema),
        mode: 'onSubmit',
        reValidateMode: 'onChange'
    })

    const [showUpdateName, setShowUpdateName] = useState<boolean>(false)
    const [showUpdatePassword, setShowUpdatePassword] = useState<boolean>(false)
    const nameIpRef = React.createRef<HTMLInputElement>()

    const user = useAppSelector(state => state.auth.authProfile)
    const dispatch = useAppDispatch()

    const handleShowUpdateName = (e: MouseEvent) => {
        setShowUpdateName(!showUpdateName)
    }
    const handleShowUpdatePassword = (e: MouseEvent) => {
        setShowUpdatePassword(!showUpdatePassword)
    }

    // handle change name
    const handleChangeName = async () => {
        // update state loading
        dispatch(updateName())
        // get new username
        let newName = nameIpRef?.current?.value
        if (!newName) {
            dispatch(updateNameFail())
            return
        }

        try {
            let resData = await authApi.changeUsername(newName)
            dispatch(updateNameSuccess(resData))

        } catch (error) {
            dispatch(updateNameFail())
            console.log(error)
        }
        finally {
            setShowUpdateName(false)
        }


    }

    // handle change password
    const handleChangePasswd = async (data: ChangePasswordInput) => {
        try {
            await authApi.changePassword({ oldPassword: data.oldPasswd, newPassword: data.newPasswd, confirmPassword: data.reNewPasswd })
            setShowUpdatePassword(false)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className={cx('profile-page')}>
            <div className="wrapper">
                <h2 className={cx("profile-title")}>Thông tin tài khoản</h2>
                <div className={cx("profile-info")}>
                    <div className={cx("profile-field")}>
                        <div className={cx("profile-row")}>
                            <div className={cx("profile-row__title")}>Name</div>
                            <div>{user?.name}</div>
                            {
                                !showUpdateName ? (
                                    <button className={cx('btn', 'edit-btn')} onClick={handleShowUpdateName}><FaPencilAlt />Edit</button>
                                ) :
                                    (
                                        <button className={cx('btn', 'edit-btn')} onClick={handleShowUpdateName}>Cancel</button>
                                    )
                            }
                        </div>
                        {
                            showUpdateName && (
                                <div className={cx("edit-box")}>
                                    <div className={cx("edit-box__fields")}>
                                        <input type="text" name='newName' placeholder='Nhập tên mới...' ref={nameIpRef} />
                                        <button className={cx('btn', 'btn-save')} onClick={handleChangeName}>Change</button>
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
                                    <button className={cx('btn', 'edit-btn')} onClick={handleShowUpdatePassword}><FaPencilAlt />Edit</button>
                                ) :
                                    (
                                        <button className={cx('btn', 'edit-btn')} onClick={handleShowUpdatePassword}>Cancel</button>
                                    )
                            }
                        </div>
                        {
                            showUpdatePassword && (
                                <form action="#" onSubmit={handleSubmit(handleChangePasswd)}>
                                    <div className={cx("edit-box")}>
                                        <div>
                                            <div className={cx("edit-box__fields")}>
                                                <input type="password" placeholder='Nhập mật khẩu cũ...'  {...register('oldPasswd')} />
                                            </div>
                                            {errors?.oldPasswd && <div className={cx('feed-back-errors')}>{errors.oldPasswd.message}</div>}
                                            <div className={cx("edit-box__fields")}>
                                                <input type="password" placeholder='Nhập mật khẩu mới...' {...register('newPasswd')} />
                                            </div>
                                            {errors?.newPasswd && <div className={cx('feed-back-errors')}>{errors.newPasswd.message}</div>}
                                            <div className={cx("edit-box__fields")}>
                                                <input type="password" placeholder='Nhập lại mật khẩu...' {...register('reNewPasswd')} />

                                            </div>
                                            {errors?.reNewPasswd && <div className={cx('feed-back-errors')}>{errors.reNewPasswd.message}</div>}
                                        </div>
                                        <button className={cx('btn', 'btn-save-multi-field')}>Change</button>
                                    </div>
                                </form>
                            )
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile