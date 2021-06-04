import React, { useEffect, useRef, useState } from "react";
import { withRouter } from "react-router";
import { emailValueCheck, passwordValueCheck } from "js/common";
import Footer from "component/inc/Footer";
import Section from "component/inc/Section";

const LoginMail = ({history, onLogin}) => {
  const passwordRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btnDisable, setBtnDisable] = useState(true);

  const [inputCheck, setInputCheck] = useState({
    email: false,
    password: false,
  });

  const inputEmailKeypress = (e) => {
    //email input에서 enter입력하면 password에 포커스
    if (e.key === "Enter" && inputCheck.email) passwordRef.current.focus();
  };

  const inputEmailCheck = (e) => {
    //이메일 입력 체크
    const value = e.target.value;
    const check = emailValueCheck(value);
    setEmail(value);
    setInputCheck({ ...inputCheck, email: check });
  };

  const inputPasswordCheck = (e) => {
    //비밀번호 입력 체크
    const value = e.target.value;
    const check = passwordValueCheck(value);
    setPassword(value);
    setInputCheck({ ...inputCheck, password: check });
  };

  const onClickHandler = () => {
    onLogin({email, password});

    // setEmail('');
    // setPassword('');
  }

  useEffect(() => {
    //로그인버튼 활성 ctrl
    let disable = true;
    if(inputCheck.email && password.length > 8) disable = false;
    setBtnDisable(disable);
  }, [inputCheck, password]);

  return (
    <>
      <Section>
        <div id="contents">
          {/* contents start */}

          <div className="login_box">
            {/* login_box start */}
            <form action="" method="post" className="normal_form">
              <h2>로그인</h2>
              <ul className="inputs">
                <li>
                  <p>
                    <label>
                      <span>이메일</span>
                      <input
                        type="text"
                        value={email}
                        className="mail_key"
                        title="이메일 입력"
                        placeholder="이메일을 입력해 주세요."
                        onChange={inputEmailCheck}
                        onKeyPress={inputEmailKeypress}
                        // readOnly
                      />
                    </label>
                  </p>
                  {/* <p className="info">마지막으로 로그인한 계정입니다.</p> */}
                  {email !== "" && !inputCheck.email && (
                    <p className="info">이메일 형식이 올바르지 않습니다.</p>
                  )}
                </li>
                <li>
                  <p>
                    <label>
                      <span>비밀번호</span>
                      <input
                        type="password"
                        value={password}
                        ref={passwordRef}
                        className="pass_key"
                        title="비밀번호 입력"
                        placeholder="비밀번호를 입력해 주세요."
                        onChange={inputPasswordCheck}
                        // readOnly
                      />
                    </label>
                  </p>
                  {password !== "" && !inputCheck.password && (
                    <p className="info">비밀번호를 확인해 주세요.</p>
                  )}
                </li>
              </ul>
              <p
                className="lost"
                onClick={() => history.push("/find/password")}
              >
                <button type="button">비밀번호가 기억나지 않으세요?</button>
              </p>
            </form>
          </div>
          {/* login_box end */}
        </div>
      </Section>

      <Footer>
        <p className="btn50">
          <button type="button" onClick={onClickHandler} disabled={btnDisable}>
            로그인
          </button>
        </p>
      </Footer>
    </>
  );
};

export default withRouter(LoginMail);
