import React, { useEffect, useMemo, useState } from "react";
import { setContents } from "../../js/common_pub";
import Footer from "../inc/Footer";
import Header from "../inc/Header";
import Top from "../inc/Top";
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
