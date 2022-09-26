import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '@src/components/Button'
import Filter from '../Filter/Filter'
import styles from './ChapterNavigation.module.scss'
import classNamesBind from 'classnames/bind'
import { useAppSelector } from '@src/redux'
import { useFetch } from '@src/hooks'
import { Chapter, Order, PaginationResponse } from '@src/models'
import bookApi from '@src/apis/book.api'
const cx = classNamesBind.bind(styles)

export interface Props {
    show?: boolean,
    onClickOutside?: () => void,
    onClickChapterLink?: () => void
}

const ChapterNavigation = ({ show, onClickOutside, onClickChapterLink }: Props) => {
    const book = useAppSelector(state => state.book.book)
    const { chapterId } = useParams()
    const [chapterPage, setChapterPage] = useState<number>(1)
    const [searchKey, setSearchKey] = useState<string>('')
    const [orderSort, setOrderSort] = useState<Order>('asc')
    const handleOnSearch = (value: string) => {
        setSearchKey(value)
        setChapterPage(1)
    }
    const handleSort = (order: Order) => {
        setOrderSort(order)
    }

    const handlePrev = () => {
        if (chapterPage <= 1) return
        setChapterPage(prev => prev - 1)
    }

    const handleNext = () => {
        if (!data) return
        if (chapterPage * data.per_page >= data.total) return
        setChapterPage(prev => prev + 1)
    }
    const { data, isLoading, error } = useFetch(async () => {
        if (!book) return
        if (searchKey) return bookApi.searchChapters(book.id, { q: searchKey, page: chapterPage, order: orderSort })
        return bookApi.getChapters(book.id, { page: chapterPage, order: orderSort })
    }, [searchKey, chapterPage, book, orderSort])

    useEffect(() => {
        const body = document.querySelector('body')
        if (body) {
            if (show) {
                body.style.overflow = `hidden`
                return
            }
            body.style.overflow = `unset`
            return
        }

    }, [show])



    return (
        <div className={cx('left-nav-wrapper', { show: show })}>
            <div className={cx(`left-nav-bg`)}>
                <div className={cx("touch-area")} onClick={onClickOutside && onClickOutside}></div>
            </div>
            <div className={cx("left-nav")} >
                <div className={cx("left-nav__header")}>
                    <div className={cx("title")}>Danh sách chương</div>
                </div>
                <Filter onSort={handleSort} onSearch={handleOnSearch} />
                <div className={cx("left-nav__content")}>

                    {data?.result.map((value) => {
                        return (
                            <Link onClick={onClickChapterLink} to={`/${book?.slug}/chapter-${value.chapterNumber}/${value.id}`} key={`key-${value.id}`} >
                                <div className={cx("chapter-items", { active: value.id === +(chapterId ?? 1) })}>
                                    <div className={cx("chapter-title")}>
                                        <span className={cx("chapter-number")}>{value.chapterNumber}.</span>
                                        <span className={cx("title-text")}>{value.title}</span>
                                    </div>
                                    <div className="times">Cập nhật: 4 tuần trước</div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
                {
                    (data && (data.total / data.per_page > 1)) && (
                        <div className={cx("controls-btn")}>
                            <Button className={cx('btn btn-controls bg-light')} onClick={handlePrev}  {...(!data?.previous?.page && { disabled: true })} title='Trang trước' />
                            <Button className={cx('btn btn-controls bg-light')} onClick={handleNext} {...(!data?.next?.page && { disabled: true })} title='Trang Sau' />
                        </div>
                    )
                }

            </div>
        </div>


    )
}

export default ChapterNavigation