import React from 'react'
// import NovelNewItem from '../NovelNewItem/NovelNewItem'
import styles from './ListBook.module.scss'
import classNamesBind from 'classnames/bind'
import BookItem from './BookItem/BookItem'
import { Book } from '@src/models/book'

const cx = classNamesBind.bind(styles)

export interface Props {
    dataList: Array<Book>
}
const ListBook = ({ dataList }: Props) => {
    return (
        <>

            {
                dataList.map((value) => {
                    return (
                        <BookItem data={value} key={`key-${value.id}`} />
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