import React from 'react'
import BookItem from './BookItem/BookItem'
import { Book } from '@src/models/book'
import bookApi from '@src/apis/book.api'
import { useFetch } from '@src/hooks/useFetch'
import { PaginationResponse } from '@src/models'


export interface Props {
}
const ListBook = ({ }: Props) => {
    const { data, isLoading, error } = useFetch<PaginationResponse<Book>>(async () => bookApi.getBookPagination(), [])

    return (
        <>

            {
                data?.result.map((value) => {
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