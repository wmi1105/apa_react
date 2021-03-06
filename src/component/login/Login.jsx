import React from "react";
import { withRouter } from "react-router";
import Section from "component/common/Section";

const Login = ({ history }) => {

  return (
    <>
      <Section>
        <div id="contents">
          {/* contents start  */}

          <div className="login_box">
            {/* login_box start  */}
            <strong>어디 아파</strong>
            <p className="slogan">
              내 손 안의 작은 의사
              <br />
              어디아파!
            </p>
            <ul className="inputs">
              <li>
                <p>
                  <span>이메일</span>
                  <span onClick={() => history.push("/login/email")}>
                    이메일을 입력해 주세요.
                  </span>
                </p>
                <p className="info">마지막으로 로그인한 계정입니다.</p>
              </li>
              <li>
                <p>
                  <span>비밀번호</span>
                  <span onClick={() => history.push("/login/email")}>
                    비밀번호를 입력해 주세요.
                  </span>
                </p>
              </li>
            </ul>
            <ul className="links">
              <li>
                <button
                  type="button"
                  onClick={() =>
                    history.push("/auth/identification/phone/.find.email")
                  }
                >
                  이메일 찾기
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => history.push("/find/password")}
                >
                  비밀번호 찾기
                </button>
              </li>
              <li>
                <button type="button" onClick={() => history.push("/join")}>
                  회원가입
                </button>
              </li>
            </ul>
            <dl className="sns">
              <dt>간편하게 SNS 로그인</dt>
              <dd>
                <ul>
                  <li className="kakao on">
                    <button type="button" onClick={() => window.location.href='' }>
                      카카오톡으로 로그인<span>마지막 로그인 계정</span>
                    </button>
                  </li>
                  <li className="naver">
                    <button type="button" onClick={() => window.location.href=''}>
                      네이버로 로그인<span>마지막 로그인 계정</span>
                    </button>
                  </li>
                  <li className="apple">
                    <button type="button" onClick={() => window.location.href=''}>
                      애플로 로그인<span>마지막 로그인 계정</span>
                    </button>
                  </li>
                  <li className="google">
                    <button type="button" onClick={() => window.location.href=''}>
                      구글로 로그인<span>마지막 로그인 계정</span>
                    </button>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
          {/* login_box end  */}
        </div>
      </Section>
    </>
  );
};

export default withRouter(Login);
