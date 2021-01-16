import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { banner__slidesInfo } from "../data.js";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "../styles/banner.scss";

// Import Swiper scss
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

function Banner() {
  const genSlide = () => {
    const slides = banner__slidesInfo.map((info) => {
      return (
        <SwiperSlide className={`swiper-slide ${info.img}`}>
          <div className="container">
            <div className="row">
              <h3>{info.title}</h3>
              <p>{info.desc}</p>
            </div>
          </div>
        </SwiperSlide>
      );
    });

    return slides;
  };

  const SwiperSlider = () => {
    SwiperCore.use([Navigation, Pagination, Autoplay]);

    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {genSlide()}
      </Swiper>
    );
  };
  return (
    <section id="banner">
      <div className="banner_menu">
        <h2 className="ir_so">배너 영역</h2>
        <div className="container">
          <div className="row">
            <div className="bm_left">
              <ul>
                <li className="total">
                  <a href="#">전체메뉴</a>
                </li>
                <li className="line">
                  <a href="#">필름 소사이어티</a>
                </li>
                <li>
                  <a href="#">클래식 소사이어티</a>
                </li>
              </ul>
            </div>
            <div className="bm_right">
              <ul>
                <li className="line">
                  <a href="custom/faq.html">고객센터</a>
                </li>
                <li className="line">
                  <a href="#">멤버쉽</a>
                </li>
                <li>
                  <a href="#">VIP</a>
                </li>
              </ul>
              <ul>
                <li className="white">
                  <a href="#">상영시간표</a>
                </li>
                <li className="purple">
                  <a href="#">빠른예매</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="slider">
        <div className="swiper-container">
          <div className="swiper-wrapper">{SwiperSlider()}</div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
