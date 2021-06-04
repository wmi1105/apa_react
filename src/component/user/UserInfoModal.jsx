import React, { useState } from "react";

const UserInfoModal = ({ targetId, onClickCancel, onClickOk }) => {
  const [input, setInput] = useState("");
  
  return (
    <>
      <section className="pop_cont">
        {targetId === "phone_mod" && (
          <p>
            <span>
              휴대폰번호 변경 시 본인인증이 필요하며, 인증후 휴대폰 번호가 자동
              변경됩니다. 인증을 진행하시겠습니까?
            </span>
          </p>
        )}

        {targetId === "email_mod" && (
          <form action="#" method="post">
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
                    onChange={(e) => setInput(e.target.value)}
                    // readOnly
                  />
                  <p className="info alert">이메일 형식이 올바르지 않습니다.</p>
                </li>
              </ul>
            </div>
            {/* input end */}
          </form>
        )}
      </section>

      <ul className="btns">
        <li>
          <p className="btn">
            <button
              type="button"
              className="pop_confirm"
              onClick={onClickCancel}
            >
              취소
            </button>
          </p>
        </li>
        <li>
          <p className="btn">
            <button type="button" onClick={onClickOk}>
              확인
            </button>
          </p>
        </li>
      </ul>
    </>
  );
};

export default UserInfoModal;
