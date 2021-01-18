import React, { useState } from "react";
import { movie__slidesInfo } from "../data.js";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "../styles/movie.scss";

// Import Swiper scss
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

function Movie() {
  const [activation, setActivation] = useState(-1);

  const genSlide = () => {
    const slides = movie__slidesInfo.map((info) => {
      return (
        <SwiperSlide>
          <div className="poster">
            <figure>
              <img
                src={`/assets/img/poster${info.rank}.jpg`}
                srcSet={`/assets/img/poster0${info.rank}@2.jpg 2x`}
                alt={info.title}
              />
            </figure>
            <div className="rank">
              <strong>{info.rank}</strong>
            </div>
            <div className="mx">
              <span className="icon m ir_pm">MX</span>
            </div>
          </div>

          <div className="infor">
            <h3>
              <span className={`icon ${info.limit.en} ir_pm`}>
                {info.limit.ko}
              </span>{" "}
              <strong>{info.title}</strong>
            </h3>
            <div className="infor_btn">
              <a href="/#">상세정보</a>
              <a href="/#">예매하기</a>
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
        slidesPerView={4}
        autoplay
        scrollbar={{ draggable: true }}
      >
        {genSlide()}
      </Swiper>
    );
  };

  const genMovieChart = () => {
    const numOfChart = [1, 2, 3, 4];

    const chart = numOfChart.map((num, index) => {
      if (activation === index) {
        return (
          <div key={index} className={`chart_cont${num} `}>
            <div className="movie_chart">{SwiperSlider()}</div>
          </div>
        );
      }
    });

    return chart;
  };

  const genList = () => {
    const nameOfNav = ["박스오피스", "최신개봉작", "상영예정작", "큐레이션"];

    const list = nameOfNav.map((name, index) => {
      return (
        <li
          key={index}
          className={activation === index ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            setActivation(index);
          }}
        >
          <a href="/#">{name}</a>
        </li>
      );
    });

    return list;
  };

  return (
    <section id="movie">
      <div className="container">
        <div className="row">
          <h2 className="ir_so">영화 예매</h2>
          <div className="movie">
            <div className="movie_title">
              <ul className="clearfix">{genList()}</ul>
            </div>
            <div className="swiper-container2">{genMovieChart()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Movie;
