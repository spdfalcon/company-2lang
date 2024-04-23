"use client";
import React from "react";
import Plan from "../../modules/home/Plan";
import Titles from "../../modules/Titles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
export default function Plans() {
  return (
    <div>
      <div className="mt-16 ">
        <Titles
          title="thecostofwebsitedesignplans"
          lovelcode="lovelcode"
          desc="specialplanscustomersthebestandhighestquality"
        ></Titles>
      </div>
      <div className="md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={-200}
          className="mySwiper"
          autoplay={{
            delay: 2500,
          }}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <Plan></Plan>
          </SwiperSlide>
          <SwiperSlide>
            <Plan></Plan>
          </SwiperSlide>
          <SwiperSlide>
            <Plan></Plan>
          </SwiperSlide>
          <SwiperSlide>
            <Plan></Plan>
          </SwiperSlide>
          <SwiperSlide>
            <Plan></Plan>
          </SwiperSlide>
          <SwiperSlide>
            <Plan></Plan>
          </SwiperSlide>
          <SwiperSlide>
            <Plan></Plan>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
