import React, { useEffect, useState } from 'react'
// import NovelNewItem from '../NovelNewItem/NovelNewItem'
import styles from './ListBook.module.scss'
import classNamesBind from 'classnames/bind'
import BookItem from './BookItem/BookItem'
import { Book } from '@src/models/book'
import bookApi from '@src/apis/book.api'

const cx = classNamesBind.bind(styles)

export interface Props {
}
const ListBook = ({ }: Props) => {
    const [listData, setListData] = useState<Array<Book>>([])
    useEffect(() => {
        const fetchData = async () => {
            let resData = await bookApi.getBookPagination()
            setListData(resData.result)
        }

        fetchData()
    }, [])
    return (
        <>

            {
                listData.map((value) => {
                    return (
                        <BookItem book={value} key={`key-${value.slug}`} />
                    )
                })
            }
            {/* {
                dataList && dataList.map((book, index) => {
                    return (
                        <NovelNewItem slug={book.slug} key={index} title={book.title} cates={[... new Set(book.categories)]} author={book.author} />
                    )
                })
            } */}
        </>
    )
}

export default ListBook