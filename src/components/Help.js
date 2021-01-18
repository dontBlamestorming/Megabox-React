import React, { useState } from "react";
import "../styles/help.scss";
import {
  help__allNotice__info,
  help__movieNotice__info,
  help__card__info,
  help__service__info,
} from "../data";

function Help() {
  const [activation, setActivation] = useState(true);
  const [notice, setNotice] = useState(true);

  const serviceGenList = () => {
    const list = help__service__info.map((info, i) => {
      return (
        <li key={i}>
          <a href="/#">
            <span className="img_svg">
              <img
                src={`/assets/img/${info.svg}.svg`}
                srcSet={`/assets/img/${info.svg}.svg`}
                alt={`card0${i + 1}`}
              />
            </span>
            <strong>{info.desc}</strong>
          </a>
        </li>
      );
    });

    return list;
  };
  const cardGenList = () => {
    const list = help__card__info.map((info, i) => {
      return (
        <li key={i}>
          <a href="/#">
            <span>
              <img
                src={`assets/img/card0${i + 1}.jpg`}
                srcSet={`assets/img/card0${i + 1}@2.jpg 2x`}
                alt={`card0${i + 1}`}
              />
            </span>
            <strong>{info.title}</strong>
            <em>{info.desc}</em>
          </a>
        </li>
      );
    });

    return list;
  };

  const allNoticeGenList = () => {
    const list = help__allNotice__info.map((info, i) => {
      return (
        <li key={i}>
          <dl>
            <dt>
              <strong className="bar">{info.coverage}</strong>
              <em>{info.date}</em>
            </dt>
            <dd>{info.content}</dd>
          </dl>
        </li>
      );
    });

    return list;
  };

  const movieNoticeGenList = () => {
    const list = help__movieNotice__info.map((info, i) => {
      return (
        <li key={i}>
          <dl>
            <dt>
              <strong className="bar">{info.coverage}</strong>
              <em>{info.date}</em>
            </dt>
            <dd>{info.content}</dd>
          </dl>
        </li>
      );
    });

    return list;
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    setNotice(!notice);
    setActivation(!activation);
  };

  return (
    <section id="help">
      <div className="container">
        <div className="row">
          <div className="help clearfix">
            <article className="help_box1">
              <h3>
                <em>공지사항</em>
              </h3>
              <div className="notice">
                <ul>
                  <li className={`${activation && "active"}`}>
                    <a href="/#" onClick={handleOnClick}>
                      전체 공지
                    </a>
                  </li>
                  <li>
                    <ul className="help_notice">
                      {notice ? allNoticeGenList() : null}
                    </ul>
                  </li>

                  <li className={`${!activation && "active"}`}>
                    <a href="/#" onClick={handleOnClick}>
                      영화관 공지
                    </a>
                    <li>
                      <ul className="help_notice">
                        {notice ? null : movieNoticeGenList()}
                      </ul>
                    </li>
                  </li>
                </ul>
              </div>
            </article>
            <article className="help_box2">
              <h3>
                <em>메가박스 할인카드</em>
              </h3>
              <div className="card">
                <ul>{cardGenList()}</ul>
              </div>
            </article>
            <article className="help_box3">
              <h3>고객센터</h3>
              <div className="service">
                <ul>{serviceGenList()}</ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Help;
