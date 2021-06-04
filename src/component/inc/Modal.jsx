import React, { useCallback, useEffect, useState } from "react";
import { modalHide, modalShow } from "../../js/common";

const Modal = (props) => {
  const { targetId, visible } = props;
  const [modalVisible, setModalVisible] = useState(false);

  const modalHideHandler = useCallback(() => {
      if(modalVisible){
        modalHide(targetId);
        setTimeout(() => {
          setModalVisible(false);
        }, 500);
      }
  },[modalVisible, targetId]);

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
            {props.children}
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
