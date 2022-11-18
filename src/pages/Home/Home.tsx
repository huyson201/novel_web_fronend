import React from 'react'
import { Link } from 'react-router-dom'
import SwiperCore, { Autoplay } from 'swiper';
import styles from './Home.module.scss'
import classNamesBind from 'classnames/bind'
import BookSearch from '@src/components/BookSearch';
import BookSlide from '@src/components/BookSlide';
import HomeListBook from '@src/components/HomeListBook';
import Banner from '@src/components/Banner/Banner';
import ListFullBook from '@src/components/ListFullBook/ListFullBook';

const cx = classNamesBind.bind(styles)
const Home = () => {
    SwiperCore.use([Autoplay]);

    return (
        <div className={cx('home-page')}>
            {/* main content */}

            <div className="wrapper">
                {/* Banner */}
                <Banner />

                {/* search bar */}
                <BookSearch placeholder='Tìm kiếm truyện...' />

                {/* Book slider */}
                <BookSlide type='recommend' title='Truyện Đề cử' />
                <BookSlide type='popular' title='Bảng Xếp Hạng' titleLink='/the-loai/bxh' />

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