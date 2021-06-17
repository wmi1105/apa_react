import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,Pagination,Navigation,EffectCoverflow
} from 'swiper/core';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Autoplay,Pagination,Navigation, EffectCoverflow]);

/* 
<SwipSlider
    items={items}
    swipPage={(page) => onChangeSwip(page)}
    options={{
      effect: "coverflow",
      direction: "vertical",
      slidesPerView: 5,
      loop: false
    }}
  />
*/

const SwipSlider = ({ items, swipPage, options}) => {
  const swiperRef = useRef();

  const onSlideChange = () => {
    const nowPage = swiperRef.current.swiper.realIndex + 1;
    swipPage(nowPage);
  };

  return (
    <Swiper
      ref={swiperRef}
      className="mySwiper"
      speed={400}
      onSlideChange={onSlideChange}
      {...options}
    >
      {items.map((item, idx) => (
        <SwiperSlide key={idx}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipSlider;


