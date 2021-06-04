/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { withRouter } from 'react-router';
import Section from '../../inc/Section';

const SelectType = ({history}) => {


    return(
      <Section>
        <div id="contents">
          <dl className="first_info">
            <dt>가입방식을 선택 해 주세요.</dt>
            <dd>
              어디아파는 이메일 회원 가입 외에도<br />SNS계정으로도 회원가입을
              할 수 있습니다.
            </dd>
          </dl>
          <ul className="join_select">
            <li className="mail"><a href="#" onClick={() => history.push('./terms')}>이메일로 회원가입</a></li>
            <li className="kakao"><a href="#">카카오로 회원가입</a></li>
            <li className="naver"><a href="#">네이버로 회원가입</a></li>
            <li className="apple"><a href="#">애플아이디로 회원가입</a></li>
            <li className="google"><a href="#">구글아이디로 회원가입</a></li>
          </ul>
        </div>
        </Section>
    )
}

export default withRouter(SelectType);