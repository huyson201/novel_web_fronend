import React, { useMemo } from 'react'
import Books from '@src/pages/Books'
import { useFetch } from '@src/hooks'
import { Book, Category as Cate, PaginationResponse } from '@src/models'
import bookApi from '@src/apis/book.api'
import { useParams, useSearchParams } from 'react-router-dom'

const Category = () => {
    const { cateSlug } = useParams()
    const [searchParams] = useSearchParams()
    const currentPage: number = useMemo(() => {
        return parseInt(searchParams.get('page') ?? '1')
    }, [searchParams])

    if (!cateSlug) return (<>cate slug not found!</>)
    const { data, isLoading, error } = useFetch<PaginationResponse<Book>>(async () => bookApi.getByCate(cateSlug, { page: currentPage }), [cateSlug, currentPage])

    const cate: Cate | undefined = useMemo(() => {
        if (!data) return undefined
        return data.result[0]?.categories?.find(cate => cate.slug === cateSlug)
    }, [data])

    return (
        <Books title={`${cate?.name && `Truyện ${cate.name}`}`} data={data} />
    )
}

export default Category