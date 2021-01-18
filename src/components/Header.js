import React from "react";
import "../styles/header.scss";
import { header__nameOfNav } from "../data.js";

function Header() {
  const genList = () => {
    const list = header__nameOfNav.map((name, i) => {
      return (
        <li key={i}>
          <a href="#">{name}</a>
        </li>
      );
    });

    return list;
  };

  return (
    <header id="header">
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
              <ul className="clearfix">{genList()}</ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
