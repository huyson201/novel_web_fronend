import React from 'react'
import styles from './ImageLoader.module.scss'
import bindClass from 'classnames/bind'

const cx = bindClass.bind(styles)

export interface ImageLoaderProps {
    imgUrl: string
}
const ImageLoader = (props: ImageLoaderProps) => {
    return (
        <div className={cx('img-loader')}>
            <img src={props.imgUrl} alt="no-img" className={cx('no-img')} />
            <div className={cx("loader")}></div>
        </div>
    )
}

export default ImageLoader