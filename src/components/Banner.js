import React from "react";
import "../styles/banner.scss";

function Banner() {
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
          <div className="swiper-wrapper">
            <div className="swiper-slide ss1">
              <div className="container">
                <div className="row">
                  <h3>어벤져스 : 앤드게임</h3>
                  <p>역대 최단 기간 1000만 관객 돌파 기록 </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide ss2">
              <div className="container">
                <div className="row">
                  <h3>어벤져스 : 앤드게임</h3>
                  <p>역대 최단 기간 1000만 관객 돌파 기록 </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide ss3">
              <div className="container">
                <div className="row">
                  <h3>어벤져스 : 앤드게임</h3>
                  <p>역대 최단 기간 1000만 관객 돌파 기록 </p>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
