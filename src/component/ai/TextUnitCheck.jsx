import Section from "component/common/Section";
import React, { useState } from "react";
import Header from "./Header";

import thum_test from "image/thum/thum_test.png";
import Help from "./Help";

const TextUnitCheck = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const onClickHelp = () => {setModalVisible(true)};

  return (
    <>
      <Header
        title="혹시 이전에도 같은 부위에 비슷한 통증으로 치료받았던 적이 있나요? 아래 항목 중 선택해 주세요."
        step ={0}
        stepSize={10}
        onClick={onClickHelp}
      />

      <Section>
        {/* container start */}

        <div id="contents">
          {/* contents start */}
          <ul className="check_ai">
            <li>
              <label>
                <input type="radio" title="" name="ai" />
                <span className="fake"></span>
                <span className="txt">무겁고 먹먹해요.</span>
              </label>
            </li>
            <li>
              <label>
                <input type="radio" title="" name="ai" />
                <span className="fake"></span>
                <span className="txt">욱씬거려요.</span>
              </label>
            </li>
            <li>
              <label>
                <input type="radio" title="" name="ai" />
                <span className="fake"></span>
                <span className="txt">띠를 두른듯 조여요.</span>
              </label>
            </li>
            <li>
              <label>
                <input type="radio" title="" name="ai" />
                <span className="fake"></span>
                <span className="txt">
                  1,2,3,4번째 손가락을 포함한 부위가 움직이기 어려워요.
                </span>
              </label>
            </li>
            <li>
              <label>
                <input type="radio" title="" name="ai" />
                <span className="fake"></span>
                <span className="txt">깨지거나 째지는 느낌이에요.</span>
              </label>
            </li>
          </ul>
        </div>
        {/* contents end */}
      </Section>
      {/* container end */}

      <Help
        targetId="help_pop"
        title="중강도 신체활동의 예"
        visible={modalVisible}
        onClick={() => setModalVisible(false)}
      >
        <p>
          빠르게 걷기, 복식테니스, 보통 속도로 자전거타기, 가벼운 물건 나르기,
          청소 등
        </p>
        <p>
          <img src={thum_test} alt="" />
        </p>
      </Help>
      {/* prifile_delete end */}

      {/* footer end */}
    </>
  );
};

export default TextUnitCheck;
