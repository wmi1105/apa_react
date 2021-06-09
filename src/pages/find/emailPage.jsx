import React from 'react';
import FindEmailContainer from 'container/find/FindEmailContainer';
import Container from 'pages/inc/Container';

const EmailPage = (props) => (
    <Container
        wrap="member"
        header={false}
        footer={false}
        nav={true}
        navOption={{
          headerId: "back",
          headerPath: "back",
          title: "이메일 찾기",
        }}
      >
        <FindEmailContainer />
        </Container>
    );

export default EmailPage;