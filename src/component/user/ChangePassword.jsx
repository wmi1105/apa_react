import Section from "component/inc/Section";
import React, { useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { passwordValueCheck } from "js/common";
import FixButton from "component/inc/FixButton";

const TypeIcon = ({ type }) => (
  <>
    {type === "password" && <AiOutlineEye />}
    {type === "text" && <AiOutlineEyeInvisible />}
  </>
);

const typeStyle = {
  position: "absolute",
  right: "10px",
  lineHeight: "38px",
  height: "38px",
  fontSize: "15px",
};

const ChangePassword = ({ setVisible, onSavePassword }) => {
  const [btnDisabled, setBtnDisable] = useState(true);
  const [inputType, setInputType] = useState({
    //type password/text toggle
    oldKey: "password",
    newKey: "password",
    reNewKey: "password",
  });
  const [input, setInput] = useState({
    oldKey: "",
    newKey: "",
    reNewKey: "",
  });
  const [alertVisible, setAlertVisible] = useState({
    //value 경고메세지 표시
    oldKey: true,
    newKey: true,
    newKeyValue: true,
    reNewKey: true,
  });

  //type password/text toggle
  const typeSwitch = (id) => {
    const tmp = { ...inputType };
    tmp[id] = tmp[id] === "password" ? "text" : "password";
    setInputType(tmp);
  };

  //input onChange
  const onChangeHandler = (id, value) => {
    setInput({ ...input, [id]: value });

    if (!alertVisible[id]) setAlertVisible({ ...alertVisible, [id]: true });
  };

  const onClickHandler = () => {
    const visibleTmp = { ...alertVisible };
    if (input.oldKey.length < 8 || input.oldKey.length > 16) {
      visibleTmp["oldKey"] = false;
    }
    if (input.newKey.length < 8 || input.newKey.length > 16) {
      visibleTmp["newKey"] = false;
    } else {
      visibleTmp["newKeyValue"] = passwordValueCheck(input.newKey);
    }

    if (input.newKey !== input.reNewKey) {
      visibleTmp["reNewKey"] = false;
    }

    setAlertVisible(visibleTmp);
    if (Object.keys(visibleTmp).find((item) => !visibleTmp[item]) !== "") {
      return false;
    }

    onSavePassword(input);
  };

  //form 새로고침 방지
  const onSubmit = (e) => {
    e.preventDefault();
  };

  //input이 공백이 아닐 때 버튼 활정
  useEffect(() => {
    if (
      input.oldKey.length > 0 &&
      input.newKey.length > 0 &&
      input.reNewKey.length > 0
    )
      setBtnDisable(false);
    else setBtnDisable(true);
  }, [input]);

  return (
    <>
      <Section>
        {/* container start */}

        <div id="contents">
          {/* contents start */}
          <form
            action=""
            method="post"
            className="normal_form"
            onSubmit={onSubmit}
          >
            <p className="normal_desc">
              현재 비밀번호를 입력 후<br />
              새로운 비밀번호를 등록하여 주세요.
            </p>
            <ul className="inputs write">
              <li>
                <p className="no_title">
                  <label>
                    <input
                      type={inputType.oldKey}
                      className="pass_key"
                      title="현재 비밀번호 입력"
                      placeholder="현재 비밀번호(영문+숫자+특수문자 8~16자)"
                      value={input.oldKey}
                      onChange={(e) =>
                        onChangeHandler("oldKey", e.target.value)
                      }
                      // readOnly
                    />
                    <span
                      style={typeStyle}
                      onClick={() => typeSwitch("oldKey")}
                    >
                      <TypeIcon type={inputType.oldKey} />
                    </span>
                  </label>
                </p>
                {!alertVisible.oldKey && (
                  <p className="info">8~16자리 이상 입력해주세요.</p>
                )}
              </li>
              <li>
                <p className="no_title">
                  <label>
                    <input
                      type={inputType.newKey}
                      className="pass_key pass_prev"
                      title="현재 비밀번호 입력"
                      placeholder="새 비밀번호(영문+숫자+특수문자 8~16자)"
                      value={input.newKey}
                      onChange={(e) =>
                        onChangeHandler("newKey", e.target.value)
                      }
                      // readOnly
                    />
                    <span
                      style={typeStyle}
                      onClick={() => typeSwitch("newKey")}
                    >
                      <TypeIcon type={inputType.newKey} />
                    </span>
                  </label>
                </p>
                {!alertVisible.newKey && (
                  <p className="info">8~16자리 이상 입력해주세요.</p>
                )}
                {!alertVisible.newKeyValue && (
                  <p className="info">
                    영문+숫자+특수문자 8~16자로 입력해 주세요.
                  </p>
                )}
              </li>
              <li>
                <p className="no_title">
                  <label>
                    <input
                      type={inputType.reNewKey}
                      className="pass_key_a"
                      title="현재 비밀번호 입력"
                      placeholder="새 비밀번호 확인(영문+숫자+특수문자 8~16자)"
                      value={input.reNewKey}
                      onChange={(e) =>
                        onChangeHandler("reNewKey", e.target.value)
                      }
                      // readOnly
                    />
                    <span
                      style={typeStyle}
                      onClick={() => typeSwitch("reNewKey")}
                    >
                      <TypeIcon type={inputType.reNewKey} />
                    </span>
                  </label>
                </p>
                {!alertVisible.reNewKey && (
                  <p className="info">비밀번호가 일치하지 않습니다.</p>
                )}

                {/* <AiOutlineEye /> */}
              </li>
            </ul>
          </form>
        </div>
      </Section>
      

      <FixButton
        label="가입정보 확인하기"
        btnDisable={btnDisabled}
        onClick={onClickHandler}
      />
    </>
  );
};

export default ChangePassword;
