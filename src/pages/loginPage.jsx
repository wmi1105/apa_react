import React from 'react';
import LoginContainer from 'container/login/LoginContainer';
import Container from 'pages/inc/Container';

const LoginPage = (props) => (
    <Container
        wrap = 'member'
        header = {false}
        footer = {false}
        nav = {true}
        navOption = {{
            headerId:"back",
            headerPath:"back",
            title:"회원가입/로그인"
        }}
    >
        <LoginContainer />
    </Container>
    );

export default LoginPage;