import React, { useEffect, useMemo, useState } from 'react'
import { Button } from '@src/components/Button'
import ChapterItem from '@src/components/ChapterItem'
import Pagination from '@src/components/Pagination';
import styles from './ListChapter.module.scss'
import classNamesBind from 'classnames/bind';
import { Book, Chapter, Order, PaginationResponse } from '@src/models'
import bookApi from '@src/apis/book.api'
import { useFetch } from '@src/hooks'
import { useSearchParams } from 'react-router-dom';
import Filter from '../Filter';
const cx = classNamesBind.bind(styles)

interface Props {
    bookId: number
}
// ta-su-phu-moi-den-dai-nan-moi-dot-pha-ban-dich
const ListChapter = ({ bookId }: Props) => {
    const [orderSort, setOrderSort] = useState<Order>('asc')
    const [searchKey, setSearchKey] = useState<string>('')
    const [searchPage, setSearchPage] = useState<number>(1)
    const [searchParams, setSearchParams] = useSearchParams()

    const currentPage = useMemo(() => {
        return +(searchParams.get('page') ?? 1)
    }, [searchParams])

    const { data, isLoading, error } = useFetch<PaginationResponse<Chapter>>(async () => {
        if (searchKey) return bookApi.searchChapters(bookId, { q: searchKey, page: searchPage, order: orderSort })
        return bookApi.getChapters(bookId, { page: currentPage, sort: 'chapterNumber', order: orderSort })
    }, [bookId, currentPage, orderSort, searchKey, searchPage])

    useEffect(() => {
        if (!searchKey) {
            setSearchPage(1)
        }
    }, [searchKey])

    const handleSort = (order: Order) => {
        setOrderSort(order)
    }

    const handleSearch = (data: string) => {
        setSearchKey(data)
    }
    const handlePaginationOnchange = (current: number, pageSize: number) => {
        if (searchKey) return setSearchPage(current)
        setSearchParams(`page=${current}`)
    }

    return (
        <div className={cx('list-wrapper')}>
            <Filter onSort={handleSort} onSearch={handleSearch} />

            <div className={cx("list_content")}>
                {
                    data?.result.map(chapter => {
                        return (
                            <ChapterItem chapter={chapter} key={chapter.id} />
                        )
                    })
                }
            </div>
            {(data && (data.total / data.per_page > 1)) && <div className={cx("pagination-wrapper")}>
                <Pagination
                    showLessItems
                    onChange={handlePaginationOnchange}
                    disabled={false}
                    showPrevNextJumpers
                    defaultPageSize={10}
                    pageSize={data.per_page}
                    className="pagination"
                    total={data.total}
                    current={searchKey ? searchPage : currentPage}
                    defaultCurrent={1}
                />

            </div>}
        </div>
    )
}

export default ListChapter