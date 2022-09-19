import React, { useRef, ChangeEvent, useState, useEffect } from 'react'
import { IoSearch } from 'react-icons/io5'
import { useDebounce } from '@src/hooks'
import styles from './BookSearch.module.scss'
import classNamesBind from 'classnames/bind'
import SearchLoader from './SearchLoader/SearchLoader'

const cx = classNamesBind.bind(styles)
interface Props {
    placeholder?: string
}

const SearchBar = ({ ...props }: Props) => {
    const [searchData, setSearchData] = useState<any>(null)
    const [key, setKey] = useState<string>('')
    const [focus, setFocus] = useState<boolean>(false)
    const [waiting, setWaiting] = useState<boolean>(false)
    const [emptyResult, setEmptyResult] = useState<boolean>(false)
    const debounceValue = useDebounce<string>(key, 600);


    const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
        setWaiting(true)
        let value = e.currentTarget.value
        setKey(value)
    }


    useEffect(() => {
        setWaiting(false)
    }, [debounceValue])

    return (
        <div className={cx('search-bar')}>
            <div className={cx("search-bar__ip")}>
                <IoSearch />
                <input {...props} onChange={handleOnchange} type="search" autoComplete='off' />
            </div>

            <div className={cx('search-bar__result', { "s-waiting": waiting })}>
                <div className={cx('search-result')}>Nhập từ khóa bất kỳ để tìm kiếm truyện.</div>
                <div className={cx("search-loader")}>
                    <SearchLoader />
                    <div className='separator'></div>
                    <SearchLoader />
                </div>
            </div>

        </div>
    )
}

export default SearchBar