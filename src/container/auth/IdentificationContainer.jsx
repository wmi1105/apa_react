import React, { useEffect, useState } from "react";
import { redirectUrl } from "js/common";
import PassInfo from "component/auth/identification/PassInfo";
import SerPhone from "component/auth/identification/SerPhone";
import Confirm from "component/auth/identification/Confirm";
import { withRouter } from "react-router-dom";
import CheckModal from "component/auth/identification/checkModal";

const IdentificationContainer = ({ history, match }) => {
  const use = match.params.use;
  const redirect = redirectUrl(match.params.redirect);

  const [step, setStep] = useState("");
  const [modalTarget, setModalTarget] = useState("cer_phone");
  const [modalVisible, setModalVisible] = useState(false);

  const onClickPass = () => {
    //pass 인증 완료
    // history.push('/join/info')

    //가입 중복계정
    // history.push('/auth/overAccount')

    //전화번호 변경
    //history.push(???)

    console.log("redirect: " + redirect);
  };

  const onClickPhone = () => {
    if (step === "serPhone") {
      //인증코드 전송
      setModalTarget("cer_phone");
      setModalVisible(true);
    } else if (step === "confirm") {
      //인증
      const check = true;
      if (!check) {
        //인증실패
        return false;
      }

      setModalTarget("cer_phone2");
      setModalVisible(true);
    }
  };

  const modalClickOk = () => {
    if (modalTarget === "cer_phone") setStep("confirm");
    else if (modalTarget === "cer_phone2") {
      history.push(redirect);
    }
    setModalVisible(false);
  };

  useEffect(() => {
    if (use === "phone") {
      setStep("serPhone");
    }
  }, [use]);

  return (
    <>
      {use === "pass" && <PassInfo onClick={onClickPass} />}
      {use === "phone" && (
        <>
          {step === "serPhone" && <SerPhone onClick={onClickPhone} />}
          {step === "confirm" && <Confirm onClick={onClickPhone} />}
        </>
      )}

      <CheckModal
        targetId={modalTarget}
        visible={modalVisible}
        onClickOk={modalClickOk}
      />
    </>
  );
};

export default withRouter(IdentificationContainer);
