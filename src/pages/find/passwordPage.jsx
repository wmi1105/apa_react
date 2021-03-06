import React from "react";
import Container from "pages/inc/Container";
import FindPasswordContainer from "container/find/FindPasswordContainer";

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

export default  PasswordPage;