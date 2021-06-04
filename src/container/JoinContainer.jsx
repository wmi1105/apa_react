import React from 'react';
import JoinForm from 'component/auth/join/JoinForm';

const JoinContainer = ({history, match}) => {

    return(
        <>
            <JoinForm 
                type = {(match.params.type)?match.params.type:''}
                page = {match.params.page}
            />
        </>
    )
}

export default JoinContainer;