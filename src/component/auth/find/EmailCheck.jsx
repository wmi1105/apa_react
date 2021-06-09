import React from "react";
import { withRouter } from "react-router";

import Section from "component/inc/Section";
import FixButton from "component/inc/FixButton";

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
      
      <FixButton
        label="로그인 하기"
        btnDisable={false}
        onClick={ history.push("/login/email")}
        btnProps={{}}
      />
    </>
  );
};

export default withRouter(EmailCheck);
