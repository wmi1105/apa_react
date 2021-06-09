import React from 'react';
import JoinForm from 'component/join/JoinForm';

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