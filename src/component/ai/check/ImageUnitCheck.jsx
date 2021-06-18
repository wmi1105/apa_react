import React, { useState } from "react";
import Section from "component/common/Section";
import Image from "component/common/Image";

const items = [
  { key: 1, img: "thum/test_ai1.png", label: "염소똥처럼 딱딱한 알맹이 모양" },
  { key: 2, img: "thum/test_ai2.png", label: "솟아 오른(융기된) 형태" },
  { key: 3, img: "thum/test_ai3.png", label: "무겁고 먹먹해요" },
  { key: 4, img: "thum/test_ai4.png", label: "초록색이 감돌고 노란색이 섞인 색"},
];

const ImageUnitCheck = (props) => {
  const [check, setCheck] = useState(null);

  const onChangeRadio = (e) => {
    setCheck(e.target.value);
  }

  return (
    <>
      <Section>
        <div id="contents">
          <ul className="check_img">
            {items.map((item, idx) => (
              <li key={idx}>
                <label>
                  <input 
                    type="radio" 
                    name="ai" 
                    value={item.key}
                    onChange = {onChangeRadio}
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

export default ImageUnitCheck;
