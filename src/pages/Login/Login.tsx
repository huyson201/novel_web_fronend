import React, { useState, useEffect, useMemo } from 'react'
import { IoLogInOutline } from 'react-icons/io5'
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import { Button } from '@src/components/Button'
import FormFeedBack from '@src/components/FormFeedBack'
import InputField from '@src/components/InputField'
import classNamesBind from 'classnames/bind'
import { useAppDispatch, useAppSelector } from '@src/redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { LoginInput } from '@src/models'
import styles from './Login.module.scss'
import { login, loginFail, loginSuccess } from '@src/redux/features/authSlice'
import authApi from '@src/apis/auth.api'
import { cookies } from '@src/utils'

const cx = classNamesBind.bind(styles)


// schema validate
const schemaObj = yup.object({
    email: yup.string().email('Must be a valid email').required('Email is a required field'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is a required field')
})


const Login = () => {
    const navigate = useNavigate()
    const disPatch = useAppDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    const [loginError, setLoginError] = useState<string>('')
    const auth = useAppSelector(state => state.auth)

    const { register, handleSubmit, formState: { errors } } = useForm<LoginInput>({
        resolver: yupResolver(schemaObj),
        mode: 'onSubmit',
        reValidateMode: 'onChange'
    })

    let redirectUrl = useMemo(() => {
        return searchParams.get('redirect_url') ?? '/'
    }, [searchParams])

    const onSubmit = async (data: LoginInput) => {
        disPatch(login())
        try {
            let resData = await authApi.login(data)
            disPatch(loginSuccess(resData))
            navigate(redirectUrl, { replace: true })
        } catch (error: any) {
            disPatch(loginFail())
            setLoginError(error.response?.data?.message)
        }
    }

    if (cookies.get('auth.refresh_token')) {
        return <Navigate to={redirectUrl} replace />
    }

    return (
        <div className={cx('login-page')}>
            <div className='form-wrapper'>
                <form action="#" className={cx("form")} onSubmit={handleSubmit(onSubmit)}>
                    <div className={cx("form__title")}>
                        <h2>Đăng nhập</h2>
                        <IoLogInOutline />
                    </div>
                    <div className={cx("form__body")}>
                        {
                            loginError && <FormFeedBack message={loginError} />
                        }
                        <InputField error={errors.email?.message} name='email' title='Email' placeholder='vidu@gmail.com' type='text' register={register} />
                        <InputField error={errors.password?.message} autoComplete="on" name='password' title='Mật khẩu' type='password' placeholder='*******' register={register} />
                        <div className={cx("forgot-password")}>
                            <Link to="#">Quên mật khẩu?</Link>
                        </div>
                        <div className={cx("form__btn-box")}>
                            <Button type={'submit'} title='Đăng nhập' className={cx('login-btn')} />
                        </div>
                        <div className={cx("register-link")}>
                            Bạn chưa có tài khoản?
                            <Link to="/register"> Đăng ký.</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login