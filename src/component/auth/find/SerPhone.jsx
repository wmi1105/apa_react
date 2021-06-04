import React, { useCallback, useState } from "react";
import { phoneValueCheck } from "js/common";
import Footer from "component/inc/Footer";
import Section from "component/inc/Section";

const SerPhone = ({ cerPhoneSubmit }) => {
  const [number, setNumber] = useState("");
  const [inputCheck, setInputCheck] = useState(true);
  const [btnDisable, setBtnDisable] = useState(true);

  const numberValueCheck = (e) => {
    const value = e.target.value;
    if (value.length < 12) {
      setNumber(value);
    }

    if(value.length > 8){
      setBtnDisable(false);
    }else{
      setBtnDisable(true);
    }

    if(!inputCheck) setInputCheck(true);
  };

  const onClickHandler = useCallback(() => {
    const typeCheck = phoneValueCheck(number);
    if(!typeCheck){
      setInputCheck(false);
      return false;
    }

    cerPhoneSubmit(number);
  }, [number, cerPhoneSubmit])

  const formSubmit = useCallback((e) => {
    onClickHandler();
    e.preventDefault();
  }, [onClickHandler]);

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
              휴대폰 인증 진행 후 사용중인 비밀번호를
              <br />
              확인하실 수 있습니다.
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
                {!inputCheck && (
                  <p className="info">잘못된 휴대폰 번호입니다.</p>
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
            data-link-show="cer_phone"
            onClick={onClickHandler}
            disabled={btnDisable}
          >
            {" "}
            인증번호 요청
          </button>
        </p>
      </Footer>
    </>
  );
};

export default SerPhone;
