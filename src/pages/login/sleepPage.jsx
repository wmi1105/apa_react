import React from "react";
import LoginSleepContainer from "container/login/LoginSleepContainer";
import Container from "pages/inc/Container";

const SleepPage = (props) => (
  <Container
    wrap="member"
    header={false}
    footer={false}
    nav={true}
    navOption={{
      headerId: "close",
      headerPath: "close",
      title: "휴면계정안내",
    }}
  >
    <LoginSleepContainer />
  </Container>
);

export default SleepPage;
