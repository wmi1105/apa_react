import React, { useEffect, useState } from 'react';
import LoginForm from 'component/auth/login/LoginForm';

const LoginContainer = ({history, match}) => {
    const [loginType, setLoginType] = useState('');
    const [loginResult, setLoginResult] = useState('');

    const onLoginSubmit = (val) => {
        console.log(val)
        
        const login = false;
        if(login){
            setLoginResult('success');
            history.push('/index');
        }
        else if(!login){
            //실패
            setLoginResult('fail');
        }else if(login){
            setLoginResult('sleep');
        }

        setLoginResult('sleep');
            
    }

    useEffect(() => {
        const type = Object.keys(match.params).length === 0?
         "" : match.params.type;
        setLoginType(type);
    }, [match])

    return(
        <>
            <LoginForm 
                page = {loginType}
                onLoginSubmit = {onLoginSubmit}
                onResult = {loginResult}
            />
      </>
    )
}

export default LoginContainer;