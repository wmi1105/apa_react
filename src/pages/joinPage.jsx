import React from "react";
import JoinContainer from "container/join/JoinContainer";
import Container from "./inc/Container";

const JoinPage = (props) => (
  <Container
    wrap="member"
    header={false}
    footer={false}
    nav={true}
    navOption={{
      headerId: "back",
      headerPath: "back",
      title: "회원가입",
    }}
  >
    <JoinContainer />
  </Container>
);

export default JoinPage;
