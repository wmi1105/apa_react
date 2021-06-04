/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import KakaoLogin from 'react-kakao-login';

const KakaoLoginBtn = ({children, onResponse}) => {
  return (
    <>
        <KakaoLogin 
            token = {process.env.REACT_APP_LOGIN_KAKAO_TOKEN}
            onSuccess = {(res) => onResponse('kakao',true, res)}
            onFail = {(res) => onResponse('kakao',false, res)}
            onLogout = {console.info}
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
    </>
  );
};

export default KakaoLoginBtn;