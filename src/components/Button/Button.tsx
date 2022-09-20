import React from 'react'
import { Link, LinkProps } from 'react-router-dom'
import classNames from 'classnames/bind'
import classnames from 'classnames'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)
interface Props {
    title?: string,
    btnType?: 'primary' | 'gray' | 'yellow',
    disabled?: boolean
}
interface LinkButtonProps extends LinkProps, Props { }

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, Props { }

export const LinkButton = ({ title, className, btnType = 'primary', disabled, ...props }: LinkButtonProps) => {
    return (
        <Link className={classnames(className, cx(`btn-${btnType}`, { disabled: disabled }, 'btn'))} {...props}>
            {title || "Button"}
        </Link>
    )
}

export const Button = ({ title, className, btnType = 'primary', disabled, ...props }: ButtonProps) => {
    return (
        <button {...props} className={classnames(className, cx(`btn-${btnType}`, 'btn', { disabled: disabled }))}>
            {title || "button"}
        </button>
    )
}