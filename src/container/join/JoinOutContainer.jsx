import React, { useState } from "react";
import { withRouter } from "react-router";
import JoinOut from "component/join/JoinOut";
import JoinOutModal from "component/join/JoinOutModal";
import FixChkButton from "component/common/FixChkButton";

const JoinOutContainer = ({ history }) => {
  const [modalVisible, setModalVisible] = useState(false);

  //joinout redux에서
  //로그인 후 탈퇴인지,
  //로그인 전 pass후 탈퇴인지 확인

  const onClickHandler = () => {
    setModalVisible(true);
  };

  const onModalClick = () => {
    setModalVisible(false);
    history.push("/home");
  };

  return (
    <>
      <JoinOut />

      <FixChkButton
        btnLabel="탈퇴하기"
        chkLabel="모든 정보를 삭제하는 것에 동의합니다."
        onClick={onClickHandler}
      />

      <JoinOutModal visible={modalVisible} onClickOk={onModalClick} />
    </>
  );
};

export default withRouter(JoinOutContainer);
