import React from "react";
import Header from "component/inc/Header";
import Top from "component/inc/Top";
import ChangePassword from "./ChangePassword";

const AccountForm = ({page}) => {
  return (
    <>
      <Top />

      <div id="wrap" className="member">
        {/* wrap start */}
        <Header headerType='close'>비밀번호변경</Header>
        <ChangePassword />
      </div>
    </>
  );
};

export default AccountForm;