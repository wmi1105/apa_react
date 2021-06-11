import React, { useEffect, useState } from "react";
import Section from "component/inc/Section";
import FixButton from "component/inc/FixButton";
import ConvertInput from "component/inc/ConvertInput";
import { emailValueCheck, passwordValueCheck } from "js/common";

const JoinInfo = ({ info, onSubmit }) => {
  const [btnDisable, setBtnDisable] = useState(true);

  const [input, setInput] = useState({
    name: "윤개똥",
    phone: "010-1111-1111",
    email: "",
    password: "",
    passwordCheck: "",
  });

  //비밀번호 input type password <-> text 전환
  const [inputType, setInputType] = useState({
    password: "password",
    passwordCheck: "password",
  });

  //입력값 글자수, 조합 체크
  const [valueCheck, setValueCheck] = useState({
    email: true,
    password: true,
    passwordCheck: true,
  });

  const onClickHandler = () => {
    //입력값 유효성 체크
    const tmp = {
      email : emailValueCheck(input.email),
      password : passwordValueCheck(input.password),
      passwordCheck : (input.password === input.passwordCheck)
    }
    
    //유효하지 않은 입력값이 있으면 return
    if(Object.keys(tmp).find((item) => !tmp[item])){
      setValueCheck(tmp);
      return false;
    }

    
    onSubmit(input);
  };

  useEffect(() => {
    //input중 빈값이 있으면 버튼 비활성
    if(Object.keys(input).find((item) => input[item] === '')){
      setBtnDisable(true);
    }else{
      setBtnDisable(false);
    }
  }, [input]);

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
                      value={input.phone}
                      className="phone_key"
                      title="휴대폰번호 입력"
                      placeholder="휴대폰번호를 입력해 주세요."
                      readOnly
                    />
                  </label>
                </p>
                {/* {!valueCheck.phone && (
                  <p className="info">휴대폰번호 형식이 올바르지 않습니다.</p>
                )} */}
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
                {!valueCheck.email && (
                  <p className="info">이메일 형식이 올바르지 않습니다.</p>
                )}
              </li>
              <li>
                <p>
                  <label>
                    <span>비밀번호</span>
                    <input
                      type={inputType.password}
                      value={input.password}
                      className="pass_key pass_prev"
                      title="비밀번호 입력"
                      placeholder="영문+숫자+특수문자조합 8~16자"
                      onChange={(e) =>
                        setInput({ ...input, password: e.target.value })
                      }
                      // readOnly
                    />
                    <ConvertInput
                      type={inputType.password}
                      onClick={(type) =>
                        setInputType({ ...inputType, password: type })
                      }
                    />
                  </label>
                </p>
                {!valueCheck.password && (
                  <p className="info">8~16자리 이상 입력해주세요. </p>
                )}
              </li>
              <li>
                <p>
                  <label>
                    <span>비밀번호</span>
                    <input
                      type={inputType.passwordCheck}
                      value={input.passwordCheck}
                      className="pass_key_a"
                      title="비밀번호 입력"
                      placeholder="한번 더 입력해 주세요."
                      onChange={(e) =>
                        setInput({ ...input, passwordCheck: e.target.value })
                      }
                      // readOnly
                    />
                    <ConvertInput
                      type={inputType.passwordCheck}
                      onClick={(type) =>
                        setInputType({ ...inputType, passwordCheck: type })
                      }
                    />
                  </label>
                </p>
                {!valueCheck.passwordCheck && (
                  <p className="info">비밀번호가 일치하지 않습니다.</p>
                )}
              </li>
            </ul>
          </form>
        </div>
      </Section>

      <FixButton
        label="확인"
        btnDisable={btnDisable}
        onClick={onClickHandler}
      />
    </>
  );
};

export default JoinInfo;
