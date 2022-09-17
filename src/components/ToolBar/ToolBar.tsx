import React, { MouseEvent, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackOutline, IoBookmarkOutline, IoArrowForwardOutline, IoBookOutline, IoListOutline, IoSettingsOutline, IoSearch } from 'react-icons/io5'
import styles from './ToolBar.module.scss'
import classNamesBind from 'classnames/bind'
const cx = classNamesBind.bind(styles)

export interface Props {
    onClickListButton?: (e?: MouseEvent) => void
}

const ToolBar = ({ onClickListButton }: Props) => {
    const toolbarRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        let currentScrollTop = window.scrollY

        const showToolbar = () => {

            if (currentScrollTop > window.scrollY || (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                toolbarRef.current?.classList.add('show')
            }
            else {
                toolbarRef.current?.classList.remove('show')
            }
            currentScrollTop = window.scrollY
        }

        window.addEventListener('scroll', showToolbar)

        return () => window.removeEventListener('scroll', showToolbar)
    }, [])
    return (
        <div className={cx("toolbar")} ref={toolbarRef}>
            <Link className={cx('toolbar__btn')} to={'#'}><IoSettingsOutline className='toolbar__btn-ions' /></Link>
            <Link className={cx('toolbar__btn')} to={'#'}><IoBookOutline className='toolbar__btn-ions' /></Link>
            <Link className={cx('toolbar__btn')} to={'#'} onClick={onClickListButton && onClickListButton}><IoListOutline className='toolbar__btn-ions' /></Link>
            <Link className={cx('toolbar__btn')} to={'#'}><IoBookmarkOutline className='toolbar__btn-ions' /></Link>
            <Link className={cx('toolbar__btn', 'disabled')} to={'#'}><IoArrowBackOutline className='toolbar__btn-ions' /></Link>
            <Link className={cx('toolbar__btn')} to={'#'}><IoArrowForwardOutline className='toolbar__btn-ions' /></Link>
        </div>
    )
}

export default ToolBar