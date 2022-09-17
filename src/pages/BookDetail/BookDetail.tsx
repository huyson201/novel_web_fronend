import React, { useEffect, useRef, useState } from 'react'
import { IoPersonCircleOutline } from 'react-icons/io5'
import { Link, useNavigate, useSearchParams, useLocation, Location, useParams } from 'react-router-dom'
import { Button } from '@src/components/Button'
import ChapterItem from '@src/components/ChapterItem'
import Filter from '@src/components/Filter'
import Pagination from '@src/components/Pagination';
import FBComment from '@src/components/FBComment'
import FBLikeShare from '@src/components/FBLikeShare'

import styles from './BookDetail.module.scss'
import classNamesBind from 'classnames/bind';
import { Book } from '@src/models'
import bookApi from '@src/apis/book.api'
const cx = classNamesBind.bind(styles)


const BookDetail = () => {
    const [book, setBook] = useState<Book>()
    const navigate = useNavigate()
    const location: Location = useLocation()
    const { slug } = useParams()
    const chaptersCommentRef = useRef<HTMLDivElement>(null)

    let currentHref = import.meta.env.VITE_HOST_NAME + location.pathname

    const paginationOnchange = (current: any, pageSize: any) => {
    }

    if (import.meta.env.MODE === 'development') currentHref = 'https://tienvuc.xyz/account'

    useEffect(() => {
        slug && bookApi.getBook(slug).then(res => setBook(res.data.data))
    }, [slug])

    return (
        <div className={cx('detail-page')}>
            <div className={cx("detail-hero")}>
                <div className={cx("bg-blur")} style={{ 'background': `url(${book?.image})` }}></div>
                <div className={cx("detail-hero__content")}>
                    <div className="wrapper">
                        <div className={cx("novel-avatar")}>
                            <img src={book?.image} alt="book-avatar" />
                        </div>
                        <div className={cx("novel-detail")}>
                            <div className={cx("novel-detail__cates")}>
                                {
                                    book?.categories && book.categories.map(value => {
                                        return (
                                            <Link key={`cate-${value.slug}`} to={`/the-loai/${value.slug}`}><span className="tag tag-blue">{value.name}</span></Link>

                                        )
                                    })
                                }
                            </div>
                            <h2 className={cx("novel-detail__title")}>
                                {book?.title}
                            </h2>
                            <div className={cx("novel-detail__author")}>Tác giả: {book?.author}</div>
                            <div className={cx("novel-detail__translator")}>
                                <span className={cx('novel-detail__translator-title')}>Dịch giả:</span>
                                <Link to={'#'}>
                                    <IoPersonCircleOutline className={cx('novel-detail__translator-icon')} />
                                    <span className={cx('novel-detail__translator-name')}>{book?.translator}</span>
                                </Link>
                            </div>
                            <div className={cx("novel-detail__views")}>
                                <span className={cx("novel-detail__views-title")}>Lượt xem</span>
                                <span className={cx("novel-detail__views-number")}>160555</span>
                            </div>
                            <div className={cx("like-share-button")}>
                                <FBLikeShare dataHref={currentHref} />
                            </div>
                            <div className={cx("novel-detail__desc")} dangerouslySetInnerHTML={{ __html: book?.desc || '' }}>

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
                            <span className='badge'>5339</span>
                        </div>
                        <Filter />
                        <div className={cx("list-chapters__content")}>
                            <ChapterItem />
                            <ChapterItem />
                            <ChapterItem />
                            <ChapterItem />
                            <ChapterItem />
                            <ChapterItem />
                            <ChapterItem />
                            <ChapterItem />
                            <ChapterItem />
                            <ChapterItem />
                            <ChapterItem />
                            <ChapterItem />
                        </div>
                        <div className={cx("pagination-wrapper")}>
                            <Pagination
                                showLessItems
                                onChange={paginationOnchange}
                                disabled={false}
                                showPrevNextJumpers
                                defaultPageSize={20}
                                pageSize={20}
                                className="pagination"
                                total={5000}
                                current={1}
                                defaultCurrent={1}
                            />

                        </div>
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