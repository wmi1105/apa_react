import React from 'react';
import IentifyForm from 'component/auth/identification/IentifyForm';

const IdentifyContainer = ({history, match}) => {

    const type = match.params.type;
    // type = join : 회원가입 중 인증
    // type = userPassword : 비밀번호 변경 중 인증

    const setCheck = () => {

        //인증완료
        
        doneCheck();

    }


    const doneCheck = () => {
        //가입 정상
        history.push('/join/info')

        //가입 중복계정
        history.push('/join/overAccount')

        //전화번호 변경
        //history.push(???)
    }
    

    return(
        <IentifyForm setCheck={setCheck}/>
    )
}

export default IdentifyContainer;