import React, { useState } from "react";

//공통 컴포넌트
import Header from "component/ai/Header";
import Help from "component/ai/Help";
import Image from "component/common/Image";

//타입별 컴포넌트
import TextMultiCheck from "component/ai/TextMultiCheck"; //택스트 여러개 선택(checkbox)
import TextUnitCheck from "component/ai/TextUnitCheck";   //텍스트 한개 선택(radio)
import ImageMultiCheck from "component/ai/ImageMultiCheck"; //이미지+텍스트 여러개 선택
import ImageUnitCheck from "component/ai/ImageUnitCheck"; //이미지+텍스트 한개 선택
import ImageOnlyCheck from "component/ai/ImageOnlyCheck"; //이미지만 한개 선택
import TextWrite from "component/ai/TextWrite";     //직접입력
import ImageRLCheck from "component/ai/ImageRLCheck"; //이미지 왼,오 체크
import PeriodCheck from "component/ai/PeriodCheck"; //기간 체크
import NumberSlider from "component/ai/NumberSlider"; //숫자 범위 체크
import TextSlider from "component/ai/TextSlider"; //문자 범위 체크
import UnitSlider from "component/ai/UnitSlider"; //숫자+문자 범위 체크 

//임시데이터 - 삭제하면됨
import json from "component/ai/data"; 


const AiContainer = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const onClickHelp = () => {
    setModalVisible(true);
  };
  const [data, setData] = useState(json[0]);

  const onClickPage = (val) => {
    //before / next
  };

  return (
    <>
      <Header
        // title="혹시 이전에도 같은 부위에 비슷한 통증으로 치료받았던 적이 있나요? 아래 항목 중 선택해 주세요."
        title={data.questionName}
        stepSize={json.length}
        step={0}
        onClick={onClickHelp}
      />

      <TextMultiCheck />
      {/* <TextUnitCheck /> */}
      {/* <ImageMultiCheck /> */}
      {/* <ImageUnitCheck /> */}
      {/* <ImageOnlyCheck /> */}
      {/* <TextWrite /> */}
      {/* <ImageRLCheck /> */}
      {/* <PeriodCheck /> */}
      {/* <NumberSlider /> */}
      {/* <TextSlider /> */}
      {/* <UnitSlider /> */}


      <footer id="footer" className="footer_area">
        <p>
          <button type="button" onClick={() => onClickPage("before")}>
            이전 질문
          </button>
        </p>
        <p>
          <button type="button" onClick={() => onClickPage("next")}>
            다음 질문
          </button>
        </p>
      </footer>

      <Help
        targetId="help_pop"
        title="중강도 신체활동의 예"
        visible={modalVisible}
        onClick={() => setModalVisible(false)}
      >
        <p>
          빠르게 걷기, 복식테니스, 보통 속도로 자전거타기, 가벼운 물건 나르기,
          청소 등
        </p>
        <p>
          <Image src='thum/thum_test.png' alt="" />
        </p>
      </Help>
    </>
  );
};

export default AiContainer;
