import React from 'react';

/* 
<FixButton
    label=""
    btnDisable={btnDisable}
    onClick={props.onClick}
/>

*/

const FixButton = (props) => {

    if(!props) return null;
    const {label, btnDisable, onClick} = props;

    return(
        <footer id="footer" className="footer_area last_btn">
            <p className="btn50">
            <button 
                type="button" 
                disabled={btnDisable} 
                onClick={onClick}
                {...props.btnProps}
            >{label}</button>
            </p>
        </footer>
    );
}

export default FixButton;

