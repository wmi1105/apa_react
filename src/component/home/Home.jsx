import React, { useEffect, useState } from "react";
import SwipSlider from "../common/SwipSlider";

import banner1 from "../../image/thum/img_mbanner_01.png";
import banner2 from "../../image/thum/img_mbanner_02.png";
import banner3 from "../../image/thum/img_mbanner_03.png";
import heart from "../../image/common/icn_mmenu_heart.svg";
import { setContents } from "../../js/common_pub";

const imageArr = [banner1, banner2, banner3];

const Home = (props) => {
  const [containerSize, setContainerSize] = useState(null);
  const [swipPage, setSwipPage] = useState(1);

  useEffect(() => {
    setContainerSize(setContents());
  }, []);

  return (
    <>
      {containerSize && (
        <section id="container" style={containerSize}>
          {/*  container start */}

          <div id="contents">
            {/*  contents start */}

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
                  <span className="swiper-pagination-current">{swipPage}</span>{" "}
                  /
                  <span className="swiper-pagination-total">
                    {imageArr.length}
                  </span>
                </div>
              </div>
              {/*  swiper_pag_wrap end */}
            </aside>
            {/*  mbanner end */}

            <nav className="my_menu">
              {/*  my_menu start */}
              <ul>
                <li>
                  <a href="#">
                    <span className="icon">
                      <img src={heart} alt="" />
                    </span>
                    <span>내 몸 관리</span>
                  </a>
                </li>
              </ul>
            </nav>
            {/*  my_menu end */}
          </div>
          {/*  contents end */}
        </section>
      )}
      {/*  container end */}
    </>
  );
};

export default Home;
