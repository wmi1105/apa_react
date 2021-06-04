import React from 'react';
import AccountForm from 'component/user/AccountForm';
import UserForm from 'component/user/UserForm'

const UserContainer = ({history, match}) => {

    const type = match.params.type;
    const page = (match.params.page)?match.params.page: '';

    const modUserInfo = (type, param) => {
        switch (type) {
            case 'address':
                console.log(param)
                break;
        
            default:
                break;
        }
    }

    return(
        <>
        {type === 'info' && <UserForm page={page} modUserInfo={modUserInfo}/>}
        {type === 'account' && <AccountForm page={page} />}
        </>
    )
}

export default UserContainer;
