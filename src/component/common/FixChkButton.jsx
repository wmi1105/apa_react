import React, { useState } from "react";

const FixChkButton = ({ btnLabel, chkLabel, onClick }) => {
    const [check, setCheck] = useState(false);

    return(
        <footer id="footer" className="footer_area last_btn">
          <div className="agr_btn">
            <div className="agr_check">
              <label className="normal_check">
                <input type="checkbox" title="동의합니다 선택" onChange={() => setCheck(!check)} />
                <span className="fake"></span>
                <span className="txt">{chkLabel}</span>
              </label>
            </div>
            <p className="btn50">
              <button type="button" onClick={onClick} disabled={!check}>
                {btnLabel}
              </button>
            </p>
          </div>
        </footer>
      )
};

export default FixChkButton;
