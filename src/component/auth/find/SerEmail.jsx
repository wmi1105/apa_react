import React, { useCallback, useState } from "react";
import { emailValueCheck } from "js/common";
import Footer from "component/inc/Footer";
import Section from "component/inc/Section";

const SerEmail = ({ cerEmailSubmit }) => {
  const [input, setInput] = useState("");
  const [inputCheck, setInputCheck] = useState(true);
  const [btnDisable, setBtnDisable] = useState(true);

  const valueCheck = (e) => {
    const value = e.target.value;
    setInput(value);
    
    if(!inputCheck) setInputCheck(true);

    const check = emailValueCheck(input);
    setBtnDisable(!check);


    // if (value.length < 12) {
    //   setNumber(value);
    // }
    // if(value.length > 8){
    //   setBtnDisable(false);
    // }else{
    //   setBtnDisable(true);
    // }
    // if(!inputCheck) setInputCheck(true);
  };

  const onClickHandler = useCallback(() => {
    // const check = emailValueCheck(input);
    // if(!check){
    //   setInputCheck(false);
    //   return false;
    // }

    cerEmailSubmit(input);

  }, [input, cerEmailSubmit]);

  const formSubmit = useCallback(
    (e) => {
      onClickHandler();
      e.preventDefault();
    },
    [onClickHandler]
  );

  return (
    <>
      <Section>
        <div id="contents">
          {/* contents start */}
          <form
            action=""
            method="post"
            className="normal_form"
            onSubmit={formSubmit}
          >
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
                      type="email"
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
          </form>
        </div>
      </Section>

      <Footer>
        <p className="btn50">
          <button
            type="button"
            className="click_show_evt"
            data-link-show="cer_mail"
            onClick={onClickHandler}
            disabled={btnDisable}
          >
            비밀번호 요청
          </button>
        </p>
      </Footer>
    </>
  );
};

export default SerEmail;
