import React from "react";
import "../styles/opening.scss";
import { opening__info } from "../data.js";

function Opening() {
  const genOpenBoxes = () => {
    const box = opening__info.map((info, i) => {
      return (
        <div className="open_box" key={i}>
          <h3 className="box_title">{info.title}</h3>
          <p className="box_content">
            <em className="box_state">{info.state}</em>
            <strong className="box_location">{info.location}</strong>
            {info.date}
          </p>
        </div>
      );
    });

    return box;
  };

  return (
    <section id="opening">
      <div className="container">
        <div className="row">
          <div className="opening">
            <h2>
              <span className="icon grand ir_pm">Grand Opening</span>
            </h2>
            <strong className="icon date ir_pm">2021.01 ~ 2021.03</strong>
            <p className="desc">
              LIFE THEATER로 새롭게 시작하는 메가박스를 만나보세요!
            </p>
            <div className="open_boxes">{genOpenBoxes()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Opening;
