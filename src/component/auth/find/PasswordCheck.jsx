import React from "react";
import { withRouter } from "react-router";
import Section from "component/common/Section";
import FixButton from "component/common/FixButton";

const PasswordCheck =({history}) => {
  return (
    <>
    <Section>
    <div id="contents">
      <p className="normal_desc">
        개인정보보호를 위해 비밀번호 뒷자리 3자리는 <br />
        숨김 처리 되었습니다.
      </p>
      <ul className="input_view">
        <li>
          <strong>인증번호</strong>
          <p>123456789***</p>
        </li>
      </ul>
    </div>
    </Section>

    <FixButton
        label="로그인 하기"
        btnDisable={false}
        onClick={() => history.push("/login/email")}
      />
    </>
  );
};

export default withRouter(PasswordCheck);
