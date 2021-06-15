import React, { useCallback, useEffect, useState } from "react";
import { emailValueCheck } from "js/common";
import Section from "component/common/Section";
import FixButton from "component/common/FixButton";

const SerEmail = ({ onClick }) => {
  const [input, setInput] = useState("");
  const [inputCheck, setInputCheck] = useState(true);
  const [btnDisable, setBtnDisable] = useState(true);

  const valueCheck = (e) => {
    const value = e.target.value;
    setInput(value);
    
    if(!inputCheck) setInputCheck(true);
  };

  const onClickHandler = useCallback(() => {
    const check = emailValueCheck(input);
    if(!check){
      setInputCheck(false);
      return false;
    }

    onClick(input);
  }, [input, onClick]);

  useEffect(() => {
    if(input !== ''){
      const check = emailValueCheck(input);
      setBtnDisable(!check);
    }else{
      setBtnDisable(true);
    }
  }, [input])

  return (
    <>
      <Section>
        <div id="contents">
          {/* contents start */}
            <p className="normal_desc">
              회원가입 시 등록된 이메일 주소를 입력해 주세요.
              <br />
              이메일로 임시비밀번호를 발송해 드립니다.
            </p>
            <ul className="inputs write">
              <li>
                <p>
                  <label>
                    <span>이메일</span>
                    <input
                      type="text"
                      value = {input}
                      onChange = {valueCheck}
                      className="mail_key"
                      title="이메일 입력"
                      placeholder="이메일을 입력해 주세요."
                      // readOnly
                    />
                  </label>
                </p>
                {!inputCheck && (
                  <p className="info">이메일 형식이 올바르지 않습니다.</p>
                )}
              </li>
            </ul>
        </div>
      </Section>

      <FixButton
        label="비밀번호 요청"
        btnDisable={btnDisable}
        onClick={onClickHandler}
        btnProps={{
          'className':"click_show_evt",
          'data-link-show':"cer_mail"
        }}
      />
    </>
  );
};

export default SerEmail;
