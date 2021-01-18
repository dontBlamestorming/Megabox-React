import React from "react";
import "../styles/event.scss";

function Event() {
  return (
    <section id="event">
      <div className="container">
        <div className="row">
          <div className="event">
            <h2>
              <em>새로운 이벤트</em>
            </h2>
            <div className="event_left">
              <div className="event_slider">
                <img
                  src="assets/img/event01.jpg"
                  srcSet="assets/img/event01@2.jpg 2x"
                  alt="시티 패키지"
                />
              </div>
              <figure className="event_box1">
                <img
                  src="assets/img/event02.jpg"
                  srcSet="assets/img/event02@2.jpg 2x"
                  alt="남포항점 2019 시즌할인권"
                />
              </figure>
              <figure className="event_box2">
                <img
                  src="assets/img/event03.jpg"
                  srcSet="assets/img/event03@2.jpg 2x"
                  alt="설 선물 이수점 전용 관람권 런칭"
                />
              </figure>
            </div>
            <figure className="event_right">
              <img
                src="assets/img/event04.jpg"
                srcSet="assets/img/event04@2.jpg 2x"
                alt="사표 대신 영화표"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Event;
