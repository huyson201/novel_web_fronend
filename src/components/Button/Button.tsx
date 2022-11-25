import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import classNames from 'classnames/bind'
import classnames from 'classnames'
import styles from './Button.module.scss'
import Loader from '../Loader/Loader'

const cx = classNames.bind(styles)
interface Props {
    title?: string,
    btnType?: 'primary' | 'gray' | 'yellow',
    disabled?: boolean,
    loading?: boolean
}
interface LinkButtonProps extends LinkProps, Props { }

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, Props { }

export const LinkButton = ({ title = 'Button', className, btnType = 'primary', disabled, loading, ...props }: LinkButtonProps) => {
    return (
        <Link className={cx(className, `btn-${btnType}`, { disabled: disabled }, 'btn')} {...props}>
            {loading ? <Loader size={20} /> : title}
        </Link>
    )
}

export const Button = ({ title = 'Button', className, btnType = 'primary', loading, disabled, ...props }: ButtonProps) => {
    return (
        <button {...props} className={cx(className, `btn-${btnType}`, 'btn', { disabled: disabled })}>
            {loading ? <Loader size={20} /> : title}
        </button>
    )
}