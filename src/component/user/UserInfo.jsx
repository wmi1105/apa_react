import React from "react";
import Section from "component/common/Section";

const account = {
  email : '이메일',
  kakao : '카카오',
  naver : '네이버',
  apple : '애플아이디',
  google : '구글'
}

const UserInfo = ({ userInfo, onClick }) => {
  // const loginType = userInfo.loginType;

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
            </li>
            <li>
              <strong>생년월일</strong>
              <p>2020.08.07</p>
              {/* <p className="empty">생년월일을 입력해 주세요.</p> */}
            </li>
            <li>
              <strong>휴대폰번호</strong>
              <p>010-4854-2807</p>
              <button
                type="button"
                className="click_show_evt"
                data-link-show="phone_mod"
                onClick={() => onClick("phone")}
              >
                수정하기
              </button>
            </li>
            <li>
              <strong>이메일</strong>
              {/* <p>{userInfo.email ? userInfo.email:'이메일을 입력해 주세요'}</p> */}
              <p>aaa@naver.com</p>
              <button
                type="button"
                className="click_show_evt"
                data-link-show="email_mod"
                onClick={() => onClick("email")}
              >
                수정하기
              </button>
            </li>

            {/* {loginType === 'email' &&  */}
              <li>
                <strong>비밀번호</strong>
                <p>********</p>
                <button type="button" onClick={() => onClick("password")}>수정하기</button>
              </li>
             {/* } */}

            <li>
              <strong>연동계정</strong>
              {/* <p className={`icn ${loginType}`}>{account[loginType]}로 로그인</p> */}
              <p className="icn email">이메일로 로그인</p>
              {/* <button type="button">수정하기</button> */}
            </li>
            
            <li>
              <strong>주소</strong>
              <p>경기 성남시 분당구 황새울로300번길 99(로얄팰리스)604호</p>
              {/* <p className="empty">주소를 입력해 주세요.</p> */}
              <button type="button" onClick={() => onClick("address")}>수정하기</button>
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
};
export default UserInfo;
