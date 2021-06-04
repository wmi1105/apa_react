import React from "react";
import { withRouter } from "react-router";
import Footer from "component/inc/Footer";
import Section from "component/inc/Section";

const EmailCheck = ({ history }) => {
  return (
    <>
      <Section>
        <div id="contents">
          <p className="normal_desc">
            회원님의 이메일 주소입니다.
            <br />
            이메일주소 확인 후 로그인 해 주세요.
          </p>
          <ul className="input_view">
            <li>
              <strong>이메일</strong>
              <p>emailid@naver.com</p>
            </li>
          </ul>
        </div>
      </Section>
      <Footer>
        <p className="btn50">
          <button type="button" onClick={() => history.push("/login/email")}>
            로그인 하기
          </button>
        </p>
      </Footer>
    </>
  );
};

export default withRouter(EmailCheck);
