import React from "react";

const FindModal = ({ targetId, onClickOk }) => {
  return (
    <>
      <section className="pop_cont">
        <p>
          {targetId === "cer_phone" && (
            <span>
              휴대폰으로 인증번호가 전송되었습니다.
              <br />
              인증번호를 입력해주세요.
            </span>
          )}
          {targetId === "cer_phone2" && <span>인증되었습니다.</span>}
        </p>
      </section>

      <ul className="btns">
        <li>
          <p className="btn">
            <button type="button" className="pop_cancel" onClick={onClickOk}>
              확인
            </button>
          </p>
        </li>
      </ul>
    </>
  );
};

export default FindModal;
