import React from "react";
import ShareModal from "component/common/ShareModal";
import Detail from "component/nTalk/Detail";

const NtalkDetailContainer = ({ share, onShare }) => {
  return (
    <>
      <Detail />

      <footer id="footer" className="ntalk_footer">
        <p className="se_hos">
          <button type="button">병원찾기</button>
        </p>
        <p className="ntalk">
          <button type="button">건강N톡</button>
        </p>
      </footer>

      <ShareModal visible={share} onClickClose={() => onShare(false)} />
    </>
  );
};

export default NtalkDetailContainer;
