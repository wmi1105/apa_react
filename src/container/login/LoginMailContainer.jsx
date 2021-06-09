import LoginMail from 'component/login/LoginMail';
import React from 'react';

const LoginMailContainer = (props) => {

    const onLogin = (value) => {
        // onLoginSubmit(value);
      };

    return(
        <LoginMail onLogin={onLogin}/>
    )
}

export default LoginMailContainer;