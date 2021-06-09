/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import KakaoLogin from 'react-kakao-login';

const KakaoLoginBtn = ({children, onResponse}) => {

  const response = (e) => {
    console.log(e)
  }

  return (
    <>
        <KakaoLogin 
            token = {process.env.REACT_APP_LOGIN_KAKAO_TOKEN}
            // onSuccess = {(res) => onResponse('kakao',true, res)}
            // onFail = {(res) => onResponse('kakao',false, res)}
            onSuccess = {response}
            onFail = {response}
            onLogout = {console.info}
            render={({ onClick }) => {
                return (
                  <button
                  type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      onClick();
                    }}
                  >
                    {children}
                  </button>
                )}
            }
         />
    </>
  );
};

export default KakaoLoginBtn;