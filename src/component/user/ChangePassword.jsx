import React from "react";
import Footer from "component/inc/Footer";
import Section from "component/inc/Section";

const ChangePassword = (props) => {
  return (
    <>
      <Section>
      <div id="contents">
        <form action="" method="post" className="normal_form">
          <p className="normal_desc">
            현재 비밀번호를 입력 후<br />
            새로운 비밀번호를 등록하여 주세요.
          </p>
          <ul className="inputs write">
            <li>
              <p className="no_title">
                <label>
                  <input
                    type="password"
                    className="pass_key"
                    title="현재 비밀번호 입력"
                    placeholder="현재 비밀번호(영문+숫자+특수문자 8~16자)"
                    readOnly
                  />
                </label>
              </p>
              <p className="info alert">8~16자리 이상 입력해주세요.</p>
            </li>
            <li>
              <p className="no_title">
                <label>
                  <input
                    type="password"
                    className="pass_key pass_prev"
                    title="현재 비밀번호 입력"
                    placeholder="새 비밀번호(영문+숫자+특수문자 8~16자)"
                    readOnly
                  />
                </label>
              </p>
              <p className="info alert">8~16자리 이상 입력해주세요.</p>
            </li>
            <li>
              <p className="no_title">
                <label>
                  <input
                    type="password"
                    className="pass_key_a"
                    title="현재 비밀번호 입력"
                    placeholder="새 비밀번호 확인(영문+숫자+특수문자 8~16자)"
                    readOnly
                  />
                </label>
              </p>
              <p className="info alert">비밀번호가 일치하지 않습니다.</p>
            </li>
          </ul>
        </form>
      </div>
      </Section>

      <Footer>
        <p className="btn50"><button type="button" disabled>저장하기</button></p>
      </Footer>
    </>
  );
};

export default ChangePassword;
