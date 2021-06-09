import React from "react";
import { withRouter } from "react-router";

import icnNaver from "image/common/icn_naver.svg";
import Section from "component/inc/Section";
import FixButton from "component/inc/FixButton";
// import icnEmail from 'image/common/icn_email.svg';
// import icnKakao from 'image/common/icn_kakao.svg';
// import icnApple from 'image/common/icn_apple.svg';
// import icnGoogle from 'mage/common/icn_google.svg';

const OverAccount = ({history, onJoinOut}) => {

  return (
    <>
      <Section>
        <div id="contents">
          <dl className="first_info">
            <dt>가입된 회원</dt>
            <dd>
              이미 가입된 회원이십니다.
              <br />
              아래 계정을 확인 해 주세요.
            </dd>
          </dl>
          <ul className="join_over">
            <li>
              이메일 주소 : <span>email@naver.com</span>
            </li>
            <li>
              연동계정 :
              <span>
                <img src={icnNaver} alt="" />
                네이버로 로그인
              </span>
            </li>
            {/* <li>
          연동계정 :<span><img src="/apa/image/common/icn_email.svg" alt="" />이메일로 로그인</span>
        </li>
        <li>
          연동계정 :<span><img src="/apa/image/common/icn_kakao.svg" alt="" />카카오로 로그인</span>
        </li>
        <li>
          연동계정 :<span><img src="/apa/image/common/icn_apple.svg" alt="" />애플아이디로 로그인</span>
        </li>
        <li>
          연동계정 :<span><img src="/apa/image/common/icn_google.svg" alt="" />구글계정으로 로그인</span>
        </li> */}
          </ul>
          <p className="out_info">
            <button onClick={() => history.push('/join/joinOut')}>회원 탈퇴 후 재가입 하시겠습니까?</button>
          </p>
        </div>
      </Section>

      <FixButton
        label = "로그인 하기"
        btnDisabled = {false}
        onClick={null}
      />
    </>
  );
};

export default withRouter(OverAccount);
