import React, { useEffect, useMemo, useState } from "react";
import { withRouter } from "react-router";

import Top from "../../inc/Footer";
import Header from "../../inc/Header";
import SerPhone from "./SerPhone";
import Confirm from "./Confirm";

import FindModal from "./FindModal";
import EmailCheck from "./EmailCheck";
import PasswordCheck from "./PasswordCheck";
import Modal from "../../inc/Modal";

const FindForm = ({ type, onSubmit, submitResult }) => {
  const [modalTargetId, setModalTargetId] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [step, setStep] = useState("cerPhone");

  const cerPhoneSubmit = (number) => {
    //인증번호 요청
    onSubmit("phone", { data: number });
    setModalTargetId("cer_phone");
    setModalVisible(true);
  };

  const confirmSubmit = (code) => {
    //인증번호 전송
    onSubmit("confirm", { data: code });

    // if (type === "password") history.push("./passwordCheck");
    // else if (type === "email") history.push("./emailCheck");
  };

  const modalOk = () => {
    setModalVisible(false);
    setStep(submitResult.next);
  };

  const header = useMemo(() => {
    const title = type === "email" ? "이메일 찾기" : "비밀번호 찾기";
    return <Header headerType="back">{title}</Header>;
  }, [type]);

  useEffect(() => {
    const data = { ...submitResult };
    if (data.result) {
      const modalId = data.type === "phone" ? "cer_phone" : "cer_phone2";
      setModalTargetId(modalId);
      setModalVisible(true);
    }
  }, [submitResult]);

  return (
    <>
      <Top />

      <div id="wrap" className="member">
        {/* wrap start */}
        {header}

        {/* container start */}
        {step === "cerPhone" && <SerPhone cerPhoneSubmit={cerPhoneSubmit} />}
        {step === "confirm" && (
          <Confirm confirmSubmit={confirmSubmit} submitResult={submitResult} />
        )}
        {step === "password" && <PasswordCheck />}
        {step === "email" && <EmailCheck />}

        <Modal targetId={modalTargetId} visible={modalVisible}>
          <FindModal targetId={modalTargetId} onClickOk={modalOk} />
        </Modal>
      </div>
    </>
  );
};

export default withRouter(FindForm);
