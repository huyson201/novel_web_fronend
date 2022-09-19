import React, { ChangeEvent, useEffect, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { FaSortNumericDownAlt, FaSortNumericUpAlt } from 'react-icons/fa'
import styles from './Filter.module.scss'
import classNamesBind from 'classnames/bind'
import { Order } from '@src/models'
import { useDebounce } from '@src/hooks'
const cx = classNamesBind.bind(styles)
interface Props {
    onSort?: (order: Order) => void
    onSearch?: (value: string) => void
}
const Filter = ({ onSort, onSearch }: Props) => {
    const [sort, setSort] = useState<boolean>(false)
    const [searchValue, setSearchValue] = useState<string>('')
    const debouncedValue = useDebounce<string>(searchValue, 500)

    useEffect(() => {
        onSearch && onSearch(debouncedValue)
    }, [debouncedValue])

    const handleClickSort = () => {
        let order: Order = !sort ? 'desc' : 'asc'
        setSort((prevState) => !prevState)
        onSort && onSort(order)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    return (
        <div className={cx("filter")} >
            <button className={cx('filter-btn', 'btn', { desc: sort })} onClick={handleClickSort}>
                <FaSortNumericDownAlt />
                <FaSortNumericUpAlt />
            </button>
            <div className={cx("search-box")} >
                <IoSearch />
                <input type="text" onChange={handleChange} placeholder='Tìm theo số chương, tên truyện...' />
            </div>
        </div>
    )
}

export default Filter