import React from "react";


const Footer = (props) => (
  <>
    <footer id="footer" className="footer_area">
      <ul className="bottom_gnb">
        <li className="home on">
          <button type="button">HOME</button>
        </li>
        <li className="drug">
          <button type="button">병원&amp;약국</button>
        </li>
        <li className="ins">
          <button type="button">실손보험</button>
        </li>
        <li className="my">
          <button type="button">마이페이지</button>
        </li>
      </ul>
    </footer>
  </>
);

export default Footer;
