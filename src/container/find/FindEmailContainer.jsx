import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import EmailCheck from "component/auth/find/EmailCheck";
import Modal from "component/common/Modal";

const FindEmailContainer = ({ history }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onClickHandler = () => {
    setModalVisible(true);
  };

  const modalClick = () => {
    setModalVisible(false);
    history.push("/login/mail");
  };

  return (
    <>
      <EmailCheck onClick={onClickHandler} />

      <Modal targetId="cer_phone2" modalClass="confirm" visible={modalVisible}>
        <section className="pop_cont">
          <p>
            <span>인증되었습니다.</span>
          </p>
        </section>

        <ul className="btns">
          <li>
            <p className="btn">
              <button type="button" onClick={modalClick}>
                확인
              </button>
            </p>
          </li>
        </ul>
      </Modal>
    </>
  );
};

export default withRouter(FindEmailContainer);
