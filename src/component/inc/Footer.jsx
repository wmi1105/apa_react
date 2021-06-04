import React from 'react';

const Footer = (props) => {

    if(!props) return null;

    return(
        <footer id="footer" className="footer_area last_btn">
            {/* footer start */}
            {/* <p className="btn50"> */}
                {props.children}
            {/* </p> */}
            {/* onclick="alertJoin();" 로그인 실패시 실행  */}
            {/* footer end */}
        </footer>
    );
}

export default Footer;