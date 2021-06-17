import Section from "component/common/Section";
import SwipSlider from "component/package/SwipSlider";
import React, { useEffect, useMemo, useState } from "react";


const UnitSlider = (props) => {
    const items = useMemo(() => {
        return [...Array(9)].map((n, idx) => (
            <>{166+idx}<span>cm</span></>
        ))
    }, [])

    const [value, setValue] = useState(items[0].props.children[0])

    const onChangeSwip = (page) => {
        const val = items[page-1];
        setValue(val.props.children[0])
    }

  return (
    <>
      <Section>
        <div id="contents">
          <article className="up_slide">
            <div className="swiper-container unit">
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

export default UnitSlider;
