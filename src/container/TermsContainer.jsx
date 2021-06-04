import React from 'react';
import TermsFrom from '../component/terms/TermsFrom';

const TermsContainer = ({history}) => {


    const termSubmit = (value) => {
        history.push('/identify');   //약관동의 후 본인인증 페이지로 이동
    }

    return(
        <TermsFrom 
        onSumbit={termSubmit}
        />
    )
}

export default TermsContainer;