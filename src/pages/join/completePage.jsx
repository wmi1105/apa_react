import React from "react";
import JoinCompleteContainer from "container/join/JoinCompleteContainer";
import Container from "pages/inc/Container";

const CompletePage = (props) => (
  <Container
    wrap="member"
    header={false}
    footer={false}
    nav={true}
    navOption={{
      headerId: "close",
      headerPath: "close",
      title: "회원가입완료",
    }}
  >
    <JoinCompleteContainer />
  </Container>
);

export default CompletePage;
