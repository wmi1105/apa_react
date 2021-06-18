import React, { useCallback, useEffect, useState } from "react";
import { modalHide, modalShow } from "js/common";


/* 
<Modal
        targetId = ''
        modalClass = ''
        visible = {visible}
    >
    </Modal>
*/


const Modal = (props) => {
  const { modalClass, targetId, visible} = props;
  const [modalVisible, setModalVisible] = useState(false);

  const modalHideHandler = useCallback(() => {
    if (modalVisible) {
      modalHide(targetId);
      setTimeout(() => {
        setModalVisible(false);
      }, 500);
    }
  }, [modalVisible, targetId]);

  const modalShowHandler = useCallback(() => {
    setModalVisible(true);
    setTimeout(() => {
      modalShow(targetId);
    }, 100);
  }, [targetId]);

  useEffect(() => {
    if (visible) {
      // setModalVisible(true);
      // modalShow(targetId);
      modalShowHandler();
    } else {
      modalHideHandler();
    }
  }, [visible, targetId, modalHideHandler, modalShowHandler]);

  return (
    <>
      {modalVisible && (
        <>
          <p className="lay_pop_blind"></p>
          <div className={`popup ${modalClass}`} id={targetId}>          
              {props.children}
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
