import React from "react";

import thum_test1 from "image/thum/thum_test1.png" 
import thum_test2 from  "image/thum/thum_test2.png";
import thum_test3 from "image/thum/thum_test3.png";

const HealthNTalk = (props) => {
  return (
    <>
      <article className="health">
        {/* health start */}
        <h2>건강N톡</h2>

        <section className="swiper-container">
          {/* swiper-container start */}
          <ul className="swiper-wrapper">
            <li className="swiper-slide">
              <p className="img">
                <button type="button">
                  <img src={thum_test1} alt="" />
                </button>
              </p>

              <div className="inner">
                {/* inner start */}
                <p className="type type1">건강상식</p>
                <strong>
                  <button type="button">
                    집콕생활, 비타민 D 결핍에 대처하는방법
                  </button>
                </strong>
                <p className="date">2021.01.11</p>
                <p className="like click_add_on">
                  <button type="button">좋아요</button>
                </p>
              </div>
              {/* inner end */}
            </li>
            <li className="swiper-slide">
              <p className="img">
                <button type="button">
                  <img src={thum_test2} alt="" />
                </button>
              </p>

              <div className="inner">
                {/* inner start */}
                <p className="type type2">의약상식</p>
                <strong>
                  <button type="button">
                    집콕생활, 비타민 D 결핍에 대처하는방법
                  </button>
                </strong>
                <p className="date">2021.01.11</p>
                <p className="like click_add_on">
                  <button type="button">좋아요</button>
                </p>
              </div>
              {/* inner end */}
            </li>
            <li className="swiper-slide">
              <p className="img">
                <button type="button">
                  <img src={thum_test3} alt="" />
                </button>
              </p>

              <div className="inner">
                {/* inner start */}
                <p className="type type3">보건의료제도</p>
                <strong>
                  <button type="button">
                    집콕생활, 비타민 D 결핍에 대처하는방법
                  </button>
                </strong>
                <p className="date">2021.01.11</p>
                <p className="like click_add_on">
                  <button type="button">좋아요</button>
                </p>
              </div>
              {/* inner end */}
            </li>
          </ul>

          <div className="swiper_pag_wrap">
            {/* swiper_pag_wrap start */}
            <div className="swiper-pagination"></div>
          </div>
          {/* swiper_pag_wrap end */}
        </section>
        {/* swiper-container end */}

        <p className="more">
          <button type="button">HOME</button>
        </p>
      </article>
      {/* health end */}
    </>
  );
};

export default HealthNTalk;
