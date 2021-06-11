import React, { useState } from 'react';
import { withRouter } from 'react-router';
import JoinOut from 'component/join/JoinOut';
import JoinOutModal from 'component/join/JoinOutModal';

const JoinOutContainer = ({history}) => {
    const [modalVisible, setModalVisible] = useState(false);

    //joinout redux에서 
    //로그인 후 탈퇴인지, 
    //로그인 전 pass후 탈퇴인지 확인
    
    const onSubmit = () => {
        //dispatch

        setModalVisible(true);        
    }

    const onModalClick = () => {
        setModalVisible(false);
        history.push('/home')
    }

    return(
        <>
            <JoinOut 
                onSumbit = {onSubmit}
            />

            <JoinOutModal 
                visible = {modalVisible}
                onClickOk={onModalClick}
            />
        </>
    )
}

export default withRouter(JoinOutContainer);