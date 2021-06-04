import React, { useState } from "react";
import Header from "component/inc/Header";
import Modal from "component/inc/Modal";
import Postcode from "component/inc/PostCode";
import UserInfo from "./UserInfo";
import UserInfoModal from "./UserInfoModal";

const UserForm = ({modUserInfo}) => {
  const [modInfoId, setModInfoId] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [postVisible, setPostVisible] = useState(false);

  const setModModal = (id) => {
    if(id === 'address_mod'){
      setPostVisible(true);
      return false;
    }

    setModInfoId(id);
    setModalVisible(true);
  };

  const modalOk = () => {
    //모달에서 확인버튼 선택
    setModalVisible(false);
  };

  const allAddress = (val) => {
    console.log(val);
    modUserInfo('address', {data:val})
    setPostVisible(false);
  }

  return (
    <>
      <div id="wrap" className="member">
        <Header headerType="back">나의 정보</Header>
        <UserInfo modInfo={setModModal}/>
        <Modal targetId={modInfoId} visible={modalVisible}>
          <UserInfoModal
            targetId={modInfoId}
            onClickOk={modalOk}
            onClickCancel={() => setModalVisible(false)}
          />
        </Modal> 
      </div>

    {/* 주소검색 */}
      {postVisible && <Postcode setVisible={(val) => setPostVisible(val)} allAddress={allAddress}/>}

      
    </>
  );
};

export default UserForm;
