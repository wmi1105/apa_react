import React, { useCallback, useEffect, useState } from "react";
import MakePassEnd from "component/sndPassword/MakePassEnd";
import PinPad from "component/sndPassword/PinPad";
import SetInfo from "component/sndPassword/SetInfo";
import FailModal from "./FailModal";

/* 
<SecondPassword 
        use = 'setting'
        visible = {true}
        onClick = {null}
      />
*/

/* 
  const onClick = (val) => {
    if(val === 'back'){
      history.goBack();
    }
    if(val === 'done'){
      //인증완료, 모달닫기
      setPinCheck(true);
    }
  }
*/

const block = {
  display: "block",
  opacity: 1,
};

//비밀번호 변경일 떄 use = reset
const SecondPassword = ({ use, visible, onClick }) => {
  const [step, setStep] = useState("");
  const [modalId, setModalId] = useState("");
  const [failCount, setFailCount] = useState(0);
  const [value, setValue] = useState({
    pin: "",
    pinCheck: "",
  });

  const onClickInfo = () => {
    if(step === 'setting') setStep("pin");
    else if(step === 'reset') modalId('pass_re')
  }

  const pinPadClickHandler = useCallback(
    (val) => {
      switch (step) {
        case "pin":
          setValue({ ...value, pin: val });

          setStep("pinCheck");
          break;

        case "pinCheck":
          //pin check
          //setFailCount(failCount+1); return false;


          if(failCount === 3){
              setModalId("pass_error");
              return false;
          }
          setValue({ ...value, pinCheck: val });
          break;

        default:
          break;
      }
    },
    [value, step]
  );

    const onClickModal = (type) => {
        setModalId('')
    }

  useEffect(() => {
    /* 
        pin이 등록되어 있는지 확인.
        없으면 
            step = 'setting' -> 'pin' -> 'pinCheck' -> 'end'
            
        있으면 
            step = 'auth' 

        변경이면
            step = 'reset' -> 'pin' -> 'pinCheck' -> 'end'
    */
    setStep("setting");
    if (use === "reset") setStep("reset");
  }, [use, visible]);

  return (
    <>
      <div
        id="dpass_check"
        className="popup full_pop member"
        style={visible ? block : {}}    //fadeout없이 스타일 바로 적용
      >
        {(step === "setting" || step === "reset") && (
          <SetInfo
            step={step}
            onClickBtn={onClickInfo}
            onClickBack={() => onClick("close")}
          />
        )}
        {(step === "pin" || step === "pinCheck") && (
          <PinPad
            step={step}
            onSubmit={pinPadClickHandler}
            failCount={failCount}
          />
        )}
        {step === "end" && <MakePassEnd onClick={() => onClick("done")} />}
      </div>

      <FailModal 
        targetId = {modalId}
        visible = {modalId !== ''}
        onClickNo = {() => onClickModal('no')}
        onClickOk = {() => onClickModal('ok')}
      />
    </>
  );
};

export default SecondPassword;
