import Image from "component/common/Image";
import Modal from "component/common/Modal";
import { modalHide, modalShow } from "js/common";
import React, { useCallback, useEffect, useState } from "react";

const HelpModal = (props) => {
  const { visible, onClick, label, data } = props;

  return (
    <>
      <Modal targetId="help_pop" modalClass="help_pop" visible={visible}>
        <strong>{label}</strong>
        <section className="pop_cont">
          <p>
            {data.text}
          </p>
          <p>
            <Image src={data.img} alt="" />
          </p>
        </section>

        <ul className="btns">
          <li>
            <p className="btn">
              <button
                type="button"
                className=""
                onClick={onClick}
              >
                확인
              </button>
            </p>
          </li>
        </ul>
      </Modal>
    </>
  );
};

export default HelpModal;