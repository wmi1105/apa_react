import React, { useState } from "react";
import TextMultiCheck from "component/ai/TextMultiCheck";
import TextUnitCheck from "component/ai/TextUnitCheck";
import Header from "component/ai/Header";

//임시데이터
import json from "component/ai/data";
import Help from "component/ai/Help";
import { Pagination } from "swiper";

const AiContainer = (props) => {
  const [data, setData] = useState(json[0]);

  const onClickPage = (val) => {
    //before / next
  };

  return (
    <>
      {/* <Header
            title={data.questionName}
            stepSize = {json.length}
        /> */}

      {/* <TextMultiCheck /> */}
      <TextUnitCheck />

      <footer id="footer" className="footer_area">
        <p>
          <button type="button" onClick={() => onClickPage('before')}>이전 질문</button>
        </p>
        <p>
          <button type="button" onClick={() => onClickPage('next')}>다음 질문</button>
        </p>
      </footer>
      {/* <Help /> */}
    </>
  );
};

export default AiContainer;
