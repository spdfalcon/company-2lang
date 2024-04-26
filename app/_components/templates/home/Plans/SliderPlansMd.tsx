"use client";
import Plan from "@/app/_components/modules/home/Plan";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
export default function SliderPlansMd() {
  return (
    <div>
      <div className="hidden md:block">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          className="mySwiper"
          autoplay={{
            delay: 2500,
          }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <Plan title="economicdesignplan"></Plan>
          </SwiperSlide>
          <SwiperSlide>
            <Plan title="economicdesignplan"></Plan>
          </SwiperSlide>
          <SwiperSlide>
            <Plan title="economicdesignplan"></Plan>
          </SwiperSlide>
          <SwiperSlide>
            <Plan title="economicdesignplan"></Plan>
          </SwiperSlide>
          <SwiperSlide>
            <Plan title="economicdesignplan"></Plan>
          </SwiperSlide>
          <SwiperSlide>
            <Plan title="economicdesignplan"></Plan>
          </SwiperSlide>
          <SwiperSlide>
            <Plan title="economicdesignplan"></Plan>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
