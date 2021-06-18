import Modal from 'component/common/Modal';
import React from 'react';

const JoinOutModal = (props) => {

    return(
        <>
            <Modal 
                targetId = "joinout"
                modalClass = "confirm"
                visible = {props.visible}
                onClickOk={props.onClickOk}
            >
                <section className="pop_cont">
              <p>
                  <span>회원 탈퇴가 완료되었습니다.</span>
              </p>
            </section>

            <ul className="btns">
              <li>
                <p className="btn">
                  <button type="button" onClick={props.onClickOk}>
                    확인
                  </button>
                </p>
              </li>
            </ul>
            </Modal>
        </>      
    )
};

export default JoinOutModal;