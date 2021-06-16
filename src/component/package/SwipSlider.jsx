import React, { useMemo, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper/core';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Autoplay,Pagination,Navigation]);

const SwipSlider = ({ items, swipPage, options}) => {
  const swiperRef = useRef();

  const onSlideChange = () => {
    const nowPage = swiperRef.current.swiper.realIndex + 1;
    swipPage(nowPage);
  };

  // const options = useMemo(() => {
  //   if(paging)
  //     return {
  //       navigation:true,
  //       pagination:{
  //         el:".health .swiper-pagination",
	// 			  type:"bullets"
  //       }
  //     }
  //     else
  //     return null;
  // }, [paging])

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


