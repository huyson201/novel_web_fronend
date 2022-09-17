import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@src/components/Button'
import Filter from '../Filter/Filter'
import styles from './ChapterNavigation.module.scss'
import classNamesBind from 'classnames/bind'
const cx = classNamesBind.bind(styles)

export interface Props {
    show?: boolean,
    onClickOutside?: () => void
}

const ChapterNavigation = ({ show, onClickOutside }: Props) => {
    const body = document.querySelector('body')
    useEffect(() => {
        if (body) {
            if (show) {
                body.style.overflow = `hidden`
                return
            }
            body.style.overflow = `unset`
            return
        }

    }, [show])



    return (
        <div className={cx('left-nav-wrapper', { show: show })}>
            <div className={cx(`left-nav-bg`)}>
                <div className={cx("touch-area")} onClick={onClickOutside && onClickOutside}></div>
            </div>
            <div className={cx("left-nav")} >
                <div className={cx("left-nav__header")}>
                    <div className={cx("title")}>Danh sách chương</div>
                </div>
                <Filter />
                <div className={cx("left-nav__content")}>

                    {Array.from(Array(10).keys()).map((value) => {
                        return (
                            <Link to={'/'} key={`key-${value}`} >
                                <div className={cx("chapter-items", { active: value === 0 })}>
                                    <div className={cx("chapter-title")}>
                                        <span className={cx("chapter-number")}>1.</span>
                                        <span className={cx("title-text")}>Người ở rễ ôn gia</span>
                                    </div>
                                    <div className="times">Cập nhật: 4 tuần trước</div>
                                </div>
                            </Link>
                        )
                    })}
                </div>

                <div className={cx("controls-btn")}>
                    <Button className='btn btn-controls bg-light' disabled title='Trang trước' />
                    <Button className='btn btn-controls bg-light' title='Trang Sau' />
                </div>
            </div>
        </div>


    )
}

export default ChapterNavigation