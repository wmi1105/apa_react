import React from "react";
import imgComp from 'image/sub/img_comp.png'
import Footer from "component/inc/Footer";
import Section from "component/inc/Section";
const Complete = (props) => {
  return (
    <>
    <Section>
    <div id="contents">
      <dl className="first_info">
        <dt>
          어디아파 회원가입을
          <br />
          축하드립니다.
        </dt>
        <dd>
          회원가입이 완료되었습니다.
          <br />
          어디아파를 통해 회원님의 건강을 관리하고,
          <br />
          편리한 병원서비스를 이용해 보세요.
        </dd>
      </dl>
      <p className="mt40 txt_center">
        <img src={imgComp} alt="" />
      </p>
    </div>
    </Section>

    <Footer>
      <p className="btn50"><button type="button">가입정보 확인하기</button></p>
    </Footer>
    </>
  );
};

export default Complete;
