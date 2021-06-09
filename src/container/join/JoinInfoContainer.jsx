import JoinInfo from 'component/join/JoinInfo';
import React from 'react';
import { withRouter } from 'react-router';

const JoinInfoContainer = (props) => {
    const {history} = props;

    const onSubmit = () => {
        history.push('/join/complete');
    }

    return(
        <>
            <JoinInfo onSubmit={onSubmit}/>
        </>
    )
}

export default withRouter(JoinInfoContainer);