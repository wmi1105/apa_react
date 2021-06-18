//https://gloriajun.github.io/frontend/2019/08/10/react-router-history.html
import React from "react";
import { withRouter } from "react-router-dom";
import Modal from "component/common/Modal";
import Terms from "component/terms/Terms";

const TermsContainer = ({
  history,
  onItemVisible,
  modalVisible,
  onClickModal,
}) => {
  const termSubmit = (value) => {
    history.push(
      "/auth/identification/pass/.auth.sndPassword.setting'.user.info'"
    ); //약관동의 후 본인인증 페이지로 이동
  };

  // useEffect(() => {
  //   if(close)history.goBack();
  //   const unBlock = history.block((location, action) => {
  //     // console.log('#### history block', action);
  //     if (!close && action === "POP") {
  //       setVisible(true);
  //       // console.log("#### blocked ####");
  //       return false;
  //     }
  //   });

  //   return () => {
  //     unBlock();
  //   };
  // }, [history, close]);

  return (
    <>
      <Terms onItemVisible={onItemVisible} onSumbit={termSubmit} />

      <Modal targetId="join_cancel" visible={modalVisible} modalClass="confirm">
        <section className="pop_cont">
          <p>
            <span>
              가입이 완료되지 않았습니다. <br />
              가입을 취소하시겠습니까?
            </span>
          </p>
        </section>

        <ul className="btns">
          <li>
            <p className="btn">
              <button
                type="button"
                className="pop_confirm"
                onClick={() => onClickModal(false)}
              >
                취소
              </button>
            </p>
          </li>
          <li>
            <p className="btn">
              <button type="button" onClick={() => onClickModal(true)}>
                확인
              </button>
            </p>
          </li>
        </ul>
      </Modal>
    </>
  );
};

export default withRouter(TermsContainer);
