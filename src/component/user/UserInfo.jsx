import React from "react";
import Section from "../inc/Section";

const UserInfo = ({ modInfo }) => {

  return (
    <>
      <Section>
        <div id="contents">
          <p className="normal_desc">
            서비스 이용에 필요한 개인 정보를 수정하거나
            <br />
            변경할 수 있습니다.
          </p>
          <ul className="input_view">
            <li>
              <strong>이름</strong>
              <p>홍길동</p>
              <span className="mod_btn">수정하기</span>
            </li>
            <li>
              <strong>휴대폰번호</strong>
              <p>010-4854-2807</p>
              <span
                className="mod_btn click_show_evt"
                data-link-show="phone_mod"
                onClick={() => modInfo("phone_mod")}
              >
                수정하기
              </span>
            </li>
            <li>
              <strong>이메일</strong>
              <p>wetewt@naver.com</p>
              <span
                className="mod_btn click_show_evt"
                data-link-show="email_mod"
                onClick={() => modInfo("email_mod")}
              >
                수정하기
              </span>
            </li>
            <li>
              <strong>비밀번호</strong>
              <p>********</p>
              <span className="mod_btn">수정하기</span>
            </li>
            <li>
              <strong>연동계정</strong>
              <p className="icn email">이메일로 로그인</p>
              {/* <p className="icn kakao">카카오로 로그인</p> <p className="icn naver">네이버로 로그인</p> <p className="icn apple">애플아이디로 로그인</p> <p className="icn google">구글로 로그인</p>*/}
              <span className="mod_btn">수정하기</span>
            </li>
            <li>
              <strong>본인인증</strong>
              <p className="cer">
                <span>인증완료</span>
              </p>
              {/* <p className="cer red"><span>인증필요</span></p> */}
              <span className="mod_btn">수정하기</span>
            </li>
            <li>
              <strong>생년월일</strong>
              <p>2020.08.07</p>
              {/* <p className="empty">생년월일을 입력해 주세요.</p> */}
              <span className="mod_btn">수정하기</span>
            </li>
            <li>
              <strong>주소</strong>
              <p>경기 성남시 분당구 황새울로300번길 99(로얄팰리스)604호</p>
              {/* <p className="empty">주소를 입력해 주세요.</p> */}
              <span className="mod_btn" onClick={() => modInfo("address_mod")}>수정하기</span>
            </li>
            <li>
              <strong>문진프로필</strong>
              <p>
                등록된 프로필<span>3</span>개
              </p>
              {/* <p className="empty">문진프로필을 등록해 주세요.</p> */}
              <span className="mod_btn">수정하기</span>
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
};
export default UserInfo;
