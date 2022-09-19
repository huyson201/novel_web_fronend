import React from 'react'
import bindClass from 'classnames/bind'
import FullBookItem from '../FullBookItem'
import styles from './ListFullBook.module.scss'
import { useFetch } from '@src/hooks'
import bookApi from '@src/apis/book.api'
import { Book } from '@src/models'

const cx = bindClass.bind(styles)
const ListFullBook = () => {
    const { data, isLoading, error } = useFetch<Array<Book>>(bookApi.getFullBooks)

    return (
        <div className={cx("list-novels__full-content list-contents")}>
            {
                data?.map(value => {
                    return (
                        <FullBookItem key={value.slug} book={value} />
                    )
                })
            }

        </div>
    )
}

export default ListFullBook