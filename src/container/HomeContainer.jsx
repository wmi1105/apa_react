import React from 'react';
import Contents from 'component/home/Contents';
import Disease from 'component/home/Disease';
import HealthNTalk from 'component/home/HealthNTalk';
import Info from 'component/home/Info';
import MarketingBanner from 'component/home/MarketingBanner';
import MyMenu from 'component/home/MyMenu';
import PublicBanner from 'component/home/PublicBanner';
import Weather from 'component/home/Weather';
import Section from 'component/inc/Section';

import AiButton from './user/AiButton';


const HomeContainer = (props) => {

    return(
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

        <AiButton />
      </Section>
        </>
    )
}

export default HomeContainer;