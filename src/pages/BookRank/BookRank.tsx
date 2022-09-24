import React from 'react'
import styles from './BookRank.module.scss'
import classBind from 'classnames'
import { useFetch } from '@src/hooks'
import bookApi from '@src/apis/book.api'
import Books from '../Books'
const cx = classBind.bind(styles)


const BookRank = () => {
    const { data, isLoading, error } = useFetch(async () => bookApi.getPopularBook({ limit: 30 }), [])
    return (
        <>
            <Books showRank data={{ current_page: 1, per_page: 0, total: 0, result: data ?? [] }} title={'Bảng Xếp Hạng'} />
        </>

    )
}

export default BookRank