import React, { useMemo, useState } from "react";
import SwipSlider from "component/package/SwipSlider";

import banner1 from "image/thum/img_mbanner_01.png";
import banner2 from "image/thum/img_mbanner_02.png";
import banner3 from "image/thum/img_mbanner_03.png";

const imageArr = [banner1, banner2, banner3];

const Contents = (props) => {
  const [swipPage, setSwipPage] = useState(1);

  const items = useMemo(() => {
    return imageArr.map((img) => <img src={img} alt="" />);
  }, []);

  return (
    <>
      <aside className="mbanner">
        {/*  mbanner start */}

        <SwipSlider
          items={items}
          swipPage={(page) => setSwipPage(page)}
          options={{
            loop: true,
            centeredSlides: true,
            updateOnWindowResize: true,
            pagination: {
              el: ".mbanner .swiper-pagination",
              type: "fraction",
            },
          }}
        />
        {/*  swiper-container end */}

        <div className="swiper_pag_wrap">
          {/*  swiper_pag_wrap start */}
          <div className="swiper-pagination">
            <span className="swiper-pagination-current">{swipPage}</span> /
            <span className="swiper-pagination-total">{imageArr.length}</span>
          </div>
        </div>
        {/*  swiper_pag_wrap end */}
      </aside>
      {/*  mbanner end */}
    </>
  );
};

export default Contents;
