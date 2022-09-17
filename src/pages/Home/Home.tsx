import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import swiperOnChangePagination from '@src/Helper/swiperOnChangePagination';
import styles from './Home.module.scss'
import classNamesBind from 'classnames/bind'
import BookSearch from '@src/components/BookSearch';
import BookSlide from '@src/components/BookSlide';
import ListBook from '@src/components/ListBook';
import FullBookItem from '@src/components/FullBookItem';
import { Book } from '@src/models/book';
import bookApi from '@src/apis/book.api';
import Banner from '@src/components/Banner/Banner';

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
                {/* <section className={cx("slider-feature")}>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        pagination={{ clickable: false }}
                        onPaginationUpdate={swiperOnChangePagination}
                        autoplay={
                            {
                                delay: 3000
                            }
                        }
                    >
                        <SwiperSlide className={cx('swiper-slide-container')}>
                            <div>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/banner-cong-tu-biet-tu-app-3-eeaa1e.jpg" alt="slider-img" />
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={cx('swiper-slide-container')}>
                            <div>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/627f22b02911e14fb800-c63c6e.jpg" alt="slider-img" />
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={cx('swiper-slide-container')}>
                            <div>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/banner-cong-tu-biet-tu-app-3-eeaa1e.jpg" alt="slider-img" />
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={cx('swiper-slide-container')}>
                            <div>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/1-19d07a.jpg" alt="slider-img" />
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={cx('swiper-slide-container')}>
                            <div>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/273235603-481138613497638-3243237241621493393-n-eb6475.jpg" alt="slider-img" />
                                </Link>
                            </div>
                        </SwiperSlide >
                        <SwiperSlide className={cx('swiper-slide-container')}>
                            <div>
                                <Link to={'#'}>
                                    <img src="https://cdn.tienvuc.xyz/media/banners/pc-5adb94.png" alt="slider-img" />
                                </Link>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                </section> */}
                <Banner />
                {/* search bar */}
                <BookSearch placeholder='Tìm kiếm truyện...' />
                <BookSlide title='Truyện Đề cử' />
                <BookSlide title='Bảng Xếp Hạng ' />

                {/* list novels */}
                <section className={cx('list-novels')}>
                    <div className={cx("list-novels__news")}>
                        <div className={cx("list-novels__news-title", "titles")}>
                            <Link to="#">
                                <h2>
                                    Truyện mới cập nhật
                                </h2>
                            </Link>
                        </div>
                        <div className={cx("list-novels__news-content", "list-contents")}>
                            <ListBook dataList={books} />
                        </div>
                    </div>
                    <div className={cx("list-novels__full")}>
                        <div className={cx("list-novels__full-title titles")}>
                            <Link to="#">
                                <h2>
                                    Truyện Đã full
                                </h2>
                            </Link>
                        </div>
                        <div className={cx("list-novels__full-content list-contents")}>
                            <FullBookItem />
                            <FullBookItem />
                            <FullBookItem />
                            <FullBookItem />
                            <FullBookItem />
                        </div>
                    </div>
                </section>
            </div>


        </div>
    )
}

export default Home