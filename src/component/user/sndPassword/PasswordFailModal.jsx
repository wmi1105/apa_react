import React from "react";
import Modal from "component/common/Modal";

const PasswordFailModal = ({ visible, onClickCancel, onClickOk }) => {
  return (
    <Modal
      targetId="pass_re"
      modalClass="confirm"
      visible={visible}
    >
      <section className="pop_cont">
        <p>
          <span>
            비밀번호 3회 오류입니다.
            <br />
            휴대폰 인증 후 비밀번호를
            <br />재 설정하시겠습니까?
          </span>
        </p>
      </section>

      <ul className="btns">
        <li>
          <p className="btn">
            <button
              type="button"
              className="pop_confirm"
              onClick={onClickCancel}
            >
              취소
            </button>
          </p>
        </li>
        <li>
          <p className="btn">
            <button type="button" onClick={onClickOk}>
              확인
            </button>
          </p>
        </li>
      </ul>
    </Modal>
  );
};

export default PasswordFailModal;
