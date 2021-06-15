import React from "react";
import Section from "component/common/Section";
import FixButton from "component/common/FixButton";

const Sleep = ({info, onClick}) => {
  return (
    <>
      <Section>
        <div id="contents">
          <div className="login_box">
            <strong>어디 아파</strong>
            <p className="slogan">
              회원님의 계정이
              <br />
              휴면상태입니다.
            </p>
            <p>
              회원님이 어디아파 서비스 최종 로그인 일로부터
              <br />
              1년이 지나 관계 법령에 따라 휴면상태로
              <br />
              전환되었습니다.
            </p>
            <ul className="inputs view">
              <li>
                <p>
                  <span>최종접속일</span>
                  <span>2020.05.11</span>
                </p>
              </li>
              <li>
                <p>
                  <span>휴면전환일</span>
                  <span>2020.05.11</span>
                </p>
              </li>
            </ul>
            <p>
              서비스를 다시 이용하시려면 본인확인 후<br />
              이용이 가능합니다.
            </p>
          </div>
        </div>
      </Section> 

      <FixButton
        label = "휴대폰 본인인증"
        btnDisabled = {false}
        onClick={onClick}
      />
    </>
  );
};

export default Sleep;
