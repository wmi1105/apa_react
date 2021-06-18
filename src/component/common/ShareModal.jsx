import React from "react";
import Image from "component/common/Image";
import Modal from "component/common/Modal";

const ShareModal = ({ visible, onClickClose }) => {
  const host = window.document.URL

  return (
    <Modal targetId="share_pop" modalClass="help_pop" visible={visible}>
      <section className="pop_cont">
        <ul className="share_btns">
          <li>
            <button type="button">
              <Image src="common/icn_url.svg" alt="" />
              <span>링크복사</span>
            </button>
          </li>
          <li>
            <button type="button">
              <Image src="common/icn_kakao.svg" alt="" />
              <span>카카오톡</span>
            </button>
          </li>
          <li>
            <button type="button">
              <Image src="common/icn_face.svg" alt="" />
              <span>페이스북</span>
            </button>
          </li>
          <li>
            <button type="button">
              <Image src="common/icn_line.svg" alt="" />
              <span>LINE</span>
            </button>
          </li>
        </ul>
      </section>

      <p className="btn">
        <button type="button" className="pop_cancel" onClick={onClickClose}>
          취소
        </button>
      </p>
    </Modal>
  );
};

export default ShareModal;
