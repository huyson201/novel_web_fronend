import React, { Suspense, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import swiperOnChangePagination from '@src/Helper/swiperOnChangePagination';
import { Link } from 'react-router-dom';
import classBind from 'classnames/bind'
import styles from './Banner.module.scss'
import { Slider } from '@src/models';
import commonApi from '@src/apis/common.api';
import { useFetch } from '@src/hooks';
import { handleErrorImage } from '@src/utils';
const cx = classBind.bind(styles)
const Banner = () => {
    const { data: sliderData, isLoading, error } = useFetch<Array<Slider>>(commonApi.getSliders, [])

    return (
        <section className={cx("slider-feature")}>
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
                {
                    sliderData?.map((value) => {
                        return (
                            <SwiperSlide key={value.id} className={cx('swiper-slide-container')}>
                                <Suspense  >
                                    <div>
                                        <Link to={value.book.slug}>
                                            <img src={value.bannerImg} alt="slider-img" onError={handleErrorImage} />
                                        </Link>
                                    </div>
                                </Suspense>

                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>

        </section>
    )
}


export default Banner