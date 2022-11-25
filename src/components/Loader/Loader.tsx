import React from 'react'
import styles from './Loader.module.scss'
import bindClass from 'classnames/bind'


const cx = bindClass.bind(styles)

export interface LoaderProps {
    size?: number
}
const Loader = ({ size }: LoaderProps) => {
    return (
        <span className={cx("loader")} style={{ width: size, height: size }}></span>
    )
}

export default Loader