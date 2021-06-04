import React, { useCallback, useEffect, useState } from "react";
import Footer from "component/inc/Footer";
import Section from "component/inc/Section";

const Confirm = ({ confirmSubmit, submitResult }) => {
  const [number, setNumber] = useState("");
  const [btnDisable, setBtnDisable] = useState(true);
  const [inputCheck, setInputCheck] = useState(true);

  const valueCheck = (e) => {
    const value = e.target.value;
    if (value.length < 5) {
      setNumber(value);
      
      if(value.length === 4) setBtnDisable(false);
      else setBtnDisable(true)
    }

    

    if(!inputCheck) setInputCheck(true);
  };

  const onClickHandler = useCallback(() => {
    confirmSubmit(number);
  }, [number, confirmSubmit])

  const formSubmit = useCallback((e) => {
    onClickHandler();
    e.preventDefault();
  }, [onClickHandler]);

  useEffect(() => {
    if(submitResult && submitResult.type === 'confirm'){
      const result = submitResult.result;
      setInputCheck(result);
    }
  }, [submitResult])

  return (
    <>
      <Section>
        <div id="contents">
          <form action="" method="post" className="normal_form" onSubmit={formSubmit}>
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
                      onChange={valueCheck}
                      maxLength={4}
                      // readOnlys
                    />
                  </label>
                </p>
                {!inputCheck && (
                  <p className="info">인증번호가 일치하지 않습니다.</p>
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
            data-link-show="cer_phone2"
            disabled={btnDisable}
            onClick={onClickHandler}
          >
            인증하기
          </button>
        </p>
      </Footer>
    </>
  );
};

export default Confirm;
