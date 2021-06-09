import React from 'react';
import Container from 'pages/inc/Container';
import ChangePasswordContainer from 'container/user/ChangePasswordContainer';


const changePasswordPage = (props) => (
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
    <ChangePasswordContainer />
  </Container>      
    );

export default changePasswordPage;