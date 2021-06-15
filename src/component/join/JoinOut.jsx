import React from "react";
import Section from "component/common/Section";
import FixChkButton from "component/common/FixChkButton";

const JoinOut = ({onClick}) => {
  return (
    <>
      <Section>
        <div id="contents">
          <strong class="out_desc">
            회원 탈퇴하시기 전에
            <br />
            안내사항을 확인해 주세요.
          </strong>
          <dl class="sec_info">
            <dt>1. 개인정보 및 이용기록 삭제 안내</dt>
            <dd>
              <p>
                회원님의 개인정보 및 이용 기록은 모두 삭제되며 삭제된 계정은
                복구할 수 없습니다. 관련 법령이 정한 일정기간동안 개인정보를
                보유할 필요가 있을 경우에는 법인 정한 기간동안 개인정보를 보유
                또는 처리할 수 있습니다.
              </p>
            </dd>
            <dt>2. 개인 게시물 정보처리 안내</dt>
            <dd>
              <p>
                회원님께서 작성하신 게시글 또는 댓글, 평가 및 요청등의 게시물은
                탈퇴 후에도 삭제되지 않고 유지되오니, 회원탈퇴 전에 삭제하시기
                바랍니다.
                <br />
                <br />
                SNS 가입의 경우 가입하신 SNS에서 어디아파 서비스와 연결된 계정을
                해제해 주셔야 삭제가 완료 됩니다.
              </p>
            </dd>
          </dl>
        </div>
      </Section>

      <FixChkButton
        btnLabel="탈퇴하기"
        chkLabel="모든 정보를 삭제하는 것에 동의합니다."
        onClick={onClick}
      />
    </>
  );
};

export default JoinOut;
