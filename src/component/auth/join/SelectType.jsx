/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withRouter } from "react-router";
import Section from "component/inc/Section";

const SelectType = ({ history }) => {
  return (
    <Section>
      <div id="contents">
        <dl className="first_info">
          <dt>가입방식을 선택 해 주세요.</dt>
          <dd>
            어디아파는 이메일 회원 가입 외에도
            <br />
            SNS계정으로도 회원가입을 할 수 있습니다.
          </dd>
        </dl>
        <ul className="join_select">
          <li className="mail">
            <button type="button" onClick={() => history.push('./terms')}>이메일로 회원가입</button>
          </li>
          <li className="kakao">
            <button type="button">카카오로 회원가입</button>
          </li>
          <li className="naver">
            <button type="button">네이버로 회원가입</button>
          </li>
          <li className="apple">
            <button type="button">애플아이디로 회원가입</button>
          </li>
          <li className="google">
            <button type="button">구글아이디로 회원가입</button>
          </li>
        </ul>
      </div>  
    </Section>
  );
};

export default withRouter(SelectType);
