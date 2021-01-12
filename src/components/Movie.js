import React from "react";
import "../styles/movie.scss";

function Movie() {
  return (
    <section id="movie">
      <div class="container">
        <div class="row">
          <h2 class="ir_so">영화 예매</h2>
          <div class="movie">
            <div class="movie_title">
              <ul class="clearfix">
                <li class="active">
                  <a href="#">박스오피스</a>
                </li>
                <li>
                  <a href="#">최신개봉작</a>
                </li>
                <li>
                  <a href="#">상영예정작</a>
                </li>
                <li>
                  <a href="#">큐레이션</a>
                </li>
              </ul>
            </div>
            <div class="movie_chart">
              <div class="swiper-container2">
                <div class="chart_cont1 swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="poster">
                      <figure>
                        <img
                          src="assets/img/poster01.jpg"
                          srcset="assets/img/poster01@2.jpg 2x"
                          alt="침묵"
                        />
                      </figure>
                      <div class="rank">
                        <strong>1</strong>
                      </div>
                      <div class="mx">
                        <span class="icon m ir_pm">MX</span>
                        <span class="icon b ir_pm">Boutique</span>
                      </div>
                    </div>
                    <div class="infor">
                      <h3>
                        <span class="icon all ir_pm">전체관람가</span>{" "}
                        <strong>침묵</strong>
                      </h3>
                      <div class="infor_btn">
                        <a href="#">상세정보</a>
                        <a href="#">예매하기</a>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="poster">
                      <figure>
                        <img
                          src="assets/img/poster02.jpg"
                          srcset="assets/img/poster02@2.jpg 2x"
                          alt="신세계"
                        />
                      </figure>
                      <div class="rank">
                        <strong>2</strong>
                      </div>
                      <div class="mx">
                        <span class="icon m ir_pm">MX</span>
                      </div>
                    </div>
                    <div class="infor">
                      <h3>
                        <span class="icon a19 ir_pm">19세 이상 관람</span>{" "}
                        <strong>신세계</strong>
                      </h3>
                      <div class="infor_btn">
                        <a href="#">상세정보</a>
                        <a href="#">예매하기</a>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="poster">
                      <figure>
                        <img
                          src="assets/img/poster03.jpg"
                          srcset="assets/img/poster03@2.jpg 2x"
                          alt="마스터"
                        />
                      </figure>
                      <div class="rank">
                        <strong>3</strong>
                      </div>
                      <div class="mx">
                        <span class="icon m ir_pm">MX</span>
                      </div>
                    </div>
                    <div class="infor">
                      <h3>
                        <span class="icon a12 ir_pm">12세 이상 관람</span>{" "}
                        <strong>마스터</strong>
                      </h3>
                      <div class="infor_btn">
                        <a href="#">상세정보</a>
                        <a href="#">예매하기</a>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="poster">
                      <figure>
                        <img
                          src="assets/img/poster04.jpg"
                          srcset="assets/img/poster04@2.jpg 2x"
                          alt="마약왕"
                        />
                      </figure>
                      <div class="rank">
                        <strong>4</strong>
                      </div>
                      <div class="mx">
                        <span class="icon m ir_pm">MX</span>
                      </div>
                    </div>
                    <div class="infor">
                      <h3>
                        <span class="icon a15 ir_pm">15세 이상 관람</span>{" "}
                        <strong>마약왕</strong>
                      </h3>
                      <div class="infor_btn">
                        <a href="#">상세정보</a>
                        <a href="#">예매하기</a>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="poster">
                      <figure>
                        <img
                          src="assets/img/poster05.jpg"
                          srcset="assets/img/poster05@2.jpg 2x"
                          alt="마약왕"
                        />
                      </figure>
                      <div class="rank">
                        <strong>5</strong>
                      </div>
                      <div class="mx">
                        <span class="icon m ir_pm">MX</span>
                      </div>
                    </div>
                    <div class="infor">
                      <h3>
                        <span class="icon a15 ir_pm">15세 이상 관람</span>{" "}
                        <strong>마약왕</strong>
                      </h3>
                      <div class="infor_btn">
                        <a href="#">상세정보</a>
                        <a href="#">예매하기</a>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="poster">
                      <figure>
                        <img
                          src="assets/img/poster06.jpg"
                          srcset="assets/img/poster06@2.jpg 2x"
                          alt="마약왕"
                        />
                      </figure>
                      <div class="rank">
                        <strong>6</strong>
                      </div>
                      <div class="mx">
                        <span class="icon m ir_pm">MX</span>
                      </div>
                    </div>
                    <div class="infor">
                      <h3>
                        <span class="icon a15 ir_pm">15세 이상 관람</span>{" "}
                        <strong>마약왕</strong>
                      </h3>
                      <div class="infor_btn">
                        <a href="#">상세정보</a>
                        <a href="#">예매하기</a>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="poster">
                      <figure>
                        <img
                          src="assets/img/poster07.jpg"
                          srcset="assets/img/poster07@2.jpg 2x"
                          alt="마약왕"
                        />
                      </figure>
                      <div class="rank">
                        <strong>7</strong>
                      </div>
                      <div class="mx">
                        <span class="icon m ir_pm">MX</span>
                      </div>
                    </div>
                    <div class="infor">
                      <h3>
                        <span class="icon a15 ir_pm">15세 이상 관람</span>{" "}
                        <strong>마약왕</strong>
                      </h3>
                      <div class="infor_btn">
                        <a href="#">상세정보</a>
                        <a href="#">예매하기</a>
                      </div>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="poster">
                      <figure>
                        <img
                          src="assets/img/poster08.jpg"
                          srcset="assets/img/poster08@2.jpg 2x"
                          alt="마약왕"
                        />
                      </figure>
                      <div class="rank">
                        <strong>8</strong>
                      </div>
                      <div class="mx">
                        <span class="icon m ir_pm">MX</span>
                      </div>
                    </div>
                    <div class="infor">
                      <h3>
                        <span class="icon a15 ir_pm">15세 이상 관람</span>{" "}
                        <strong>마약왕</strong>
                      </h3>
                      <div class="infor_btn">
                        <a href="#">상세정보</a>
                        <a href="#">예매하기</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Movie;
