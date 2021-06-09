import React from "react";

import JoinInfoContainer from "container/join/JoinInfoContainer";
import Container from "pages/inc/Container";

const InfoPage = (props) => (
  <Container
    wrap="member"
    header={false}
    footer={false}
    nav={true}
    navOption={{
      headerId: "back",
      headerPath: "back",
      title: "회원정보 입력",
    }}
  >
    <JoinInfoContainer />
  </Container>
);

export default InfoPage;
