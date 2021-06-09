import React from "react";
import Confirm from "component/auth/find/Confirm";
import EmailCheck from "component/auth/find/EmailCheck";
import SerPhone from "component/auth/find/SerPhone";

const FindEmailContainer = (props) => (
  <>
    <SerPhone />
    <Confirm />
    <EmailCheck />
  </>
);

export default FindEmailContainer;
