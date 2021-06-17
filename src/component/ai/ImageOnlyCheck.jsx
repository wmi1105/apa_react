import React, { useState } from "react";
import Section from "component/common/Section";
import Image from "component/common/Image";

const items = [
  { key: 1, img: "thum/test_ai1.png" },
  { key: 2, img: "thum/test_ai2.png" },
  { key: 3, img: "thum/test_ai3.png" },
  { key: 4, img: "thum/test_ai4.png" },
];

const ImageOnlyCheck = (props) => {
  const [check, setCheck] = useState(null);

  const onChangeRadio = (e) => {
    setCheck(e.target.value);
  };

  return (
    <Section>
      <div id="contents">
        <ul className="check_img">
          {items.map((item, idx) => (
            <li key={idx}>
              <label className="img_only">
                <input
                  type="radio"
                  name="ai"
                  value={item.key}
                  onChange={onChangeRadio}
                />
                <Image src={item.img} options={{}} />
              </label>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default ImageOnlyCheck;
