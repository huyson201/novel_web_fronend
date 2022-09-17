import React from 'react'
import styles from './FormFeedBack.module.scss'
import classNamesbind from 'classnames/bind'
const cx = classNamesbind.bind(styles)

export interface formFeedBackProps {
    message?: string
}
const FormFeedBack = ({ message }: formFeedBackProps) => {
    return (
        <>
            {message && <div className={cx('feed-back')}>
                {message}
            </div>}
        </>
    )
}

export default FormFeedBack