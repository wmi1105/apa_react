import React, { useCallback, useState } from "react";
import { phoneValueCheck } from "js/common";
import Section from "component/common/Section";
import FixButton from "component/common/FixButton";

const SerPhone = ({ onClick }) => {
  const [number, setNumber] = useState("");
  const [inputCheck, setInputCheck] = useState(true);
  const [btnDisable, setBtnDisable] = useState(true);

  const numberValueCheck = (e) => {
    const value = e.target.value;
    if (value.length < 12) {
      setNumber(value);
    }

    if (value.length > 8) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }

    if (!inputCheck) setInputCheck(true);
  };

  const onClickHandler = useCallback(() => {
    const typeCheck = phoneValueCheck(number);
    if (!typeCheck) {
      setInputCheck(false);
      return false;
    }

    onClick(number);
  }, [number, onClick]);

  return (
    <>
      <Section>
        <div id="contents">
          {/* contents start */}
          <p className="normal_desc">
            회원가입 시 등록한 휴대폰을 통해
            <br />
            이메일을 찾을 수 있도록 안내해 드립니다.
          </p>
          <ul className="inputs write">
            <li>
              <p>
                <label>
                  <span>휴대폰번호</span>
                  <input
                    type="number"
                    value={number}
                    className="phone_key"
                    title="휴대폰번호 입력"
                    placeholder="(-)없이 입력해 주세요."
                    onChange={numberValueCheck}
                    // readOnly
                  />
                </label>
              </p>
              {!inputCheck && <p className="info">잘못된 휴대폰 번호입니다.</p>}
            </li>
          </ul>
        </div>
      </Section>

      <FixButton
        label="인증번호 요청"
        btnDisable={btnDisable}
        onClick={onClickHandler}
        btnProps={{
          className: "click_show_evt",
          "data-link-show": "cer_phone",
        }}
      />
    </>
  );
};

export default SerPhone;
