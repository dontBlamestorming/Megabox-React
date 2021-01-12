import React from "react";
import "../styles/opening.scss";

function Opening() {
  return (
    <section id="opening">
      <div class="container">
        <div class="row">
          <div class="opening">
            <h2>
              <span class="icon grand ir_pm">Grand Opening</span>
            </h2>
            <strong class="icon date ir_pm">2019.01 ~ 2019.03</strong>
            <p class="desc">
              LIFE THEATER로 새롭게 시작하는 메가박스를 만나보세요!
            </p>
            <div class="open_box">
              <div>
                <h3>리뉴얼 오픈</h3>
                <p>
                  <em>경기도</em>
                  <strong>안양</strong>12월 8일
                </p>
              </div>
              <div>
                <h3>리뉴얼 오픈</h3>
                <p>
                  <em>경기도</em>
                  <strong>인덕원 사거리</strong>12월 8일
                </p>
              </div>
              <div>
                <h3>리뉴얼 오픈</h3>
                <p>
                  <em>경기도</em>
                  <strong>용인테크노밸리</strong>12월 8일
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Opening;
