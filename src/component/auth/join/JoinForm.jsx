import React from "react";
import { withRouter } from "react-router";

import Top from "../../inc/Top";
import Header from "../../inc/Header";
import SelectType from "./SelectType";

import OverAccount from "./OverAccount";
import JoinOut from "./JoinOut";
import RequireInfo from "./RequireInfo";
import Complete from "./Complete";

const JoinForm = ({ type, page }) => {

  return (
    <>
      <Top />

      <div id="wrap" className="member">
        {/* wrap start */}
        
        {(type === "selectType" || type === '' )&& (
          <>
            <Header headerType="back">회원가입</Header>
            <SelectType />
          </>
        )}
        {type === "overAccount" && (
          // 본인인증 후 중복계정 안내 
          <>
            <Header headerType="back">본인인증</Header>
            <OverAccount />
          </>
        )}
        {type === "joinOut" && (
          <>
            <Header headerType="close">회원탈퇴</Header>
            <JoinOut />
          </>
        )}
        {type === "info" && (
          <>
            <Header headerType="back">회원정보입력</Header>
            <RequireInfo />
          </>
        )}
        {type === "complete" && (
          <>
            <Header headerType="close">회원가입완료</Header>
            <Complete />
          </>
        )}
      </div>
    </>
  );
};

export default withRouter(JoinForm);
