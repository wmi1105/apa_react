import React from "react";
import FindPasswordContainer from "container/find/FindPasswordContainer";
import Container from "pages/inc/Container";

const PasswordPage = (props) => (
  <Container
    wrap="member"
    header={false}
    footer={false}
    nav={true}
    navOption={{
      headerId: "back",
      headerPath: "back",
      title: "비밀번호 찾기",
    }}
  >
    <FindPasswordContainer />
  </Container>
);

export default PasswordPage;
