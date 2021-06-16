//텍스트 여러개 체크
import Section from "component/common/Section";
import React from "react";
import Header from "./Header";

const TextMultiCheck = (props) => {
  return (
    <>
        <Section>
          {/* container start */}

          <div id="contents">
            {/* contents start */}

            <ul className="check_ai">
              <li>
                <label>
                  <input type="checkbox" title="" name="ai" />
                  <span className="fake"></span>
                  <span className="txt">무겁고 먹먹해요.</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" title="" name="ai" />
                  <span className="fake"></span>
                  <span className="txt">욱씬거려요.</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" title="" name="ai" />
                  <span className="fake"></span>
                  <span className="txt">띠를 두른듯 조여요.</span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" title="" name="ai" />
                  <span className="fake"></span>
                  <span className="txt">
                    1,2,3,4번째 손가락을 포함한 부위가 움직이기 어려워요.
                  </span>
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" title="" name="ai" />
                  <span className="fake"></span>
                  <span className="txt">깨지거나 째지는 느낌이에요.</span>
                </label>
              </li>
            </ul>
          </div>
          {/* contents end */}
          </Section>
        {/* container end */}

        <footer id="footer" className="footer_area">
          {/* footer start */}
          <p>
            <button type="button">이전 질문</button>
          </p>
          <p>
            <button type="button">다음 질문</button>
          </p>
        </footer>
        {/* footer end */}

        <p className="lay_pop_blind"></p>

        <div className="popup help_pop" id="help_pop">
          {/* prifile_delete start */}
          <strong>중강도 신체활동의 예</strong>

          <section className="pop_cont">
            {/* pop_cont start */}
            <p>
              빠르게 걷기, 복식테니스, 보통 속도로 자전거타기, 가벼운 물건
              나르기, 청소 등
            </p>
            <p>
              <img src="/apa/image/thum/thum_test.png" alt="" />
            </p>
          </section>
          {/* pop_cont end */}

          <p className="btn">
            <button type="button" className="pop_confirm" onClick={null}>
              확인
            </button>
          </p>
        </div>
        {/* prifile_delete end */}
    </>
  );
};

export default TextMultiCheck;
