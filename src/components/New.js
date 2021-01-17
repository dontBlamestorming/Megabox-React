import React from "react";
import "../styles/new.scss";
import { PlayBtn } from "./SVG/Svg";
import { new__inputTime } from "../data";

function New() {
  const genOption = () => {
    const option = new__inputTime.map((time, i) => {
      return (
        <option key={i} value={time}>
          {time}
        </option>
      );
    });

    return option;
  };

  return (
    <section id="new">
      <div className="container">
        <div className="row">
          <div className="new">
            <h2>
              <em>새로운 영화</em>
            </h2>
            <div className="new_left">
              <div className="play" id="showTrailer" data-youtube="F1239ZePXfM">
                <PlayBtn />
              </div>
            </div>
            <div className="new_right">
              <h3 className="title">로그 원: 스타워즈 스토리</h3>
              <span className="release">2016년 10월 28일 개봉</span>
              <div className="star">
                <span className="icon star1"></span>
                <span className="icon star1"></span>
                <span className="icon star1"></span>
                <span className="icon star2"></span>
                <span className="icon star0"></span>
                <strong>7.5/10</strong>
              </div>
              <ul className="summary">
                <li className="genre">
                  <span className="bar">액션</span>
                  <span>미국, 오스트레일리아</span>
                </li>

                <li className="age">
                  <span className="bar">142분</span>
                  <span>12세 이상 관람가</span>
                </li>

                <li className="desc">
                  단숨에 행성 하나를 파괴할 위력을 지닌 데스 스타가 완성되기
                  전에 설계도를 훔쳐내야 하는 이번 작전의 성공 확률은 고작 2.4%.
                  생사도 모르는 아버지에 얽힌 비밀을 밝히려는 진을 ...비롯해
                  유능한 정보 요원 ‘카시안’(디에고 루나), 두 눈이 멀었지만
                  탁월한 무술 실력을 지닌 ‘치루트’(견자단), 전투 베테랑
                  ‘베이즈’, 파일럿 ‘보디’, 시니컬한 드로이드 ‘K-2SO’까지 합류,
                  거대한 전쟁을 끝낼 ‘로그 원’이 이끄는 가장 비밀스런 작전이
                  시작되는데…
                </li>
              </ul>
              <div className="select">
                <div className="s1">
                  <label for="udate" className="ir_so">
                    날짜
                  </label>
                  <input
                    type="text"
                    id="udate"
                    name="udate"
                    value="2019년 1월 25일"
                    className="ui_select2"
                  />
                </div>
                <div className="s2">
                  <label for="utime" className="ir_so">
                    시간
                  </label>
                  <select id="utime" name="utime" className="ui_select2">
                    {genOption()}
                  </select>
                </div>
                <div className="s3">
                  <label for="utext" className="ir_so">
                    주소 또는 도로명을 입력해주세요.
                  </label>
                  <input
                    type="text"
                    id="utext"
                    name="utext"
                    className="ui_input3"
                    placeholder="주소 또는 도로명을 입력해주세요."
                  />
                </div>
              </div>
              <div className="btn">
                <a href="#" className="white">
                  좌석확인
                </a>
                <a href="#" className="purple">
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
