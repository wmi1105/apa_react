import React from 'react';
import { withRouter } from 'react-router';
import Modal from 'component/inc/Modal';
import Terms from 'component/terms/Terms';


const TermsContainer = ({history, onItemVisible, clickNav, onClickNav}) => {
    
    const termSubmit = (value) => {
        history.push('/auth/identify');   //약관동의 후 본인인증 페이지로 이동
    }

    return(
        <>
        <Terms 
            onItemVisible = {onItemVisible}
            onSumbit={termSubmit}
        />

        <Modal
            targetId = 'phone_mod'
            visible = {clickNav}
            cancelBtn = {true}
            onClickCancel = {() => onClickNav(false)}
            onClickOk = {() => history.push('/login')}
        >
            가입이 완료되지 않았습니다. <br/>
            가입을 취소하시겠습니까?
        </Modal>
        </>
    )
}

export default withRouter(TermsContainer);