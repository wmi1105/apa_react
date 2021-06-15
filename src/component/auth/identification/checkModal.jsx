import React from "react";
import Modal from "component/common/Modal";

const CheckModal = ({ targetId, visible, onClickOk }) => {
  return (
    <>
      <Modal
        targetId={targetId}
        visible={visible}
        cancelBtn={false}
        onClickCancel={null}
        onClickOk={onClickOk}
      >
        <p>
          {targetId === "cer_mail" && (
            <span>
              이메일로 임시비밀번호가
              <br />
              발송되었습니다.
            </span>
          )}
          {targetId === "cer_phone" && (
            <span>
              휴대폰으로 인증번호가 전송되었습니다.
              <br />
              인증번호를 입력해주세요.
            </span>
          )}
          {targetId === "cer_phone2" && <span>인증되었습니다.</span>}
        </p>
      </Modal>
    </>
  );
};

export default CheckModal;
