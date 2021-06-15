import FixButton from "component/common/FixButton";
import Section from "component/common/Section";
import React from "react";

const Info = (props) => (
  <>
    <Section>
      <div id="contents">
        <dl className="first_info blue">
          <dt>
            2중 비밀번호로
            <br />
            개인정보를 보호하세요.
          </dt>
          <dd>
            회원님의 개인정보를 보호하기 위해
            <br />
            민감정보 영역의 경우 2중 비밀번호 입력 후<br />
            개인정보를 확인하실 수 있습니다.
          </dd>
        </dl>
        <dl className="info_double_pass">
          <dt>2중 비밀번호가 필요한 민감정보 영역</dt>
          <dd>
            <ul>
              <li className="info1">
                <strong>나의 정보</strong>
                <p>회원가입 시 입력된 개인정보 영역입니다.</p>
              </li>
              <li className="info2">
                <strong>병원예약기록</strong>
                <p>어디아파를 통해 예약된 진료예약 정보 영역입니다.</p>
              </li>
              <li className="info3">
                <strong>진료기록</strong>
                <p>병원진료와 관련된 개인의료정보 영역입니다.</p>
              </li>
              <li className="info4">
                <strong>결제수단 관리</strong>
                <p>신용카드 정보 등, 결제와 관련된 정보 영역입니다.</p>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
    </Section>

    <FixButton
      label="2중 비밀번호 설정하기"
      btnDisable={false}
      onClick={props.onClick}
    />
  </>
);

export default Info;
