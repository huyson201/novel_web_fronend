import React, { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { LinkButton } from '@src/components/Button'
import ToolBar from '@src/components/ToolBar'
import styles from './Chapter.module.scss'
import classNamesBind from 'classnames/bind'
import ChapterNavigation from '@src/components/ChapterNavigation'
import { useFetch } from '@src/hooks'
import bookApi from '@src/apis/book.api'
import { Chapter as BookChapter, ChapterResponse } from '@src/models'
const cx = classNamesBind.bind(styles)

const Chapter = () => {
    const [showNav, setShowNav] = useState<boolean>(false)
    const { chapterId, slug } = useParams()
    if (!slug || !chapterId) return <Navigate to={'/'} />
    const { data: res, isLoading, error } = useFetch<ChapterResponse>(async () => bookApi.getChapter(slug, +chapterId), [chapterId, slug])
    return (
        <>
            <ToolBar onClickListButton={() => setShowNav(true)} />
            <div className={cx('reading-page')}>
                <div className="wrapper">
                    <div className={cx("content-container")}>
                        <div className={cx("page-head")}>
                            <div className={cx("novel-title")}><Link to={'#'}>Sổ tay công lược nữ thần</Link></div>
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
                        <div className={cx("novel-content")} dangerouslySetInnerHTML={{ __html: res?.chapter?.content || '' }}>

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
            <ChapterNavigation show={showNav} onClickOutside={() => setShowNav(false)} />
        </>

    )
}

export default Chapter
