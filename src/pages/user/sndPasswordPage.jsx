import React from "react";
import Container from "pages/inc/Container";
import SndPasswordContainer from "container/user/SndPasswordContainer";

const SndPasswordPage = (props) => (
  <Container
    wrap="member"
    header={false}
    footer={false}
    nav={true}
    navOption={{
      headerId: "back",
      headerPath: "back",
      title: "2중 비밀번호 설정",
    }}
  >
    {/* use : setting(번호설정), auth(인증) */}
    <SndPasswordContainer />
  </Container>
);

export default SndPasswordPage;
