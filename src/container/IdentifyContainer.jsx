import React from 'react';
import IentifyForm from 'component/auth/identification/IentifyForm';

const IdentifyContainer = ({history, match}) => {

    const setCheck = () => {

        //인증완료
        
        doneCheck();

    }


    const doneCheck = () => {
        //정상
        history.push('/join/info')

        //중복계정
        history.push('/join/overAccount')
    }
    

    return(
        <IentifyForm/>
    )
}

export default IdentifyContainer;