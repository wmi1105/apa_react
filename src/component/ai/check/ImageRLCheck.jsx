import Image from "component/common/Image";
import Section from "component/common/Section";
import React, { useState } from "react";

const ImageRLCheck = (props) => {
  const [tab, setTab] = useState("L");

  const radioHandler = (val) => {
    setTab(val);
  };

  return (
    <Section>
      <div id="contents">
        <article className="select_side">
          <p className="img">
            {tab === "L" && <Image src="thum/test_left.svg" />}
            {tab === "R" && <Image src="thum/test_right.svg" />}
          </p>

          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  name="ai"
                  onChange={() => radioHandler("L")}
                  checked={tab === "L"}
                />
                <span className="txt">왼쪽</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  name="ai"
                  onChange={() => radioHandler("R")}
                  checked={tab === "R"}
                />
                <span className="txt">오른쪽</span>
              </label>
            </li>
          </ul>
        </article>
      </div>
    </Section>
  );
};

export default ImageRLCheck;
