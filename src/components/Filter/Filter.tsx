import React, { FocusEvent, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { FaSortNumericDownAlt, FaSortNumericUpAlt } from 'react-icons/fa'
import styles from './Filter.module.scss'
import classNamesBind from 'classnames/bind'
const cx = classNamesBind.bind(styles)
const Filter = () => {
    const [sort, setSort] = useState<boolean>(false)
    const handleClickSort = () => {
        setSort(!sort)
    }
    return (
        <div className={cx("filter")} >
            <button className={cx('filter-btn', 'btn', { desc: sort })} onClick={handleClickSort}>
                <FaSortNumericDownAlt />
                <FaSortNumericUpAlt />
            </button>
            <div className={cx("search-box")} >
                <IoSearch />
                <input type="text" placeholder='Tìm theo số chương, tên truyện...' />
            </div>
        </div>
    )
}

export default Filter