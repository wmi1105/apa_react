import React from 'react';
import Footer from 'pages/inc/Footer';
import Header from 'pages/inc/Header';
import Nav from 'pages/inc/Nav';

// wrap="member"
// header={false}
// footer={false}
// nav={true}
// navOption={{
//     headerId: "close",
//     headerPath: (0 => history.push('/home')),
//     title: "회원가입완료",
// }}

const Container = (props) => {

    return(
        <div id="wrap" className={props.wrap}>
            {props.header && <Header />}
            {props.nav && <Nav {...props.navOption} />}

            {props.children}

            {props.footer && <Footer />}
        </div>
    )
}

export default Container;