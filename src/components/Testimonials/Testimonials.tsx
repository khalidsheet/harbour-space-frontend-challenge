import React from "react";

import "swiper/css";
import "./Testimonials.css";
import "swiper/css/free-mode";

import { useSwiper, Swiper, SwiperSlide } from "swiper/react";

export default function Testimonials() {
  const swiper = useSwiper();

  return (
    <div className="testimonials">
      <div className="bg-image-mesh">
        <img src="../icons/mesh.png" alt="" />
      </div>
      <Swiper
        freeMode={true}
        draggable
        slidesPerView={1.6}
        centeredSlides
        spaceBetween={40}
      >
        <SwiperSlide>
          <div className="test">sss</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="test">sss</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="test">sss</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="test">sss</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="test">sss</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
