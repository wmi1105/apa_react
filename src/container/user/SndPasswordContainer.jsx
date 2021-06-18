import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Info from "component/user/sndPassword/Info";
import PasswordFailModal from "component/user/sndPassword/PasswordFailModal";
import SetPassword from "component/user/sndPassword/SetPassword";
import { redirectUrl } from "js/common";

const SndPasswordContainer = ({ history, match, location }) => {

  console.log(history);
  console.log(match);
  console.log(location);

  const use = match.params.use;
  const redirect = redirectUrl(match.params.redirect);

  const [infoCheck, setInfoCheck] = useState(false);
  const [step, setStep] = useState("");
  const [pin, setPin] = useState({
    setting: "",
    confirm: "",
  });
  const [failCount, setFailCount] = useState(0);

  const onSubmit = (key) => {
    if (use === "auth") {
      //use === auth
      //비밀번호 인증

      //비밀번호 인증 실패했을 때
        // setFailCount(failCount + 1);
        // return false;


      //비밀번호 인증 성공했을 때
      history.push(redirect);
    } else {
      keySet(key);
    }
  };

  const keySet = (key) => {
    if (pin.setting === "") {
      setPin({ set: key, confirm: "" });
      setStep("confirm");
    } else {
      const check = pin.set === key;
      if (check) {
        //비밀번호 저장
        if(use === 'setting'){
          //비밀번호 초기등록
        }else if(use === 'reset'){
          //비밀번호 변경
        }
        
        history.push(redirect);
      }
    }
  };

  useEffect(() => {
    if (use === "auth") setStep("auth");
    else {
      setStep("setting");
    }

    if (use !== "setting") setInfoCheck(true);
  }, [use]);

  return (
    <>
      {/* 처음 회원가입일 경우에만 노출 */}
      {!infoCheck && <Info onClick={() => setInfoCheck(true)} />}

      {infoCheck && (
        <SetPassword step={step} onSubmit={onSubmit} failCount={failCount} />
      )}

    {/* 비밀번호 일증 실패 시 문자인증 후 비밀번호 재설정 */}
      <PasswordFailModal
        visible={failCount === 3}
        onClickOk={() => history.push("/auth/identification/phone")}
        onClickCancel={() => setFailCount(0)}
      />
    </>
  );
};

export default withRouter(SndPasswordContainer);