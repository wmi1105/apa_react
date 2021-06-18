//텍스트 여러개 체크
import React, { useState } from "react";
import Section from "component/common/Section";

const items = [
  {key:1, label:'무겁고 먹먹해요.'},
  {key:2, label:'욱씬거려요.'},
  {key:3, label:'띠를 두른듯 조여요.'},
  {key:4, label:'1,2,3,4번째 손가락을 포함한 부위가 움직이기 어려워요.'},
  {key:5, label:'깨지거나 째지는 느낌이에요.'}
]

const TextMultiCheck = (props) => {

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
          <ul className="check_ai">
            {items.map((item, idx) => 
               <li key={idx}>
                <label>
                  <input type="checkbox" name="ai" value={item.key} onChange={onChangeCheckbox}/>
                  <span className="fake"></span>
                  <span className="txt">{item.label}</span>
                </label>
              </li>
            )}
          </ul>
        </div>
      </Section>
    </>
  );
};

export default TextMultiCheck;
