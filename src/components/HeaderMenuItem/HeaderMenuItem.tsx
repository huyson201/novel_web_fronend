import React, { useEffect, useMemo, useState } from 'react'
import DropDown from '../DropDown'
import styles from './HeaderMenuItem.module.scss'
import classBind from 'classnames/bind'
import { Link } from 'react-router-dom'
import categoryApi from '@src/apis/category.api'
import { useFetch } from '@src/hooks'

interface Props {
    menuType: 'cate' | 'list',
    title: string
}

const cx = classBind.bind(styles)
export const menuList = [
    {
        name: 'Bảng xếp hạng',
        slug: 'bxh'
    },
    {
        name: 'Truyện mới cập nhật',
        slug: 'truyen-moi',
    },
]
const dropContentClassObj = {
    cate: 'cate-drop-grid',
    list: 'list-drop-grid'
}

const apiCallBack = {
    cate: categoryApi.getAll,
    list: () => menuList
}

const HeaderMenuItem = ({ menuType, title }: Props) => {
    const dropContentClass = useMemo(() => {
        return dropContentClassObj[menuType]
    }, [menuType])

    const { data: dropData, isLoading, error } = useFetch<Array<any>>(async () => apiCallBack[menuType](), [])

    return (
        <>
            <DropDown toggleClassName={cx('drop-toggle')} title={title} dropContentClassName={cx(dropContentClass)} >

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