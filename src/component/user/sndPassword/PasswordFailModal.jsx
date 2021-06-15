import Modal from "component/common/Modal";
import React, { useState } from "react";

const PasswordFailModal = ({ visible, onClickCancel, onClickOk}) => {

  return (
    <Modal
      targetId="pass_re"
      visible={visible}
      cancelBtn={true}
      onClickCancel={onClickCancel}
      onClickOk={onClickOk}
    >
      <p>
        <span>
        비밀번호 3회 오류입니다.
        <br/>
          휴대폰 인증 후 비밀번호를
          <br />재 설정하시겠습니까?
        </span>
      </p>
    </Modal>
  );
};

export default PasswordFailModal;
