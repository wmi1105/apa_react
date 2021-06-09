import React from 'react';
import Container from 'pages/inc/Container';
import JoinOverAccountContainer from 'container/join/JoinOverAccountContainer';

const OverAccount = (props) => (
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
    <JoinOverAccountContainer />
  </Container>
    );

export default OverAccount;