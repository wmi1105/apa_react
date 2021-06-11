import React, { useCallback, useEffect, useState } from "react";
import { emailValueCheck } from "js/common";
import Modal from "component/inc/Modal";

const UserInfoModal = ({ targetId, visible, onClickCancel, onClickOk }) => {
  const [input, setInput] = useState("");
  const [valueCheck, setValuecheck]= useState(null);

  const onClickHandler = useCallback(() => {
    if(targetId === 'email_mod'){
      const check = emailValueCheck(input);
      if(!check) {
        setValuecheck(false);
        return false;
      }
    }
    onClickOk({data:input})
  }, [targetId, input, onClickOk])

  useEffect(() => {
    setValuecheck(null);
  }, [targetId, visible])

  return (
    <>
      <Modal
        targetId = {targetId}
        visible = {visible}
        cancelBtn = {true}
        onClickCancel = {onClickCancel}
        onClickOk = {onClickHandler}
      >
        {targetId === "phone_mod" && (
          <p>
            <span>
              휴대폰번호 변경 시 본인인증이 필요하며, 인증 후 휴대폰 번호가 자동
              변경됩니다. 인증을 진행하시겠습니까?
            </span>
          </p>
        )}

        {targetId === "email_mod" && (
            <div className="input">
              {/* input start */}
              <strong>이메일 주소 수정</strong>
              <ul className="inputs">
                <li>
                  <input
                    type="text"
                    className="mail_key"
                    title="이메일 입력"
                    placeholder="이메일을 입력해 주세요."
                    value={input}
                    onChange={(e) =>{
                        setInput(e.target.value);
                        setValuecheck(null);
                      }}
                    // readOnly
                  />
                  {valueCheck === false && <p className="info">이메일 형식이 올바르지 않습니다.</p>}
                </li>
              </ul>
            </div>
        )}

      </Modal>
    </>
  );
};

export default UserInfoModal;
