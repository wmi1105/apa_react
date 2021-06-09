import React from "react";

import LoginMailContainer from "container/login/LoginMailContainer";
import Container from "pages/inc/Container";

const EmailPage = (props) => (
  <Container
    wrap="member"
    header={false}
    footer={false}
    nav={true}
    navOption={{
      headerId: "close",
      headerPath: "close",
      title: "이메일 로그인",
    }}
  >
      <LoginMailContainer />
      </Container>
);

export default EmailPage;
