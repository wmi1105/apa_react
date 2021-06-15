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
        //pass인증
        setModalTargetId("phone_mod");
        setModalVisible(true);
        break;

      case "email":
        //text수정
        setModalTargetId("email_mod");
        setModalVisible(true);
        break;

      case "password":
        //비밀번호 변경 페이지
        history.push("/user/changePassword/.user.info");
        break;

      case "address":
        //kakaoPost
        history.push("/user/kakaoPost/.user.info");
        break;

      default:
        break;
    }
  };

  const modalClickOk = () => {
    switch (modalTargetId) {
      case "phone_mod":
        history.push("/auth/identify/.user.info");
        break;

      case "email_mod":
        //dispatch 이메일 수정
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
    </>
  );
};

export default withRouter(UserInfoContainer);
