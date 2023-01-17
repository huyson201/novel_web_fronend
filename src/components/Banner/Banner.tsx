import React, { Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Link } from "react-router-dom";
import classBind from "classnames/bind";
import styles from "./Banner.module.scss";
import { Slider } from "@src/models";
import commonApi from "@src/apis/common.api";
import { useFetch } from "@src/hooks";
import { handleErrorImage, handleImgLoaded } from "@src/utils";
import noImg from "@src/assets/images/no-img-2.png";
import loadedErrorImg from "@src/assets/images/loading-error2.jpg";
import ImageLoader from "../ImageLoader/ImageLoader";

const cx = classBind.bind(styles);
const Banner = () => {
  const {
    data: sliderData,
    isLoading,
    error,
  } = useFetch<Array<Slider>>(commonApi.getSliders, []);

  return (
    <section className={cx("slider-feature")}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{
          delay: 3000,
        }}
        className={"swiper-container"}
      >
        {sliderData?.map((value) => {
          return (
            <SwiperSlide
              key={value.id}
              className={cx("swiper-slide-container")}
            >
              <Suspense>
                <div>
                  <Link to={value.book.slug}>
                    <img
                      src={value.bannerImg}
                      alt="slider-img"
                      onLoad={handleImgLoaded}
                      onError={handleErrorImage(loadedErrorImg)}
                    />
                    <ImageLoader imgUrl={noImg} />
                  </Link>
                </div>
              </Suspense>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Banner;
