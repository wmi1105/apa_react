import React from "react";
import Modal from "component/common/Modal";

const SortModal = ({ visible, sort, onClick }) => {
  return (
    <>
      <Modal
        targetId="filter_sort"
        modalClass="bottom_pop type2"
        visible={visible}
      >
        <section className="pop_cont">
          <strong className="center_desc">정렬순서</strong>
          <ul className="btns">
            <li>
              <label className="btn_radio">
                <input
                  type="radio"
                  title="정렬순서 최신순 선택"
                  name="sort"
                  value="new"
                  onChange={() => onClick("new")}
                  checked={sort === "new"}
                />
                <span>최신순</span>
              </label>
            </li>
            <li>
              <label className="btn_radio">
                <input
                  type="radio"
                  title="정렬순서 최신순 선택"
                  name="sort"
                  value="issue"
                  onChange={() => onClick("issue")}
                  checked={sort === "issue"}
                />
                <span>인기순</span>
              </label>
            </li>
          </ul>
        </section>

        <p className="pop_close">
          <button type="button" onClick={() => onClick("close")}>
            팝업창 닫기
          </button>
        </p>
      </Modal>
    </>
  );
};

export default SortModal;
