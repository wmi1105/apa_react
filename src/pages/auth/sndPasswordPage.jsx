import React from 'react';
import Container from 'pages/inc/Container';
import SndPasswordContainer from 'container/auth/SndPasswordContainer';

const SndPasswordPage = (props) => (
    <Container
        wrap="member"
        header={false}
        footer={false}
        nav={true}
        navOption={{
        headerId: "back",
        headerPath: "back",
        title: "2차 비밀번호 설정",
        }}
    >
        <SndPasswordContainer />
    </Container>     
    );

export default SndPasswordPage;