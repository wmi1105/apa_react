import React from 'react';
import logo_top from "image/common/logo_top.svg";

import Home from './Home'

const HomeForm = ({history}) => {

    return(
        <>
        <div id="wrap" className="index">
            {/* wrap start */}

            <header id="header" className="normal_header">
            {/*  header start */}
            <h1 onClick={() => history.push('/index')}>
                <img src={logo_top} alt="어디아파" />
            </h1>
            <ul className="topmenu">
                <li className="alert new">
                <a href="#">알림</a>
                </li>
                <li className="camera">
                <a href="#">카메라</a>
                </li>
                <li className="menu">
                <a href="#">전체메뉴</a>
                </li>
            </ul>
            </header>
            {/*  header end */}

            <Home />

            <p className="lay_pop_blind"></p>
      </div>
      </>
            
    )
}

export default HomeForm;