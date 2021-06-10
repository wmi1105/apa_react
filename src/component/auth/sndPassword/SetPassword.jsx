import FixButton from 'component/inc/FixButton';
import React, { useState } from 'react';

const SetPassword = ({onSubmit}) => {
    const [btnDisable, setBtnDisable] = useState(true);

    const onClickHandler = () => {
    
        onSubmit();
    }
    return(
        
    
        <FixButton
            label="본인인증하기"
            btnDisable={btnDisable}
            onClick={onClickHandler}
        />
        )
};

export default SetPassword;