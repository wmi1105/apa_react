import React, { useCallback, useEffect, useState } from "react";
import { modalHide, modalShow } from "js/common";


/* 
<Modal
        targetId = ''
        visible = {visible}
        cancelBtn = {true}
        onClickCancel = {onClickCancel}
        onClickOk = {onClickOk}
    >
    </Modal>
*/


const Modal = (props) => {
  const { targetId, visible, cancelBtn, onClickCancel, onClickOk } = props;
  const [modalVisible, setModalVisible] = useState(false);

  const modalHideHandler = useCallback(() => {
    if (modalVisible) {
      modalHide(targetId);
      setTimeout(() => {
        setModalVisible(false);
      }, 500);
    }
  }, [modalVisible, targetId]);

  useEffect(() => {
    if (visible) {
      setModalVisible(true);
      modalShow(targetId);
    } else {
      modalHideHandler();
    }
  }, [visible, targetId, modalHideHandler]);

  return (
    <>
      {modalVisible && (
        <>
          <p className="lay_pop_blind"></p>
          <div className="popup confirm" id={targetId}>
            <section className="pop_cont">
              {props.children}
            </section>

            <ul className="btns">
              {cancelBtn && (
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
              )}
              <li>
                <p className="btn">
                  <button type="button" onClick={onClickOk}>
                    확인
                  </button>
                </p>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
