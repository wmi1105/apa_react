import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import ChangePassword from "component/user/ChangePassword";
import Modal from "component/common/Modal";

const ChangePasswordContainer = ({ history, match }) => {
  const [confirm, setConfirm] = useState(true); //변경완료(true), 변경실패(false)
  const [modalVisible, setModalVisible] = useState(false);

  const onSubmit = () => {
    //변경실패
    // setConfirm(false)

    setModalVisible(true);
  };

  const modalClickOk = () => {
    if(!confirm){
      return false;
    }

    setModalVisible(false);
    history.push("/user/info")
  }

  return (
    <>
      <ChangePassword onSubmit={onSubmit} />

      <Modal
        targetId="password_mod"
        visible={modalVisible}
        cancelBtn={false}
        onClickCancel={null}
        onClickOk={modalClickOk}
      >
        <p>
          <span>
            {confirm
              ? "비밀번호가 변경되었습니다."
              : "이전과 동일한 비밀번호입니다."}
          </span>
        </p>
      </Modal>
    </>
  );
};

export default withRouter(ChangePasswordContainer);
