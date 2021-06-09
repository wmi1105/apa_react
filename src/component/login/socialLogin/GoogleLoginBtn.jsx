/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import GoogleLogin from 'react-google-login';

//https://www.npmjs.com/package/react-google-login
const GoogleLoginBtn = ({children, onResponse}) => {

    return(
        <GoogleLogin
            clientId={process.env.REACT_APP_LOGIN_GOOGLE_CLIENTID}
            buttonText="Login"
            onSuccess={(res) => onResponse('google',true, res)}
            onFailure={(res) => onResponse('google',false, res)}
            cookiePolicy={'single_host_origin'}
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
    )
}

export default GoogleLoginBtn;