import Sleep from 'component/login/Sleep';
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const LoginSleepContainer = ({history}) => {

    const [info, setInfo] = useState(null);

    const onClick = () => {
        history.push('/auth/identify/.user.info')
    }

    return(
        <>
        <Sleep info={info} onClick={onClick}/>
        </>
    )
}

export default withRouter(LoginSleepContainer);