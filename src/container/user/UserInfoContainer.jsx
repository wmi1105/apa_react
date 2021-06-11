import React, { useState } from "react";
// import ModPassword from "component/user/ModPassword";
import UserInfo from "component/user/UserInfo";
import { withRouter } from "react-router";
import UserInfoModal from "component/user/UserInfoModal";

const UserInfoContainer = ({ history }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTargetId, setModalTargetId] = useState("");

  const modClickHandler = (type) => {
    switch (type) {
      case "phone":
        setModalTargetId("phone_mod");
        setModalVisible(true);
        break;

      case "email":
        setModalTargetId("email_mod");
        setModalVisible(true);
        break;

      case "password":
        history.push("/user/changePassword");
        break;

      case "address":
        history.push("/user/kakaoPost");
        break;

      default:
        break;
    }
  };

  const modalClickOk = () => {
    switch (modalTargetId) {
      case "phone_mod":
        history.push("/auth/identify");
        break;

      case "email_mod":
        //dispatch
        setModalTargetId("");
        break;

      default:
        break;
    }
  };

  return (
    <>
      <UserInfo userInfo={null} onClick={modClickHandler} />

      <UserInfoModal
        targetId={modalTargetId}
        visible = {modalVisible}
        onClickCancel={() => setModalVisible(false)}
        onClickOk={modalClickOk}
      />

      {/* {modPassVisible && <ModPassword setVisible={val => setModPassVisible(val)} onSavePassword = {onSavePassword}/>} */}
    </>
  );
};

export default withRouter(UserInfoContainer);
