import React, { useState } from "react";
import Postcode from "component/inc/PostCode";
// import ModPassword from "component/user/ModPassword";
import UserInfo from "component/user/UserInfo";


const UserInfoContainer = (props) => {
  const [postVisible, setPostVisible] = useState(false);
  const [modPassVisible, setModPassVisible] = useState(false);
  
  const onSavePassword = (param) => {

  }

  const onSetAddress = () => {

  }

  return (
    <>
      <UserInfo />

      {postVisible && <Postcode setVisible={(val) => setPostVisible(val)} onAddress={onSetAddress}/>}
      {/* {modPassVisible && <ModPassword setVisible={val => setModPassVisible(val)} onSavePassword = {onSavePassword}/>} */}
    </>
  );
};

export default UserInfoContainer;
