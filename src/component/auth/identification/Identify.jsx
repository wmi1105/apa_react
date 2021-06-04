import React from "react";

import img_cer from "../../../image/sub/img_cer.png";

const Identify = (props) => {
  return (
    <div id="contents">
      <dl className="first_info">
        <dt>본인인증</dt>
        <dd>
          병원 예약 및 AI 비대면 진료 서비스 이용을 위해
          <br />
          최초
          <span>1회 본인 인증</span>이 필요합니다.
          <br />
          <br />
          본인 인증 시 수집된 개인정보는
          <br />
          서비스 외 다른 용도로 사용되지 않습니다.
        </dd>
      </dl>
      <p className="mt40 txt_center">
        <img src={img_cer} alt="" />
      </p>
    </div>
  );
};

export default Identify;
