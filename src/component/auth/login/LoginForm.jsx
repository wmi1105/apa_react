import React from "react";

import Top from "../../inc/Footer";
import Header from "../../inc/Header";
import Login from "./Login";
import LoginMail from "./LoginMail";
import Sleep from "./Sleep";

const LoginForm = ({ page, onLoginSubmit, onResult }) => {
  const onLogin = (value) => {
    onLoginSubmit(value);
  };


  return (
    <>
      <Top />
      <div id="wrap" className="member">

        {page === "" && onResult !== "sleep" && (
          <>
            <Header headerType="back">회원가입/로그인</Header>
            <Login />
          </>
        )}
        {page === "email" && (onResult !== 'sleep') && (
          <>
            <Header headerType="close">이메일 로그인</Header>
            <LoginMail onLogin={onLogin}/>
          </>
        )}
        {onResult === "sleep" && (
          <>
            <Header headerType="close">휴면게정안내</Header>
            <Sleep />
          </>
        )}
      </div>
    </>
  );
};

export default React.memo(LoginForm);
