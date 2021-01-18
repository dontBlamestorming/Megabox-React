import React from "react";
import "../styles/footer.scss";
import { footer__sns__info, footer__infor__info } from "../data";
function Footer() {
  const snsGenList = () => {
    const list = footer__sns__info.map((info, i) => {
      return (
        <li className={`icon s${i + 1}`} key={i}>
          <a href="#">
            <span className="ir_pm">{info}</span>
          </a>
        </li>
      );
    });

    return list;
  };

  const inforGenList = () => {
    const list = footer__infor__info.map((info, i) => {
      return (
        <li key={i}>
          <a href="#">{info}</a>
        </li>
      );
    });

    return list;
  };

  return (
    <footer id="footer">
      <div id="footer_sns">
        <div className="container">
          <div className="footer_sns">
            <ul>{snsGenList()}</ul>
            <div className="tel">
              <a href="#">
                ARS <em>1544-0070</em>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="footer_infor">
        <div className="container">
          <div className="row">
            <div className="footer_infor">
              <h2>
                <img src="assets/img/logo_footer.png" alt="megabox" />
              </h2>
              <ul>{inforGenList()}</ul>
              <address>
                <p>
                  서울특별시 강남구 도산대로 156, 2층 메가박스중앙(주) (논현동,
                  중앙엠앤비사옥)
                  <br />
                  <span className="bar2">대표자명 김진선</span> 개인정보보호
                  책임자 경영지원실 실장 박영진
                  <br />
                  <span className="bar2">사업자등록번호 211-86-59478</span>{" "}
                  통신판매업신고번호 제 833호
                </p>
                <p>Copyright 2014 by MegaboxJoongAng Inc. All right reserved</p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
