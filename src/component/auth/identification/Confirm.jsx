import React, { useCallback, useState } from "react";
import Section from "component/common/Section";
import FixButton from "component/common/FixButton";

const Confirm = ({ onClick }) => {
  const [number, setNumber] = useState("");
  const [btnDisable, setBtnDisable] = useState(true);
  const [inputCheck, setInputCheck] = useState(true);

  const onChangeHandler = (e) => {
    const value = e.target.value;
    if (value.length < 5) {
      setNumber(value);
      
      if(value.length === 4) setBtnDisable(false);
      else setBtnDisable(true)
    }

    if(!inputCheck) setInputCheck(true);
  };

  const onClickHandler = useCallback(() => {
    setInputCheck(true);
    const result = onClick(number);

    if(result === false)setInputCheck(result);
  }, [number, onClick])

  return (
    <>
      <Section>
        <div id="contents">
            <p className="normal_desc">
              회원님의 휴대폰으로 전송된 인증번호를
              <br />
              정확히 입력 해 주세요.
            </p>
            <ul className="inputs write">
              <li>
                <p>
                  <label>
                    <span>인증번호</span>
                    <input
                      type="number"
                      value={number}
                      className="number_key2"
                      title="인증번호 입력"
                      placeholder="인증번호 4자리를 입력해 주세요."
                      onChange={onChangeHandler}
                      maxLength={4}
                      // readOnlys
                    />
                  </label>
                </p>
                {!inputCheck && 
                  <p className="info">인증번호가 일치하지 않습니다.</p>
                }
              </li>
            </ul>
        </div>
      </Section>

      <FixButton
        label="인증하기"
        btnDisable={btnDisable}
        onClick={onClickHandler}
        btnProps = {{
          'className':"click_show_evt",
          'data-link-show':"cer_phone2"
        }}
      />
    </>
  );
};

export default Confirm;
