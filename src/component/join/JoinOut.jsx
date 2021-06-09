import React from "react";
import Section from "component/inc/Section";
import FixButton from "component/inc/FixButton";

const JoinOut = (props) => {
  return (
    <>
      <Section>
        <div id="contents">
          <dl className="first_info">
            <dt>어디아파를 탈퇴하면</dt>
            <dd>
              서비스 이용 시 상담하셨던
              <span className="red">상담기록이 삭제</span>되고,
              <br />
              재가입 시에도 복구가 불가능합니다.
              <br />
              <br />
              그래도 탈퇴하시겠습니까?
            </dd>
          </dl>
        </div>
      </Section>

      <footer id="footer" className="footer_area last_btn">
        <div className="agr_btn">
          <div className="agr_check">
            <label className="normal_check">
              <input type="checkbox" title="동의합니다 선택" />
              <span className="fake"></span>
              <span className="txt">모든 정보를 삭제하는 것에 동의합니다.</span>
            </label>
          </div>
          <p className="btn50">
            <button type="button" disabled>
              탈퇴하기
            </button>
          </p>
        </div>
      </footer>
    </>
  );
};

export default JoinOut;
