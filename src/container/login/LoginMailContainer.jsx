import LoginMail from "component/login/LoginMail";
import { redirectUrl } from "js/common";
import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";

const LoginMailContainer = ({ history, match }) => {

  const onLogin = (value) => {
    
    linkPush();
  };

  const linkPush = useCallback(() => {
    let redirect = "/home";
    if (match.params.redirect) {
      redirect = redirectUrl(match.params.redirect);
    }
    history.push(redirect);
  }, [])

  return <LoginMail onLogin={onLogin} />;
};

export default withRouter(LoginMailContainer);
