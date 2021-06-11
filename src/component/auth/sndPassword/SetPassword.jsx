import React, { useEffect, useState } from "react";
import Section from "component/inc/Section";
import { clickPinPad, makePinPad } from "js/common";

const SetPassword = ({ onSubmit }) => {
  const [pickNum, setPickNum] = useState([]);
  const onClickHandler = () => {
    onSubmit();
  };

  useEffect(() => {
    const numbers = makePinPad();
    setPickNum(numbers);
  }, []);

  return (
    <>
      <Section>
        <div id="contents">
          <article className="pin_pass">
            <p className="normal_desc txt_center">
              회원님의 개인정보를 보호하기 위해
              <br />
              민감정보 영역의 경우 2중 비밀번호 입력 후<br />
              개인정보를 확인하실 수 있습니다.
            </p>
            <input type="password" title="pin값" maxLength="5" />
            <ul className="fake_key">
              <li>
                <p>*</p>
              </li>
              <li>
                <p>*</p>
              </li>
              <li>
                <p>*</p>
              </li>
              <li>
                <p>*</p>
              </li>
              <li>
                <p>*</p>
              </li>
            </ul>
            <p>비밀번호 5자리를 입력해 주세요.</p>
            <ul className="key">
              {pickNum.map((num, index) => (
                <li key={index}>
                  <button type="button" onClick={() => clickPinPad()}>{num}</button>
                </li>
              ))}
            </ul>
            <p className="del">
              <button type="button">삭제</button>
            </p>
            <p className="submit">
              <button type="button">입력완료</button>
            </p>
          </article>
        </div>
      </Section>
    </>
  );
};

export default SetPassword;
