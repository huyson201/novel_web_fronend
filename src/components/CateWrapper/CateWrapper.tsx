import React from 'react'
import styles from './CateWrapper.module.scss'
import bindClass from 'classnames/bind'
import { Outlet, useMatch } from 'react-router-dom'
import NotMatch from '@src/pages/NotMatch'

const cx = bindClass.bind(styles)

const CateWrapper = () => {
    const match = useMatch('/the-loai/')
    if (match) return <NotMatch title='Trang này không tồn tại hoặc bị xóa' />
    return (
        <div className={cx("list-book-page")}>
            <div className={cx('list-book')}>
                <div className="wrapper">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default CateWrapper