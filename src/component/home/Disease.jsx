import React, { useMemo } from "react";
import SwipSlider from "component/package/SwipSlider";
import test_dea from "image/thum/test_dea.png";

const contents = [
  {
    img: test_dea,
    category: "가정의학과",
    disease: "편도선염",
    comment:
      "1여러 원인으로 인해 전신 저항력이 감퇴 되었을 때 편도 내 세균으로 인한 급성 감염 질환입니다.",
  },
  {
    img: test_dea,
    category: "가정의학과",
    disease: "편도선염",
    comment:
      "2여러 원인으로 인해 전신 저항력이 감퇴 되었을 때 편도 내 세균으로 인한 급성 감염 질환입니다.",
  },
  {
    img: test_dea,
    category: "가정의학과",
    disease: "편도선염",
    comment:
      "3여러 원인으로 인해 전신 저항력이 감퇴 되었을 때 편도 내 세균으로 인한 급성 감염 질환입니다.",
  },
];

const Disease = (props) => {
  const items = useMemo(() => {
    return contents.map((item) => (
      <>
        <p className="img">
          <button type="button">
            <img src={item.img} alt="" />
          </button>
        </p>
        <dl>
          <dt>
            <button type="button">{item.category}</button>
          </dt>
          <dd>
            <button type="button">{item.disease}</button>
          </dd>
        </dl>
        <p className="desc">
          <button type="button">{item.comment}</button>
        </p>
      </>
    ));
  }, []);

  const setSwipPage = (page) => {
    console.log(page);
  };

  return (
    <>
      <article className="disease">
        {/* disease start */}
        <h2>신규질환 소개</h2>

        <SwipSlider
          items={items}
          swipPage={(page) => setSwipPage(page)}
          options={{
            loop:false,
            slidesPerView:1.7,
            centeredSlides:false,
            spaceBetween:14,
            updateOnWindowResize:true,
            navigation: true,
            pagination: true
          }}
        />

        <p className="more">
          <button type="button">HOME</button>
        </p>
      </article>
      {/* disease end */}
    </>
  );
};

export default Disease;
