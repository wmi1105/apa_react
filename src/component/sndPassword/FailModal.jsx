import Modal from "component/common/Modal";
import React from "react";

//targetId : pass_error, pass_re
const FailModal = ({ targetId, visible, onClick }) => {

    const onClickNo = () => {

    }

    const onClickOk = () => {

    }

  return (
    <>
      <Modal targetId={targetId} modalClass="confirm" visible={visible}>
        <section className="pop_cont">
          <p>
            {(targetId === "pass_error") &
            (
              <span>
                비밀번호 3회 오류입니다.
                <br />
                휴대폰 인증 후 비밀번호를
                <br />재 설정해 주세요.
              </span>
            )}
            {targetId === "pass_re" && (
              <span>
                휴대폰 인증 후 비밀번호를
                <br />재 설정하시겠습니까?
              </span>
            )}
          </p>
        </section>

        <ul className="btns">
          <li>
            <p className="btn">
              <button type="button" className="pop_confirm" onClick={onClickNo}>
                아니오
              </button>
            </p>
          </li>
          <li>
            <p className="btn">
              <button type="button" className="" onClick={onClickOk}>
                예
              </button>
            </p>
          </li>
        </ul>
      </Modal>
    </>
  );
};

export default FailModal;
