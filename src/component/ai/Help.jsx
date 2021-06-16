import { modalHide, modalShow } from "js/common";
import React, { useCallback, useEffect, useState } from "react";

const Help = (props) => {
  const { targetId, title, visible, onClick } = props;
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
      modalShowHandler();
      // modalShow(targetId);
      // setModalVisible(true);
    } else {
      modalHideHandler();
    }
  }, [visible, targetId, modalHideHandler]);

  return (
    <>
      {modalVisible && (
        <>
          <p className="lay_pop_blind"></p>
          <div className="popup help_pop" id={targetId}>
            <strong>{title}</strong>
            <section className="pop_cont">{props.children}</section>

            <ul className="btns">
              <li>
                <p className="btn">
                  <button
                    type="button"
                    className="pop_confirm"
                    onClick={onClick}
                  >
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

export default Help;
