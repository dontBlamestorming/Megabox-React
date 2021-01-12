import React from "react";
import "../styles/header.scss";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="header clearfix">
            <h1>
              <a href="#">
                <em>
                  <img src="assets/img/logo.png" alt="MEGABOX" />
                </em>
                <strong>
                  <img src="assets/img/logo-sub.png" alt="LIFE THEATER" />
                </strong>
              </a>
            </h1>
            <nav id="mNav">
              <h2 className="ir_so">메가박스 전체메뉴</h2>
              <a href="#" className="ham">
                <span></span>
              </a>
            </nav>
            <nav className="nav">
              <ul className="clearfix">
                <li>
                  <a href="#">영화</a>
                </li>
                <li>
                  <a href="#">큐레이션</a>
                </li>
                <li>
                  <a href="#">영화관</a>
                </li>
                <li>
                  <a href="#">특별관</a>
                </li>
                <li>
                  <a href="#">스토어</a>
                </li>
                <li>
                  <a href="#">이벤트</a>
                </li>
                <li>
                  <a href="#">로그인</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
