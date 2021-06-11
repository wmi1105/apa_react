import React from 'react';
import OverAccount from 'component/auth/OverAccount';
import { withRouter } from 'react-router';

const OverAccountContainer = ({history}) => {
    const onJoinOut = () => {
        //joinout dispatch에 정보 입력
        history.push('/join/joinOut')
    }

    const onLogin = () => {
        const path = '/login';
        //로그인 타입이 이메일이면 /login/email로 이동

        history.push(path);
    }

    return(
        <OverAccount 
            info = {{loginType:'email'}}
            onJoinOut = {onJoinOut}
            onLogin = {onLogin}
        />
    )
}

export default withRouter(OverAccountContainer);