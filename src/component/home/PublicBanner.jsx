import React from "react";
import test_banner_shot from "image/thum/test_banner_shot.png";

//공익광고
const PublicBanner = (props) => {
  return (
    <>
      <p className="shot_banner">
        <button type="button">
          <img src={test_banner_shot} alt="" />
        </button>
      </p>
    </>
  );
};

export default PublicBanner;
