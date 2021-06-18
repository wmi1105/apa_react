import Section from "component/common/Section";
import SwipSlider from "component/package/SwipSlider";
import React, { useState } from "react";

const items = ['통증없음','심한 통증','매우 심한 통증 매우 심한 통증','통증없음','심한 통증','매우 심한 통증','통증없음','심한 통증','매우 심한 통증']

const TextSlider = (props) => {
    const [value, setValue] = useState(items[0]);

    const onChangeSwip = (page) => {
      setValue(items[page-1])    
    }

  return (
    <>
      <Section>
        <div id="contents">
          <article className="up_slide">
            <div className="swiper-container han">
            <SwipSlider
              items={items}
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

export default TextSlider;
