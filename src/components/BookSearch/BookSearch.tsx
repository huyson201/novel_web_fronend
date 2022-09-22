import React, { useRef, ChangeEvent, useState, useEffect } from 'react'
import { IoSearch } from 'react-icons/io5'
import { useDebounce, useFetch } from '@src/hooks'
import styles from './BookSearch.module.scss'
import classNamesBind from 'classnames/bind'
import SkeletonLoader from './SkeletonLoader/SkeletonLoader'
import { Book } from '@src/models'
import bookApi from '@src/apis/book.api'
import SearchResultItem from './SearchResultItem/SearchResultItem'

const cx = classNamesBind.bind(styles)
interface Props {
    placeholder?: string
}

const SearchBar = ({ ...props }: Props) => {
    const [key, setKey] = useState<string>('')
    const [searching, setSearching] = useState<boolean>(false)
    const debounceValue = useDebounce(key, 600);

    // fetch data
    const { data: books, isLoading, error } = useFetch(async () => {
        setSearching(false)

        if (!key) return
        return bookApi.searchBook(key)
    }, [debounceValue])

    const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearching(true)
        let value = e.currentTarget.value
        setKey(value)
    }


    return (
        <div className={cx('search-bar')}>
            <div className={cx("search-bar__ip")}>
                <IoSearch />
                <input {...props} onChange={handleOnchange} type="search" autoComplete='off' />
            </div>

            <div className={cx('search-bar__result', { "search-bar--loading": searching ?? isLoading })}>

                <div className={cx('search-result')}>
                    {!books && 'Nhập từ khóa để tìm kiếm.'}
                    {books && books.length === 0 && 'Không tìm thấy kết quả.'}
                    {
                        books && books.length > 0 && books.map(book => {
                            return (
                                <SearchResultItem key={book.slug} book={book} />
                            )
                        })
                    }
                </div>
                <div className={cx("loading-wrapper")}>
                    <SkeletonLoader />
                    <SkeletonLoader />
                </div>
            </div>

        </div>
    )
}

export default SearchBar