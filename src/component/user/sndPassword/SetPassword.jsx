import React, { useCallback, useEffect, useState } from "react";
import Section from "component/common/Section";
import { makePinPad } from "js/common";

const SetPassword = ({ step, onSubmit, failCount }) => {
  const [pickNum, setPickNum] = useState([]);
  const [pin, setPin] = useState([]);

  const formClear = useCallback(() => {
    const numbers = makePinPad();
    setPickNum(numbers);
    setPin([]);
  }, []);

  const clickPinPad = (num) => {
    if (pin.length < 5) {
      const arr = [...pin];
      arr.push(num);
      setPin(arr);
    }
  };

  const clickRemovePad = () => {
    const arr = [...pin];
    arr.pop();
    setPin(arr);
  };

  const clickSubmit = () => {
    if (pin.length < 5) return false;
    const key = pin.toString().replaceAll(",", "");
    onSubmit(key);
  };

  useEffect(() => {
    formClear();
  }, [step, failCount, formClear]);

  return (
    <>
      <Section>
        <div id="contents">
          <article className="pin_pass">
            {step !== "auth" && (
              <p className="normal_desc txt_center">
                회원님의 개인정보를 보호하기 위해
                <br />
                민감정보 영역의 경우 2중 비밀번호 입력 후<br />
                개인정보를 확인하실 수 있습니다.
              </p>
            )}
            {/* <input type="password" title="pin값" maxLength="5" /> */}
            {step === "auth" && (
              <>
                {failCount === 0 && (
                  <p className="sp_desc">비밀번호 5자리를 입력해 주세요.</p>
                )}
                {failCount > 0 && (
                  <p className="sp_desc" style={{ color: "#e00" }}>
                    비밀번호가 일치하지 않습니다. <br />
                    비밀번호 {failCount}회 오류입니다.
                  </p>
                )}
              </>
            )}
            <ul className="fake_key">
              {[0, 1, 2, 3, 4].map((num) => (
                <li
                  key={num}
                  className={pin.length > num ? "on" : ""}
                  style={failCount > 0 ? { borderColor: "#e00"} : {}}
                >
                  <p
                    style={failCount > 0 ? { color: "#e00"} : {}}
                  >*</p>
                </li>
              ))}
            </ul>

            {step === "setting" && <p>비밀번호 5자리를 입력해 주세요.</p>}
            {step === "confirm" && <p>비밀번호를 한번 더 입력 해 주세요.</p>}

            <ul className="key">
              {pickNum.map((num, index) => (
                <li key={index}>
                  <button type="button" onClick={() => clickPinPad(num)}>
                    {num}
                  </button>
                </li>
              ))}
            </ul>
            <p className="del">
              <button type="button" onClick={clickRemovePad}>
                삭제
              </button>
            </p>
            <p className="submit">
              <button type="button" onClick={clickSubmit}>
                입력완료
              </button>
            </p>
          </article>
        </div>
      </Section>
    </>
  );
};

export default SetPassword;
