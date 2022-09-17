import React, { ChangeEvent } from 'react'
import styles from './InputField.module.scss'
import classNamesBind from 'classnames/bind'
import { FaExclamationCircle } from 'react-icons/fa'
import { UseFormRegister } from 'react-hook-form'
const cx = classNamesBind.bind(styles)

interface Props extends React.HTMLProps<HTMLInputElement> {
    title?: string,
    error?: string
    register: UseFormRegister<any>
}

const InputField = ({ title, error, register, ...props }: Props) => {

    return (
        <>
            <div className={cx('ip-fields', { ['ip-error']: error })}>
                <label>
                    <div className={cx("ip-fields__title")}>
                        {title || 'Field title'}
                    </div>
                    <div className={cx('ip-wrapper')}>
                        <input {...props} {...register(props.name || '')} />
                        <FaExclamationCircle className={cx('icon')} />
                    </div>
                </label>
                <div className={cx('error-feedback')}>{error}</div>
            </div>
        </>

    )
}

export default InputField