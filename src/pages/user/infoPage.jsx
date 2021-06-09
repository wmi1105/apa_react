import UserInfoContainer from "container/user/UserInfoContainer";
import Container from "pages/inc/Container";
import React from "react";

const InfoPage = (props) => (
  <Container
    wrap="member"
    header={false}
    footer={false}
    nav={true}
    navOption={{
      headerId: "back",
      headerPath: "back",
      title: "나의 정보",
    }}
  >
    <UserInfoContainer />
  </Container>
);

export default InfoPage;
