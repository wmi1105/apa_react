import Info from 'component/auth/sndPassword/Info';
import SetPassword from 'component/auth/sndPassword/SetPassword';
import React, { useState } from 'react';

const SndPasswordContainer = (props) => {
    const [infoCheck, setInfoCheck] = useState(false);

    const onSubmit = () => {
        
    }
    return(
        <>
        {/* 처음 회원가입일 경우에만 노출 */}
        {!infoCheck && <Info onClick={() => setInfoCheck(true)}/>}

        {infoCheck && <SetPassword onSumbit = {onSubmit} />}
        </>

        
)
};

export default SndPasswordContainer;