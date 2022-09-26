import React, { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { LinkButton } from '@src/components/Button'
import ToolBar from '@src/components/ToolBar'
import styles from './Chapter.module.scss'
import classNamesBind from 'classnames/bind'
import ChapterNavigation from '@src/components/ChapterNavigation'
import { useFetch, useLocalStorage } from '@src/hooks'
import bookApi from '@src/apis/book.api'
import { Chapter as BookChapter, ChapterResponse, Settings } from '@src/models'
import { useAppDispatch, useAppSelector } from '@src/redux'
import NotMatch from '../NotMatch'
import { fetchBook, fetchBookFail, fetchBookSuccess } from '@src/redux/features/bookSlice'
const cx = classNamesBind.bind(styles)

const Chapter = () => {
    const book = useAppSelector(state => state.book.book)
    const dispatch = useAppDispatch()
    const [showNav, setShowNav] = useState<boolean>(false)
    const { slug, chapterId } = useParams()
    const settings = useAppSelector(state => state.settings)
    if (!slug || !chapterId) return <NotMatch />

    const handleClickChapterLink = () => {
        if (!showNav) return
        setShowNav(false)
    }
    useEffect(() => {
        if (book) return
        const fetchBookData = async () => {
            dispatch(fetchBook())
            try {
                let data = await bookApi.getBook(slug)
                dispatch(fetchBookSuccess(data))
            } catch (error) {
                console.log(error)
                dispatch(fetchBookFail())
            }
        }
        fetchBookData()
    }, [slug])

    const { data: res, isLoading, error } = useFetch<ChapterResponse>(async () => bookApi.getChapter(slug, +(chapterId)), [chapterId, slug])

    return (
        <>
            <ToolBar prevLink={res?.prevChapter.link} nextLink={res?.nextChapter.link} onClickListButton={() => setShowNav(true)} />
            <div className={cx('reading-page', `theme-${settings?.theme ?? 'light'}`)}>
                <div className="wrapper">
                    <div className={cx("content-container",)}>
                        <div className={cx("page-head")}>
                            <div className={cx("novel-title")}><Link to={`/${slug}`}>{book?.title}</Link></div>
                            <div className={cx("chapter-title")}>
                                <span className={cx("chapter-number")}>Chương {res?.chapter?.chapterNumber}. </span>
                                {res?.chapter?.title}
                            </div>

                            <div className={cx("controls-btn")}>
                                <LinkButton to={res?.prevChapter.link ? `/${slug}${res.prevChapter.link}` : '#'} btnType={'gray'} title='Chương trước' disabled={res?.prevChapter.link ? false : true} />
                                <LinkButton to={res?.nextChapter.link ? `/${slug}${res.nextChapter.link}` : '#'} btnType={'gray'} title='Chương Sau' disabled={res?.nextChapter.link ? false : true} />
                            </div>
                        </div>
                    </div>
                    <div className={cx("content-container")}>
                        <div className={cx("novel-content")} style={{ fontSize: settings.fontSize }} dangerouslySetInnerHTML={{ __html: res?.chapter?.content || '' }}>

                        </div>
                    </div>
                    <div className={cx("content-container")}>
                        <div className={cx("controls-btn")}>
                            <LinkButton to={res?.prevChapter.link ? `/${slug}${res.prevChapter.link}` : '#'} btnType={'gray'} title='Chương trước' disabled={res?.prevChapter.link ? false : true} />
                            <LinkButton to={res?.nextChapter.link ? `/${slug}${res.nextChapter.link}` : '#'} btnType={'gray'} title='Chương Sau' disabled={res?.nextChapter.link ? false : true} />
                        </div>
                    </div>
                </div>
            </div>
            <ChapterNavigation onClickChapterLink={handleClickChapterLink} show={showNav} onClickOutside={() => setShowNav(false)} />
        </>

    )
}

export default Chapter
