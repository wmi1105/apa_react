/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import NaverLogin from 'react-naver-login'

const NaverLoginBtn = ({children, onResponse}) => {
    
    return(
        <NaverLogin
            clientId = "wmi1105"
            callbackUrl = {process.env.REACT_APP_LOGIN_REDIRECTURL}
            onSuccess = {(res) => onResponse('naver',true, res)}
            onFailure = {(res) => onResponse('naver',false, res)}
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
    )
}

export default NaverLoginBtn;