import React, { MouseEvent, useEffect, useRef } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { IoArrowBackOutline, IoBookmarkOutline, IoArrowForwardOutline, IoBookOutline, IoListOutline, IoSettingsOutline, IoSearch, IoCloseOutline, IoMoonSharp, IoBookSharp, IoSunnySharp } from 'react-icons/io5'
import { ImSun, ImIcoMoon } from "react-icons/im";
import styles from './ToolBar.module.scss'
import classNamesBind from 'classnames/bind'
import decreaseFont from '@src/assets/icons/font-size-decrease.svg'
import increaseFont from '@src/assets/icons/font-size-increase.svg'
const cx = classNamesBind.bind(styles)

export interface Props {
    onClickListButton?: (e?: MouseEvent) => void,
    nextLink?: string,
    prevLink?: string
}

const ToolBar = ({ prevLink, nextLink, onClickListButton }: Props) => {
    const toolbarRef = useRef<HTMLDivElement>(null)
    const { slug } = useParams()

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
            <div className={cx('toolbar-controls')}>
                <Link className={cx('toolbar__btn')} to={'#'}><IoSettingsOutline className='toolbar__btn-ions' /></Link>
                <Link className={cx('toolbar__btn')} to={`/${slug}`}><IoBookOutline className='toolbar__btn-ions' /></Link>
                <button className={cx('toolbar__btn')} onClick={onClickListButton && onClickListButton}><IoListOutline className='toolbar__btn-ions' /></button>
                <Link className={cx('toolbar__btn')} to={'#'}><IoBookmarkOutline className='toolbar__btn-ions' /></Link>
                <Link className={cx('toolbar__btn', { disabled: !prevLink })} to={prevLink ? `/${slug}${prevLink}` : '#'}><IoArrowBackOutline className='toolbar__btn-ions' /></Link>
                <Link className={cx('toolbar__btn', { disabled: !nextLink })} to={nextLink ? `/${slug}${nextLink}` : '#'}><IoArrowForwardOutline className='toolbar__btn-ions' /></Link>
            </div>
            <div className={cx('setting-controls')}>
                <div className={cx('control-header')}>
                    <button className={cx('close-settings-btn')}><span><IoCloseOutline /></span></button>
                    <div className={cx('header-title')}>Cài đặt</div>
                </div>
                <div className={cx('controls-area')}>
                    <div className={cx('control-title')}>Giao diện</div>
                    <div className={cx('control-options')}>
                        <button className={cx('tool-theme', 'active', 'theme-light', 'options')}><ImSun /></button>
                        <button className={cx('tool-theme', 'theme-dark', 'options')}><ImIcoMoon /></button>
                        <button className={cx('tool-theme', 'theme-book', 'options')}><IoBookSharp /></button>
                    </div>
                </div>
                <div className={cx('controls-area')}>
                    <div className={cx('control-title')}>Cỡ chữ</div>
                    <div className={cx('control-options')}>
                        <button className={cx('options')}><img className={cx('font-size-icon')} src={decreaseFont} alt="icon_font" /></button>
                        <button className={cx('options')}><img className={cx('font-size-icon')} src={increaseFont} alt="icon_font" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToolBar