import React, { useCallback, useEffect, useState } from "react";
import { makePinPad } from "js/common";
import { setContents } from "js/common_pub";
import Nav from "pages/inc/Nav";


const PinPad = ({ step, onSubmit, failCount }) => {
  const [pickNum, setPickNum] = useState([]);
  const [pin, setPin] = useState([]);

  const [containerSize, setContainerSize] = useState(null);

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
    const size = setContents();
    const style = {
      height: size.windowH - size.headerH,
      top: size.headerH + 1,
      backgroundColor: "#fff",
    };
    setContainerSize({ style });
  }, []);

  useEffect(() => {
    formClear();
  }, [step, failCount, formClear]);

  return (
    <>
      <Nav headerId="back" headerPath={null} title="2중 비밀번호 입력" />

      {containerSize && (
        <section id="container" style={containerSize}>
          <div className="contents">
            <article className="pin_pass">
              {/* pin_pass start */}
              <input type="password" title="pin값" maxLength="5" />
              {step === "pin" && (
                <p className="sp_desc">비밀번호 5자리를 입력해 주세요.</p>
              )}
              {step === "pinCheck" && (
                <p className="sp_desc">비밀번호를 한번 더 입력해 주세요.</p>
              )}
              {failCount === 1 && (
                <p className="sp_desc txt_red">비밀번호가 일치하지 않습니다.</p>
              )}
              {failCount > 1 && (
                <p className="sp_desc txt_red">
                  비밀번호 {failCount}회 오류입니다.
                </p>
              )}

              <ul className={`fake_key ${failCount > 0 ? "false" : ""}`}>
                {/*불일치시 false클래스 추가 */}
                {[...Array(5)].map((num, idx) => (
                  <li key={idx} className={pin.length > idx ? "on" : ""}>
                    <p>*</p>
                  </li>
                ))}
              </ul>
              <p></p>
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
            {/* pin_pass end */}
          </div>
          {/* contents end */}
        </section>
      )}
    </>
  );
};

export default PinPad;
