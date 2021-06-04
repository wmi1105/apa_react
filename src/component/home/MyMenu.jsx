import React from "react";
import heart from "image/common/icn_mmenu_heart.svg";
import icn_mmenu_remote from "image/common/icn_mmenu_remote.svg";
import icn_mmenu_doc from "image/common/icn_mmenu_doc.svg";
import icn_mmenu_hos from "image/common/icn_mmenu_hos.svg";
import icn_mmenu_drug from "image/common/icn_mmenu_drug.svg";

const MyMenu = (props) => {
  return (
    <>
      <nav className="my_menu">
        <h2>My Menu</h2>
        <ul>
          <li>
            <button type="button">
              <strong className="icon">
                <span>
                  <img src={heart} alt="" />
                </span>
              </strong>
              <span>내 몸 관리</span>
            </button>
          </li>
          <li>
            <button type="button">
              <strong className="icon">
                <span>
                  <img src={icn_mmenu_remote} alt="" />
                </span>
              </strong>
              <span>비대면 진료</span>
            </button>
          </li>
          <li>
            <button type="button">
              <strong className="icon">
                <span>
                  <img src={icn_mmenu_doc} alt="" />
                </span>
              </strong>
              <span>나의 문서함</span>
            </button>
          </li>
          <li>
            <button type="button">
              <strong className="icon">
                <span>
                  <img src={icn_mmenu_hos} alt="" />
                </span>
              </strong>
              <span>나의 병원</span>
            </button>
          </li>
          <li>
            <button type="button">
              <strong className="icon">
                <span>
                  <img src={icn_mmenu_drug} alt="" />
                </span>
              </strong>
              <span>나의 약국</span>
            </button>
          </li>
          <li className="last">
            <button type="button">
              <span>마이메뉴 추가</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MyMenu;
