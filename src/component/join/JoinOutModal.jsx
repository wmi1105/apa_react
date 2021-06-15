import Modal from 'component/common/Modal';
import React from 'react';

const JoinOutModal = (props) => {

    return(
        <>
            <Modal 
                targetId = ""
                visible = {props.visible}
                cancelBtn = {false}
                onClickCancel = {null}
                onClickOk={props.onClickOk}
            >
                회원탈퇴가 완료되었습니다.   
            </Modal>
        </>      
    )
};

export default JoinOutModal;