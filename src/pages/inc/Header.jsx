import React from "react";
import logo_top from "image/common/logo_top.svg";
import { withRouter } from "react-router";

const Header = (props) => {
  const { history } = props;

  return (
    <header id="header" className="normal_header">
      {/*  header start */}
      <h1 onClick={() => history.push("/index")}>
        <img src={logo_top} alt="어디아파" />
      </h1>
      <ul className="topmenu">
        <li className="alert new">
          <button type="button">알림</button>
        </li>
        <li className="camera">
          <button type="button">카메라</button>
        </li>
        <li className="menu">
          <button type="button">전체메뉴</button>
        </li>
      </ul>
    </header>
  );
};

export default withRouter(Header);
