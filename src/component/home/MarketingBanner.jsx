import React from "react";
import text_mbanner from "image/thum/text_mbanner.png";

const MarketingBanner = (props) => {
  return (
    <>
      <p className="m_banner">
        <button type="button">
          <img src={text_mbanner} alt="" />
        </button>
      </p>
    </>
  );
};

export default MarketingBanner;
