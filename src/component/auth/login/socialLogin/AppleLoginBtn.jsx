/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import AppleLogin from 'react-apple-login';

//https://www.npmjs.com/package/react-apple-login
//https://patelmayankce.github.io/react-apple-login/
const AppleLoginBtn = ({children, onResponse}) => {
  return (
    <AppleLogin
      clientId={process.env.REACT_APP_LOGIN_APPLE_CLIENTID}
      redirectURI={process.env.REACT_APP_LOGIN_REDIRECTURL}
      render={({ onClick }) => {
        return (
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onClick();
            }}
          >
            {children}
          </a>
        )}
      }
    />
  );
};

export default AppleLoginBtn;
