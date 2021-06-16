import Section from "component/common/Section";
import React from "react";

const MultiImageCheck = (props) => {
  return (
    <>
      <Section>
        <div id="contents">
          <ul className="check_img">
            <li>
              <label>
                <input type="checkbox" title="" name="ai" checked />
                <img src="/apa/image/thum/test_ai1.png" alt="" />
                <span className="txt">
                  <em>염소똥처럼 딱딱한 알맹이 모양</em>
                </span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" title="" name="ai" />
                <img src="/apa/image/thum/test_ai2.png" alt="" />
                <span className="txt">
                  <em>솟아 오른(융기된) 형태</em>
                </span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" title="" name="ai" />
                <img src="/apa/image/thum/test_ai3.png" alt="" />
                <span className="txt">
                  <em>무겁고 먹먹해요</em>
                </span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" title="" name="ai" />
                <img src="/apa/image/thum/test_ai4.png" alt="" />
                <span className="txt">
                  <em>초록색이 감돌고 노란색이 섞인 색</em>
                </span>
              </label>
            </li>
          </ul>
        </div>
      </Section>

      <footer id="footer" className="footer_area">
        <p>
          <button type="button">이전 질문</button>
        </p>
        <p>
          <button type="button">다음 질문</button>
        </p>
      </footer>

      <p className="lay_pop_blind"></p>

      <div className="popup help_pop" id="help_pop">
        <strong>중강도 신체활동의 예</strong>

        <section className="pop_cont">
          <p>
            빠르게 걷기, 복식테니스, 보통 속도로 자전거타기, 가벼운 물건 나르기,
            청소 등
          </p>
          <p>
            <img src="/apa/image/thum/thum_test.png" alt="" />
          </p>
        </section>

        <p className="btn">
          <button type="button" className="pop_confirm" onClick={null}>
            확인
          </button>
        </p>
      </div>
    </>
  );
};

export default MultiImageCheck;
