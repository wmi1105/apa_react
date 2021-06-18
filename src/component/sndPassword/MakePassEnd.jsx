import React from "react";
import FixButton from "component/common/FixButton";
import Image from "component/common/Image";
import Nav from "pages/inc/Nav";


const MakePassEnd = (props) => {
  return (
    <>
    <Nav
      headerId = "close"
      headerPath = {null}
      title = "2중 비밀번호 설정 완료"
    />

      <section className="container">
        <div className="contents">
          <dl className="first_info">
            <dt>
              비밀번호 설정이
              <br />
              완료되었습니다.
            </dt>
            <dd>
              입력하신 비밀번호를 꼭 기억해 주시고,
              <br />
              회원님의 소중한 정보를 확인하실 때<br />
              사용해 주시기 바랍니다.
            </dd>
          </dl>
          <p className="mt40 txt_center">
            <Image src="sub/img_comp.png" alt="" />
          </p>
        </div>
      </section>

      <FixButton
        label = "확인"
        btnDisable = {false}
        onClick = {null}
      />
    </>
  );
};

export default MakePassEnd;
