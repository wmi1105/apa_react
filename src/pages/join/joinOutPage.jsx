import React from "react";
import JoinOutContainer from "container/join/JoinOutContainer";
import Container from "pages/inc/Container";

const joinOutPage = (props) => (
  <Container
    wrap="member"
    header={false}
    footer={false}
    nav={true}
    navOption={{
      headerId: "close",
      headerPath: "close",
      title: "회원탈퇴",
    }}
  >
    <JoinOutContainer />
  </Container>
);

export default joinOutPage;
