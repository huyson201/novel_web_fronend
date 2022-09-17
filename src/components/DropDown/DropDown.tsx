import React, { useState, MouseEvent, useEffect, useRef, LinkHTMLAttributes } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { IoChevronDown } from 'react-icons/io5'
import styles from './DropDown.module.scss'
import classNames from 'classnames/bind'
import classnames from 'classnames'
const cx = classNames.bind(styles)
interface Props {
    title: String,
    children?: React.ReactNode
    | React.ReactNode[],
    className?: String,
    dropContentClassName?: String,
    toggleClassName?: String
}

const Dropdown = ({ title, children, className, dropContentClassName, toggleClassName }: Props) => {
    const [active, setActive] = useState<boolean>(false)
    const btnRef = useRef<HTMLDivElement>(null)
    const handleClick = (e: MouseEvent) => {
        setActive(!active)
    }
    useEffect(() => {
        const closeDropdown = (e: any) => {
            if (!(e.target === btnRef.current)) {
                setActive(false)
                return
            }
        }

        window.addEventListener('click', closeDropdown)

        return () => {
            window.removeEventListener('click', closeDropdown)
        }
    }, [])
    return (
        <div className={`${cx("drop-down")} ${className || ''}`}>
            <div ref={btnRef} className={classnames(cx('drop-toggle-btn', { 'active': active }), toggleClassName)} onClick={handleClick}>
                {title}
                <IoChevronDown className={cx('arrow-down')} />
            </div>
            <div className={classnames(cx('drop-content'), dropContentClassName)}>
                {children && children}
            </div>
        </div>
    )
}

export default Dropdown