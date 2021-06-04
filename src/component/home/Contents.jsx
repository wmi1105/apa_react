import React, { useState } from "react";
import SwipSlider from "../common/SwipSlider";

import banner1 from "image/thum/img_mbanner_01.png";
import banner2 from "image/thum/img_mbanner_02.png";
import banner3 from "image/thum/img_mbanner_03.png";

const imageArr = [banner1, banner2, banner3];

const Contents = (props) => {
  const [swipPage, setSwipPage] = useState(1);

  return (
    <>
      <aside className="mbanner">
        {/*  mbanner start */}

        <section className="swiper-container">
          <SwipSlider
            images={imageArr}
            swipPage={(page) => setSwipPage(page)}
          />
        </section>
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
