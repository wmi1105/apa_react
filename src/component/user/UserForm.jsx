import React, { useState } from "react";
import Header from "component/inc/Header";
import Modal from "component/inc/Modal";
import Postcode from "component/inc/PostCode";
import UserInfo from "./UserInfo";
import UserInfoModal from "./UserInfoModal";
// import ModPassword from "./ModPassword";
import { withRouter } from "react-router";

const modalId = {
  phone : 'phone_mod',
  email : 'email_mod',
  birth : 'birth_mod',
  address : 'address_mod'
}

const UserForm = ({history, userInfo, modUserInfo}) => {
  const [modalData, setModalData] = useState({
    target_id : '',
    defaultValue : ''
  });
  // const [modInfoId, setModInfoId] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [postVisible, setPostVisible] = useState(false);
  const [modPassVisible, setModPassVisible] = useState(false);

  const setModModal = (id, value) => {
    if(id === 'address'){
      setPostVisible(true);
      return false;
    }

    if(id === 'password'){
      setModPassVisible(true);
      return false;
    }

    const target_id = modalId[id];
    setModalData({
      target_id : target_id,
      defaultValue : value
    })
    setModalVisible(true);
  };

  const modalOk = (value) => {
    //모달에서 확인버튼 선택
    if(modalData.target_id === 'phone'){
      history.push('/identify/userPassword')
    }
    setModalVisible(false);
  };

  const allAddress = (val) => {
    console.log(val);
    modUserInfo('address', {data:val})
    setPostVisible(false);
  }

  const savePassword = (data) => {
    
  }

  return (
    <>
      <div id="wrap" className="member">
        <Header headerType="back">나의 정보</Header>
        <UserInfo userInfo={userInfo} modInfo={setModModal}/>
        <Modal targetId={modalData.target_id} visible={modalVisible}>
          <UserInfoModal
            targetId={modalData.target_id}
            defaultValue = {modalData.defaultValue}
            onClickOk={modalOk}
            onClickCancel={() => setModalVisible(false)}
          />
        </Modal> 
      </div>

    {/* 주소검색 */}
      {postVisible && <Postcode setVisible={(val) => setPostVisible(val)} allAddress={allAddress}/>}
      {/* {modPassVisible && <ModPassword setVisible={val => setModPassVisible(val)} savePassword = {savePassword}/>} */}
    </>
  );
};

export default withRouter(UserForm);
