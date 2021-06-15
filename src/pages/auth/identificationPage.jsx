import React from "react";
import Container from "pages/inc/Container";
import IdentificationContainer from "container/auth/IdentificationContainer";


const IdentificationPage = (props) => (
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
    <IdentificationContainer />
  </Container>
);

export default IdentificationPage;
