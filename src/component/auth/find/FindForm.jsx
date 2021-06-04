import React, { useEffect, useMemo, useState } from "react";
import { withRouter } from "react-router";

import Header from "component/inc/Header";
import Modal from "component/inc/Modal";
import SerEmail from "./SerEmail";
import SerPhone from "./SerPhone";
import Confirm from "./Confirm";
import FindModal from "./FindModal";
import EmailCheck from "./EmailCheck";

const FindForm = ({ history, type, onSubmit }) => {
  const [modalTargetId, setModalTargetId] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);
  const [step, setStep] = useState("cerPhone");

  //비밀번호찾기 -> 이메일로 임시 비밀번호 전송
  const cerEmailSubmit = (mail) => {
    const submit = onSubmit('email', {data : mail});
    if(submit.result){
      setModalTargetId('cer_mail');
      setModalVisible(true);
    }
  }

  //이메일 찾기 -> 문자로 인증번호 전송
  const cerPhoneSubmit = (number) => {
    //인증번호 요청
    const submit = onSubmit("phone", { data: number });
    setSubmitResult(submit);
    setModalTargetId("cer_phone");
    setModalVisible(true);
  };


  //이메일찾기 -> 인증번호 확인
  const confirmSubmit = (code) => {
    //인증번호 전송
    onSubmit("confirm", { data: code });

    // if (type === "password") history.push("./passwordCheck");
    // else if (type === "email") history.push("./emailCheck");
  };

  //modal 확인버튼
  const modalOk = () => {
    if(type === 'eamil'){
      setModalVisible(false);
      setStep(submitResult.next);
    }else if(type === 'password'){
      history.push('/login/email')
    }
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
      <div id="wrap" className="member">
        {/* wrap start */}
        {header}

        {type === 'password' && 
          <>
            <SerEmail cerEmailSubmit={cerEmailSubmit} />
          </>
        }

        {type === 'email' && 
          <>
            {step === "cerPhone" && <SerPhone cerPhoneSubmit={cerPhoneSubmit} />}
            {step === "confirm" && (
              <Confirm confirmSubmit={confirmSubmit} submitResult={submitResult} />
            )}
            {step === "email" && <EmailCheck />}    
          </>
        }
        

        <Modal targetId={modalTargetId} visible={modalVisible}>
          <FindModal targetId={modalTargetId} onClickOk={modalOk} />
        </Modal>
      </div>
    </>
  );
};

export default withRouter(FindForm);
