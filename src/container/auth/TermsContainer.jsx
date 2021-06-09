import React from 'react';
import Terms from 'component/terms/Terms';
import { withRouter } from 'react-router';

const TermsContainer = ({onItemVisible, history}) => {
    
    const termSubmit = (value) => {
        history.push('/auth/identify');   //약관동의 후 본인인증 페이지로 이동
    }

    return(
        <Terms 
            onItemVisible = {onItemVisible}
            onSumbit={termSubmit}
        />
    )
}

export default withRouter(TermsContainer);