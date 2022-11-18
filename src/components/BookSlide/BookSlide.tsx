import React, { useEffect, useState } from 'react'
import BookCard from '@src/components/BookCard';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import swiperOnChangePagination from '../../Helper/swiperOnChangePagination';
import styles from './BookSlide.module.scss'
import classNamesBind from 'classnames/bind';
import classNames from 'classnames';
import bookApi from '@src/apis/book.api';
import { Book } from '@src/models';
import { useFetch } from '@src/hooks';
const cx = classNamesBind.bind(styles)

export interface Props {
    title?: string,
    type: 'popular' | 'recommend',
    titleLink?: string
}
const slideActions = {
    recommend: bookApi.getRecommendBooks,
    popular: bookApi.getPopularBook
}



const BookSlide = ({ title, type, titleLink }: Props) => {
    const { data: slideData, isLoading, error } = useFetch<Array<Book>>(slideActions[type], [])

    return (
        <div className={cx('slider-wrapper')}>
            <Link to={titleLink ?? '#'}>
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
                {/* <SwiperSlide className={classNames('swiper-slide', cx('swiper-book-card'))}>
                    <BookCard className={cx('slide-content')} />
                </SwiperSlide> */}
                {
                    slideData?.map(value => (
                        <SwiperSlide key={value.slug} className={classNames('swiper-slide', cx('swiper-book-card'))}>
                            <BookCard book={value} className={cx('slide-content')} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default BookSlide