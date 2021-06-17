import Section from "component/common/Section";
import { addHideTop, removeHideTop } from "js/common";
import React, { useState } from "react";

const TextWrite = (props) => {
    const [value, setValue] = useState('');
    const [check, setCheck] = useState(false);

    const inputUp = () => {
      setCheck(false);
        addHideTop();
    }

    const inputDown = () => {
        removeHideTop()
    }

    const onChangeText = (e) => {
      const text = e.target.value;
      setValue(text);
    }


  return (
    <Section>
      <div id="contents">
        <ul className="check_ai textarea" onBlur={inputDown}>
          <li>
            <textarea cols="5" rows="5" onClick={inputUp} value={value} onChange={onChangeText}></textarea>
            <button type="button" onClick={inputDown}>다시하기</button>
          </li>
          <li>
            <label>
              <input type="radio" title="" name="ai" />
              <span className="fake"></span>

              <span className="txt" onClick={() => setCheck(true)} checked={check}>잘모르겠음</span>
            </label>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default TextWrite;
