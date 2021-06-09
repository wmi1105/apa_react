import React from "react";
import icn_ai from "image/common/icn_ai.svg";

const AiButton = (props) => (
  <p className="ai_Clinic">
    <button type="button">
      <img src={icn_ai} alt="AI 문진하러 가기" />
    </button>
  </p>
);

export default AiButton;
