import React from "react";

import MyMenuSvg from "./MyMenuSvg";

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
                  <MyMenuSvg id='heart'/>
                </span>
              </strong>
              <span>내 몸 관리</span>
            </button>
          </li>
          <li>
            <button type="button">
              <strong className="icon">
                <span>
                  <MyMenuSvg id='icn_mmenu_remote'/>
                </span>
              </strong>
              <span>비대면 진료</span>
            </button>
          </li>
          <li>
            <button type="button">
              <strong className="icon">
                <span>
                  <MyMenuSvg id='icn_mmenu_doc'/>
                </span>
              </strong>
              <span>나의 문서함</span>
            </button>
          </li>
          <li>
            <button type="button">
              <strong className="icon">
                <span>
                  <MyMenuSvg id='icn_mmenu_hos'/>
                </span>
              </strong>
              <span>나의 병원</span>
            </button>
          </li>
          <li>
            <button type="button">
              <strong className="icon">
                <span>
                  <MyMenuSvg id='icn_mmenu_drug'/>
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
