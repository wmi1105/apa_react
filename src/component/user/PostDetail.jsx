import React, { useState } from "react";
import FixButton from "component/inc/FixButton";
import Section from "component/inc/Section";

const PostDetail = ({ address, onClick }) => {
  const [input, setInput] = useState("");

  
  const onClickHandler = () => {
    let addr = `${address.load + ((input !== '')?', '+input:'') + address.extra}`

    onClick(addr); //전체주소
  };

  return (
    <>
      <Section>
        {/* 상세주소 입력 */}
        <div id="contents">
          <ul className="add">
            <li>{address.post}</li>
            <li>{address.load} {address.extra}</li>
            <li>
              <span>지번</span>{address.old}
            </li>
          </ul>
          <ul className="inputs write pt10">
            <li>
              <p className="no_title">
                <label>
                  <input
                    type="text"
                    className="hangul2"
                    title="주소 입력"
                    placeholder="상세주소를 입력해 주세요."
                    value = {input}
                    onChange = {(e) => setInput(e.target.value)}
                  />
                </label>
              </p>
            </li>
          </ul>
          <ul className="s_infos">
            <li>* 어디아파는 도로명 주소를 사용합니다. </li>
            <li>
              * 2016년 8월 1일 부터 5자리 우편번호 사용이 의무화 되었습니다.
            </li>
          </ul>
        </div>
      </Section>

      <FixButton
        label="저장하기"
        btnDisable={false}
        onClick={onClickHandler}
      />
    </>
  );
};

export default PostDetail;
