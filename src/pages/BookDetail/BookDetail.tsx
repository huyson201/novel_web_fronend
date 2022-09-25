import React, { useEffect, useMemo, useRef, useState } from 'react'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { Link, useLocation, Location, useParams } from 'react-router-dom'
import { Button } from '@src/components/Button'
import FBComment from '@src/components/FBComment'
import FBLikeShare from '@src/components/FBLikeShare'
import styles from './BookDetail.module.scss'
import classNamesBind from 'classnames/bind';
import bookApi from '@src/apis/book.api'
import ListChapter from '@src/components/ListChapter/ListChapter'
import NotMatch from '../NotMatch'
import { useAppDispatch, useAppSelector } from '@src/redux'
import { fetchBook, fetchBookFail, fetchBookSuccess } from '@src/redux/features/bookSlice'
const cx = classNamesBind.bind(styles)


const BookDetail = () => {
    const dispatch = useAppDispatch()
    const bookState = useAppSelector(state => state.book)
    const { slug = '' } = useParams()
    const location: Location = useLocation()
    const chaptersCommentRef = useRef<HTMLDivElement>(null)

    const currentURL = useMemo(() => {
        if (import.meta.env.MODE === 'development') return 'https://tienvuc.xyz/account'
        return import.meta.env.VITE_HOST_NAME + location.pathname
    }, [location])

    useEffect(() => {
        dispatch(fetchBook())
        const fetchData = async () => {
            try {
                let data = await bookApi.getBook(slug)
                dispatch(fetchBookSuccess(data))
            } catch (error) {
                console.log(error)
                dispatch(fetchBookFail())
            }

        }
        fetchData()
    }, [slug])

    if ((!bookState.book && !bookState.loading)) return <NotMatch />

    return (
        <div className={cx('detail-page')}>
            <div className={cx("detail-hero")}>
                <div className={cx("bg-blur")} style={{ 'background': `url(${bookState.book?.image})` }}></div>
                <div className={cx("detail-hero__content")}>
                    <div className="wrapper">
                        <div className={cx("novel-avatar")}>
                            <img src={bookState.book?.image} alt="book-avatar" />
                        </div>
                        <div className={cx("novel-detail")}>
                            <div className={cx("novel-detail__cates")}>

                                {bookState.book?.state === 'full' && <span className='tag tag-green hover-none'>Full</span>}
                                {
                                    bookState.book?.categories?.map(value => {
                                        return (
                                            <Link key={`cate-${value.slug}`} to={`/the-loai/${value.slug}`}><span className="tag tag-blue">{value.name}</span></Link>

                                        )
                                    })
                                }
                            </div>
                            <h2 className={cx("novel-detail__title")}>
                                {bookState.book?.title}
                            </h2>
                            <div className={cx("novel-detail__author")}>Tác giả: {bookState.book?.author}</div>
                            <div className={cx("novel-detail__translator")}>
                                <span className={cx('novel-detail__translator-title')}>Dịch giả:</span>
                                <Link to={'#'}>
                                    <IoPersonCircleOutline className={cx('novel-detail__translator-icon')} />
                                    <span className={cx('novel-detail__translator-name')}>{bookState.book?.translator}</span>
                                </Link>
                            </div>
                            <div className={cx("novel-detail__views")}>
                                <span className={cx("novel-detail__views-title")}>Lượt xem</span>
                                <span className={cx("novel-detail__views-number")}>{bookState.book?.view}</span>
                            </div>
                            <div className={cx("like-share-button")}>
                                <FBLikeShare dataHref={currentURL} />
                            </div>
                            <div className={cx("novel-detail__desc")} dangerouslySetInnerHTML={{ __html: bookState.book?.desc || '' }}>

                            </div>
                            <div className={cx("hero-buttons")}>
                                <Button className={cx('btn')} title='Đọc tư đầu' />
                                <Button className={cx('btn')} btnType='yellow' title='Mua chương VIP' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("chapters-comments")} ref={chaptersCommentRef}>
                <div className="wrapper">
                    <div className={cx("list-chapters")} >
                        <div className={cx("list-chapters__title")}>
                            DS Chương
                        </div>
                        {bookState.book && <ListChapter bookId={bookState.book.id} />}
                    </div>

                    <div className={cx("comments")}>
                        <div className={cx("cmt-title")}>Bình luận</div>
                        <div className={cx('cmt-content')}>
                            <FBComment numPosts={3} dataHref={'https://tienvuc.xyz/account'} orderBy='reverse_time' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetail