import React from "react";

import Contents from "./Contents";
import Section from "component/inc/Section";
import MyMenu from "./MyMenu";
import PublicBanner from "./PublicBanner";
import Weather from "./Weather";
import HealthNTalk from "./HealthNTalk";
import MarketingBanner from "./MarketingBanner";
import Disease from "./Disease";

import logo_top from "image/common/logo_top.svg";
import icn_ai from "image/common/icn_ai.svg"
import Info from "./Info";

const HomeForm = ({ history }) => {
  return (
    <>
      <div id="wrap" className="index">
        {/* wrap start */}

        <header id="header" className="normal_header">
          {/*  header start */}
          <h1 onClick={() => history.push("/index")}>
            <img src={logo_top} alt="어디아파" />
          </h1>
          <ul className="topmenu">
            <li className="alert new">
              <button type="button">알림</button>
            </li>
            <li className="camera">
              <button type="button">카메라</button>
            </li>
            <li className="menu">
              <button type="button">전체메뉴</button>
            </li>
          </ul>
        </header>
        {/*  header end */}

        <Section>
          <div id="contents">
            <Contents />
            <MyMenu />
            <PublicBanner />
            <Weather />
            <HealthNTalk />
            <MarketingBanner />
            <Disease />
            <Info />
          </div>

          <p className="ai_Clinic">
            <button type="button">
              <img src={icn_ai} alt="AI 문진하러 가기" />
            </button>
          </p>
        </Section>

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
      </div>
    </>
  );
};

export default HomeForm;
