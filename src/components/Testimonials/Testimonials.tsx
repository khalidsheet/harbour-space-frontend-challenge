import React from "react";

import "swiper/css";
import "./Testimonials.css";
import "swiper/css/free-mode";

import { useSwiper, Swiper, SwiperSlide } from "swiper/react";
import Testimonial from "./components/Testimonial/Testimonial";

export default function Testimonials() {
  const swiper = useSwiper();

  return (
    <div className="testimonials">
      <div className="bg-image-mesh">
        <img src="../icons/Pattern.svg" alt="" />
      </div>
      <Swiper
        freeMode={true}
        draggable
        slidesPerView={1.6}
        centeredSlides
        spaceBetween={40}
        autoplay
        rewind
      >
        <SwiperSlide>
          <div className="test">
            <Testimonial />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="test">
            <Testimonial />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="test">
            <Testimonial />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="test">
            <Testimonial />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="test">
            <Testimonial />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
