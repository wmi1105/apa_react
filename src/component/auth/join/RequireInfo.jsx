import React, { useEffect, useState } from "react";
import Footer from "component/inc/Footer";
import Section from "component/inc/Section";

const RequireInfo = ({onSubmit}) => {
  const [input, setInput] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  const [typeCheck, setTypeCheck] = useState({
    phone: true,
    email: true,
    password: true,
    passwordCheck: true,
  })

  const onClickHandler = () => {
    //onSubmit
  }

  useEffect(() => {
    const object = {...input};
    delete object.name;

    Object.keys(object).map(key => {
      if(object[key] !== ''){
        
      }
      return null;
    })
    
  }, [input])


  return (
    <>
      <Section>
        <div id="contents">
          <form action="" method="post" className="normal_form">
            <dl className="first_info">
              <dt>필수 정보 입력</dt>
              <dd>회원가입 시 필수 항목을 입력해 주세요.</dd>
            </dl>
            <ul className="inputs write">
              <li>
                <p>
                  <label>
                    <span>이름</span>
                    <input
                      type="text"
                      value={input.name}
                      className="hangul"
                      title="이름 입력"
                      placeholder="이름을 입력해 주세요."
                      readOnly
                    />
                  </label>
                </p>
              </li>
              <li>
                <p>
                  <label>
                    <span>휴대폰번호</span>
                    <input
                      type="text"
                      vlaue={input.phone}
                      className="phone_key"
                      title="휴대폰번호 입력"
                      placeholder="휴대폰번호를 입력해 주세요."
                      readOnly
                    />
                  </label>
                </p>
                {!typeCheck.phone && <p className="info">
                  휴대폰번호 형식이 올바르지 않습니다.
                </p>
}
              </li>
              <li>
                <p>
                  <label>
                    <span>이메일</span>
                    <input
                      type="text"
                      value={input.email}
                      className="mail_key"
                      title="이메일 입력"
                      placeholder="이메일을 입력해 주세요."
                      onChange={(e) =>
                        setInput({ ...input, email: e.target.value })
                      }
                      // readOnly
                    />
                  </label>
                </p>
                {!typeCheck.email && <p className="info">이메일 형식이 올바르지 않습니다.</p>}
              </li>
              <li>
                <p>
                  <label>
                    <span>비밀번호</span>
                    <input
                      type="password"
                      value={input.password}
                      className="pass_key pass_prev"
                      title="비밀번호 입력"
                      placeholder="영문+숫자+특수문자조합 8~16자"
                      onChange={(e) =>
                        setInput({ ...input, password: e.target.value })
                      }
                      // readOnly
                    />
                  </label>
                </p>
                {!typeCheck.password && <p className="info">8~16자리 이상 입력해주세요. </p>}
              </li>
              <li>
                <p>
                  <label>
                    <span>비밀번호</span>
                    <input
                      type="password"
                      value={input.passwordCheck}
                      className="pass_key_a"
                      title="비밀번호 입력"
                      placeholder="한번 더 입력해 주세요."
                      onChange={(e) =>
                        setInput({ ...input, passwordCheck: e.target.value })
                      }
                      // readOnly
                    />
                  </label>
                </p>
                {!typeCheck.passwordCheck && <p className="info">비밀번호가 일치하지 않습니다.</p>}
              </li>
            </ul>
          </form>
        </div>
      </Section>

      <Footer>
        <p className="btn50">
          <button type="button" onClick={onClickHandler} disabled>
            확인
          </button>
        </p>
      </Footer>
    </>
  );
};

export default RequireInfo;
