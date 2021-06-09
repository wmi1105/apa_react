import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.scss";

const SwipSlider = ({ images, swipPage }) => {
  const swiperRef = useRef();

  const onSlideChange = () => {
    const nowPage = swiperRef.current.swiper.realIndex + 1;
    swipPage(nowPage);
  };

  return (
    <Swiper
      ref={swiperRef}
      className="mySwiper"
      slidesPerView={1}
      loop
      onSlideChange={onSlideChange}
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <img src={img} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwipSlider;
