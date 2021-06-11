import React from 'react';
import Identify from 'component/auth/identification/Identify';

const IdentifyContainer = () => {

    const setCheck = () => {

        //인증완료
        
        doneCheck();

    }


    const doneCheck = () => {
        //가입 정상
        // history.push('/join/info')

        //가입 중복계정
        // history.push('/auth/overAccount')

        //전화번호 변경
        //history.push(???)
    }
    

    return(
        <>
        <Identify setCheck={setCheck}/>
        </>
    )
}

export default IdentifyContainer;