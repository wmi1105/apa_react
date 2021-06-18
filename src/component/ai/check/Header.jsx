import React from "react";
import people1 from "image/sub/people1.png";

/* 
<Header
    title=""
    stepSize = {array.length}
/>
*/

const Header = (props) => {
  const {title, step, stepSize, onClick} = props;
  const size = new Array(stepSize);
  
  return (
    <header id="header">
      {/* header start */}
      <h1 className="blind">AI 문진 진단하기</h1>
      <p className="user">
        <img src={people1} alt="" />
        <span>홍길동</span>(<span>남</span>/<span>40</span>세)
      </p>
      <p className="btn_reset">
        <button type="button">다시하기</button>
      </p>

      <p className="que">
        {title}

        <button
          type="button"
          className=" help click_show_evt"
          data-link-show="help_pop"
          onClick={onClick}
        >
          도움말
        </button>
      </p>
      <ul className="al_step">
        {[...size].map((n, idx) => (
          <li key={idx} className={step===idx?'on':''}>
            <p>
              {idx}단계 <span>진행중</span>
            </p>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
