import React from 'react'
import { BookItem } from './BookItem/BookItem'
import { Book } from '@src/models/book'
import bookApi from '@src/apis/book.api'
import { useFetch } from '@src/hooks'
import { PaginationResponse } from '@src/models'


export interface Props {
}
const HomeBookContent = ({ }: Props) => {
    const { data, isLoading, error } = useFetch<PaginationResponse<Book>>(async () => bookApi.getBookPagination(), [])
    if (error) return (<div>error</div>)

    return (
        <>

            {
                data?.result.map((value) => {
                    return (
                        <BookItem book={value} key={`key-${value.slug}`} />
                    )
                })
            }

        </>
    )
}

export default HomeBookContent