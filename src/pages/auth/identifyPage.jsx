import IdentifyContainer from "container/auth/IdentifyContainer";

import Container from "pages/inc/Container";
import React from "react";

const IdentifyPage = (props) => (
  <Container
    wrap="member"
    header={false}
    footer={false}
    nav={true}
    navOption={{
      headerId: "back",
      headerPath: "back",
      title: "본인인증하기",
    }}
  >
    <IdentifyContainer />
  </Container>
);

export default IdentifyPage;
