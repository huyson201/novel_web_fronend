import React, { useEffect, useMemo, useState } from 'react'
import DropDown from '../DropDown'
import styles from './HeaderMenuItem.module.scss'
import classBind from 'classnames/bind'
import { Link } from 'react-router-dom'
import categoryApi from '@src/apis/category.api'
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
const HeaderMenuItem = ({ menuType }: Props) => {
    const [dropData, setDropData] = useState<Array<any>>([])
    const dropContentClass = useMemo(() => {
        switch (menuType) {
            case 'cate':
                return 'cate-drop-grid'
            case 'list':
                return 'list-drop-grid'
        }
    }, [menuType])

    useEffect(() => {
        const getCategories = async () => {
            let resData = await categoryApi.getAll()
            setDropData(resData)
        }
        switch (menuType) {
            case 'cate':
                getCategories()
                break
            case 'list':
                setDropData(listData)
                break
        }
    }, [menuType])
    return (
        <>
            <DropDown toggleClassName={cx('drop-toggle')} title='thể loại' dropContentClassName={cx(dropContentClass)} >

                {
                    dropData.length > 0 && dropData.map((value, _) => {
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