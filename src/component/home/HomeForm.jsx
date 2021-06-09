import React from "react";

import Contents from "./Contents";
import Section from "component/inc/Section";
import MyMenu from "./MyMenu";
import PublicBanner from "./PublicBanner";
import Weather from "./Weather";
import HealthNTalk from "./HealthNTalk";
import MarketingBanner from "./MarketingBanner";
import Disease from "./Disease";

import icn_ai from "image/common/icn_ai.svg";
import Info from "./Info";

const HomeForm = ({ history }) => {
  return (
    <>
      <Section>
        <div id="contents">
          <Contents /> {/* 운영 컨텐츠 */}
          <MyMenu /> {/* 마이메뉴 */}
          <PublicBanner /> {/* 공익광고 */}
          <Weather /> {/* k weather */}
          <HealthNTalk /> {/* 건강N톡 컨텐츠 */}
          <MarketingBanner /> {/* 마케팅 베너 */}
          <Disease /> {/* 신규질환 소개 */}
          <Info /> {/* 어디아파 알아보기 */}
        </div>

        <p className="ai_Clinic">
          <button type="button">
            <img src={icn_ai} alt="AI 문진하러 가기" />
          </button>
        </p>
      </Section>
    </>
  );
};

export default HomeForm;
