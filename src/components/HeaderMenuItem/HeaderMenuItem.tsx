import React, { useEffect, useMemo, useState } from 'react'
import DropDown from '../DropDown'
import styles from './HeaderMenuItem.module.scss'
import classBind from 'classnames/bind'
import { Link } from 'react-router-dom'
import categoryApi from '@src/apis/category.api'
import { useFetch } from '@src/hooks'
interface Props {
    menuType: 'cate' | 'list'
}

const cx = classBind.bind(styles)
const listData = [
    {
        name: 'Bảng Xếp hạng',
        slug: '#'
    },
    {
        name: 'Truyện miễn phí',
        slug: '#'
    },
    {
        name: 'Truyện đã hoàn thành',
        slug: '#'
    },
    {
        name: 'Truyện mới cập nhật',
        slug: '#'
    }
]
const dropContentClassObj = {
    cate: 'cate-drop-grid',
    list: 'list-drop-grid'
}
const apiCallBack = {
    cate: categoryApi.getAll,
    list: () => listData
}
const HeaderMenuItem = ({ menuType }: Props) => {
    const dropContentClass = useMemo(() => {
        return dropContentClassObj[menuType]
    }, [menuType])

    const { data: dropData, isLoading, error } = useFetch<Array<any>>(async () => apiCallBack[menuType](), [])

    return (
        <>
            <DropDown toggleClassName={cx('drop-toggle')} title='thể loại' dropContentClassName={cx(dropContentClass)} >

                {
                    dropData?.map((value, _) => {
                        return (
                            <Link key={`category-${value.id ?? Math.random()}`} to={`/the-loai/${value.slug}`} className={`${cx("drop-content__items")} `}>
                                {value.name}
                            </Link>
                        )
                    })
                }
            </DropDown>
        </>

    )
}

export default HeaderMenuItem