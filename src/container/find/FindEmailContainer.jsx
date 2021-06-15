import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import EmailCheck from "component/auth/find/EmailCheck";
import Modal from "component/common/Modal";

const FindEmailContainer = ({ history }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onClickHandler = () => {
    setModalVisible(true)
  };

  const modalClickOk = () => {
    setModalVisible(false);
    history.push("/login/mail");
  };

  return (
    <>
      <EmailCheck onClick={onClickHandler} />

      <Modal
        targetId="cer_phone2"
        visible={modalVisible}
        onClickOk={modalClickOk}
      >
        <p>
          <span>인증되었습니다.</span>
        </p>
      </Modal>
    </>
  );
};

export default withRouter(FindEmailContainer);
