import React from "react";

import icon_weather_1 from "image/sub/icon_weather_1.svg";
import { weatherClose, weatherOpen } from "js";


const Weather = (props) => {
  return (
    <>
      <article className="weather">
        {/* weather start */}
        <h2>오늘의 날씨</h2>

        <div className="shot">
          {/* shot start */}
          <p className="icon">
            <img src={icon_weather_1} alt="" />
          </p>
          <p>
            <span>홍길동</span> 님, <span>호흡기계 질환에 안 좋은</span>{" "}
            날씨입니다.
          </p>
          <p className="tem">
            <span>10</span>℃<span className="step3">흐림</span>
          </p>
          <p className="dust">
            미세먼지<span className="step2">보통</span>
          </p>
          <p className="open" onClick={weatherOpen}>
            <button type="button">펼치기</button>
          </p>
        </div>
        {/* shot end */}

        <div className="long">
          {/* long start */}
          <p className="loc">서울특별시 강서구 가양3동</p>
          <p className="desc">
            <span>홍길동</span> 님, 호흡기계 질환에 안 좋은 날씨입니다. 외출
            하실 때 꼭 마스크를 착용해 주시고, 과도한 운동이나 활동을 삼가해
            주세요.
          </p>
          <p className="icon">
            <img src={icon_weather_1} alt="" />
            <span>10</span>℃
          </p>
          <ul className="infos">
            <li>
              <strong>미세먼지</strong>
              <p className="step2">보통</p>
              <p>
                <span>14</span> ㎍/m³
              </p>
            </li>
            <li>
              <strong>초미세먼지</strong>
              <p className="step3">좋음</p>
              <p>
                <span>14</span> ㎍/m³
              </p>
            </li>
            <li>
              <strong>오존지수</strong>
              <p className="step1">주의</p>
              <p>
                <span>0.021</span> ppm
              </p>
            </li>
          </ul>
          <p className="close" onClick={weatherClose}>
            <button type="button">접기</button>
          </p>
        </div>
        {/* long end */}
      </article>
      {/* weather end */}
    </>
  );
};

export default Weather;
