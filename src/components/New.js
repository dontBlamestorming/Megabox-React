import React from "react";
import "../styles/new.scss";

function New() {
  return (
    <section id="new">
      <div class="container">
        <div class="row">
          <div class="new">
            <h2>
              <em>새로운 영화</em>
            </h2>
            <div class="new_left">
              <div class="play" id="showTrailer" data-youtube="F1239ZePXfM">
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 120 120"
                  style={{ "enable-background": "new 0 0 120 120" }}
                  xmlSpace="preserve"
                >
                  <circle class="st0" cx="60" cy="60.4" r="56" />
                  <path
                    class="st1"
                    d="M81,65.4c4.8-2.8,4.8-7.2,0-10L53.5,39.6c-4.8-2.8-8.7-0.5-8.7,5v31.7c0,5.5,3.9,7.8,8.7,5L81,65.4z"
                  />
                </svg>
              </div>
            </div>
            <div class="new_right">
              <h3 class="title">로그 원: 스타워즈 스토리</h3>
              <span class="release">2016년 10월 28일 개봉</span>
              <div class="star">
                <span class="icon star1"></span>
                <span class="icon star1"></span>
                <span class="icon star1"></span>
                <span class="icon star2"></span>
                <span class="icon star0"></span>
                <strong>7.5/10</strong>
              </div>
              <ul class="summary"></ul>
              <div class="select">
                <div class="s1">
                  <label for="udate" class="ir_so">
                    날짜
                  </label>
                  <input
                    type="text"
                    id="udate"
                    name="udate"
                    value="2019년 1월 25일"
                    class="ui_select2"
                  />
                </div>
                <div class="s2">
                  <label for="utime" class="ir_so">
                    시간
                  </label>
                  <select id="utime" name="utime" class="ui_select2">
                    <option value="오전 0:00">오전 0:00</option>
                    <option value="오전 1:00">오전 1:00</option>
                    <option value="오전 2:00">오전 2:00</option>
                    <option value="오전 3:00">오전 3:00</option>
                    <option value="오전 4:00">오전 4:00</option>
                    <option value="오전 5:00">오전 5:00</option>
                    <option value="오전 6:00">오전 6:00</option>
                    <option value="오전 7:00">오전 7:00</option>
                    <option value="오전 8:00">오전 8:00</option>
                    <option value="오전 9:00">오전 9:00</option>
                    <option value="오전 10:00">오전 10:00</option>
                    <option value="오전 11:00">오전 11:00</option>
                    <option value="오전 12:00">오전 12:00</option>
                    <option value="오후 1:00">오후 1:00</option>
                    <option value="오후 2:00">오후 2:00</option>
                    <option value="오후 3:00">오후 3:00</option>
                    <option value="오후 4:00">오후 4:00</option>
                    <option value="오후 5:00">오후 5:00</option>
                    <option value="오후 6:00">오후 6:00</option>
                    <option value="오후 7:00">오후 7:00</option>
                    <option value="오후 8:00">오후 8:00</option>
                    <option value="오후 9:00">오후 9:00</option>
                    <option value="오후 10:00">오후 10:00</option>
                    <option value="오후 11:00">오후 11:00</option>
                    <option value="오후 12:00">오후 12:00</option>
                  </select>
                </div>
                <div class="s3">
                  <label for="utext" class="ir_so">
                    주소 또는 도로명을 입력해주세요.
                  </label>
                  <input
                    type="text"
                    id="utext"
                    name="utext"
                    class="ui_input3"
                    placeholder="주소 또는 도로명을 입력해주세요."
                  />
                </div>
              </div>
              <div class="btn">
                <a href="#" class="white">
                  좌석확인
                </a>
                <a href="#" class="purple">
                  예매하기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default New;
