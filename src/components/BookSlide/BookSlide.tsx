import React from 'react'
import BookCard from '@src/components/BookCard';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import swiperOnChangePagination from '../../Helper/swiperOnChangePagination';
import styles from './BookSlide.module.scss'
import classNamesBind from 'classnames/bind';
import classNames from 'classnames';
const cx = classNamesBind.bind(styles)
export interface Props {
    title?: string
}

const BookSlide = ({ title }: Props) => {

    return (
        <div className={cx('slider-wrapper')}>
            <Link to={'#'}>
                <h2 className={cx("title")}>{title || 'List Book Slider'}</h2>
            </Link>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                pagination={{ clickable: false, horizontalClass: 'swiper-pagination-box' }}
                slidesPerView={'auto'}
                spaceBetween={26}
                className={'swiper-container'}
                onPaginationUpdate={swiperOnChangePagination}
                breakpoints={{
                    1200: {
                        spaceBetween: 26
                    },
                    768: {
                        spaceBetween: 20
                    },
                    320: {
                        spaceBetween: 10
                    }
                }}

            >
                <SwiperSlide className={classNames('swiper-slide', cx('swiper-book-card'))}>
                    <BookCard className={cx('slide-content')} />
                </SwiperSlide>
                <SwiperSlide className={classNames('swiper-slide', cx('swiper-book-card'))}>
                    <BookCard className={cx('slide-content')} />
                </SwiperSlide>
                <SwiperSlide className={classNames('swiper-slide', cx('swiper-book-card'))}>
                    <BookCard className={cx('slide-content')} />
                </SwiperSlide>
                <SwiperSlide className={classNames('swiper-slide', cx('swiper-book-card'))}>
                    <BookCard className={cx('slide-content')} />
                </SwiperSlide>
                <SwiperSlide className={classNames('swiper-slide', cx('swiper-book-card'))}>
                    <BookCard className={cx('slide-content')} />
                </SwiperSlide>
                <SwiperSlide className={classNames('swiper-slide', cx('swiper-book-card'))}>
                    <BookCard className={cx('slide-content')} />
                </SwiperSlide>
                <SwiperSlide className={classNames('swiper-slide', cx('swiper-book-card'))}>
                    <BookCard className={cx('slide-content')} />
                </SwiperSlide>
                <SwiperSlide className={classNames('swiper-slide', cx('swiper-book-card'))}>
                    <BookCard className={cx('slide-content')} />
                </SwiperSlide>
                <SwiperSlide className={classNames('swiper-slide', cx('swiper-book-card'))}>
                    <BookCard className={cx('slide-content')} />
                </SwiperSlide>
                <SwiperSlide className={classNames('swiper-slide', cx('swiper-book-card'))}>
                    <BookCard className={cx('slide-content')} />
                </SwiperSlide>
                <SwiperSlide className={classNames('swiper-slide', cx('swiper-book-card'))}>
                    <BookCard className={cx('slide-content')} />
                </SwiperSlide>
                <SwiperSlide className={classNames('swiper-slide', cx('swiper-book-card'))}>
                    <BookCard className={cx('slide-content')} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default BookSlide