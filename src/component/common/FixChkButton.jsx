import React from 'react';

const FixChkButton = (props) => (
    <footer id="footer" className="footer_area last_btn">
        <div className="agr_btn">
        <div className="agr_check">
            <label className="normal_check">
            <input type="checkbox" title="동의합니다 선택" />
            <span className="fake"></span>
            <span className="txt">{props.chkLabel}</span>
            </label>
        </div>
        <p className="btn50">
            <button type="button" onClick={props.onClick} disabled>
            {props.btnLabel}
            </button>
        </p>
        </div>
    </footer>
    );

export default FixChkButton;