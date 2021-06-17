//이미지 여러개 선택
import React, { useState } from "react";
import Section from "component/common/Section";
import Image from "component/common/Image";

const items = [
  { key: 1, img: "thum/test_ai1.png", label: "염소똥처럼 딱딱한 알맹이 모양" },
  { key: 2, img: "thum/test_ai2.png", label: "솟아 오른(융기된) 형태" },
  { key: 3, img: "thum/test_ai3.png", label: "무겁고 먹먹해요" },
  {
    key: 4,
    img: "thum/test_ai4.png",
    label: "초록색이 감돌고 노란색이 섞인 색",
  },
];

const ImageMultiCheck = (props) => {
  const [check, setCheck] = useState({});

  const onChangeCheckbox = (e) => {
    const tmp = { ...check };
    const key = e.target.value;
    if (!tmp[key]) {
      tmp[key] = true;
    } else {
      delete tmp[key];
    }

    setCheck({ ...tmp });
  };

  return (
    <>
      <Section>
        <div id="contents">
          <ul className="check_img">
            {items.map((item, idx) => (
              <li key={idx}>
                <label>
                  <input
                    type="checkbox"
                    name="ai"
                    value={item.key}
                    onChange={onChangeCheckbox}
                  />
                  <Image src={item.img} options={{}} />
                  <span className="txt">
                    <em>{item.label}</em>
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
};

export default ImageMultiCheck;
