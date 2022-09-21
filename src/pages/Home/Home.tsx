import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import swiperOnChangePagination from '@src/Helper/swiperOnChangePagination';
import styles from './Home.module.scss'
import classNamesBind from 'classnames/bind'
import BookSearch from '@src/components/BookSearch';
import BookSlide from '@src/components/BookSlide';
import HomeListBook from '@src/components/HomeListBook';
import FullBookItem from '@src/components/FullBookItem';
import { Book } from '@src/models/book';
import bookApi from '@src/apis/book.api';
import Banner from '@src/components/Banner/Banner';
import ListFullBook from '@src/components/ListFullBook/ListFullBook';

const cx = classNamesBind.bind(styles)
const Home = () => {
    SwiperCore.use([Autoplay]);
    const [books, setBooks] = useState<Array<Book>>([])

    useEffect(() => {
        // bookApi.getPagination(1).then(response => setBooks(response.data.data.result))
    }, [])
    return (
        <div className={cx('home-page')}>
            {/* main content */}

            <div className="wrapper">
                <Banner />
                {/* search bar */}
                <BookSearch placeholder='Tìm kiếm truyện...' />
                <BookSlide type='recommend' title='Truyện Đề cử' />
                <BookSlide type='popular' title='Bảng Xếp Hạng' />

                {/* list novels */}
                <section className={cx('list-novels')}>
                    <div className={cx("list-novels__news")}>
                        <div className={cx("list-novels__news-title", "titles")}>
                            <Link to="/the-loai/truyen-moi">
                                <h2>
                                    Truyện mới cập nhật
                                </h2>
                            </Link>
                        </div>
                        <div className={cx("list-novels__news-content", "list-contents")}>
                            <HomeListBook />
                        </div>
                    </div>
                    <div className={cx("list-novels__full")}>
                        <div className={cx("list-novels__full-title", "titles")}>
                            <Link to="#">
                                <h2>
                                    Truyện Đã full
                                </h2>
                            </Link>
                        </div>

                        <ListFullBook />
                    </div>
                </section>
            </div>


        </div>
    )
}

export default Home