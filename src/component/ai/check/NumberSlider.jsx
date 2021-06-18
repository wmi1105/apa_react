import Section from "component/common/Section";
import SwipSlider from "component/package/SwipSlider";
import React, { useMemo, useState } from "react";

const NumberSlider = (props) => {
    const sideitem = useMemo(() => {
        return [...Array(9)].map((item, idx) => idx + 1);
    }, []);

    const [number, setNumber] = useState(sideitem[0]);
  
  const onChangeSwip = (page) => {
    const value = sideitem[page-1];
    setNumber(value)
}

  return (
    <>
      <Section>
        <div id="contents">
          <article className="up_slide">
          <div className="swiper-container">
            <SwipSlider
              items={sideitem}
              swipPage={(page) => onChangeSwip(page)}
              options={{
                effect: "coverflow",
                direction: "vertical",
                slidesPerView: 5,
                loop: false,
                centeredSlides: true,
                coverflowEffect:{
                  rotate: 0,
                  stretch: -36,
                  depth: 295,
                  modifier: 1.9,
                  slideShadows: false,
                },
                updateOnWindowResize: true,
              }}
            />
            </div>
          </article>
        </div>
      </Section>
    </>
  );
};

export default NumberSlider;
