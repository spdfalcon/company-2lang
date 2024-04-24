"use client";
import React from "react";
import Plan from "../../../modules/home/Plan";
import Titles from "../../../modules/Titles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Btn from "@/app/_components/modules/Btn/Btn";

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
          spaceBetween={0}
          className="mySwiper"
          autoplay={{
            delay: 2500,
          }}
          modules={[Autoplay]}
          breakpoints={{
            500: {
              slidesPerView: 1,
              spaceBetween: -200,
            },
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
      <div className="flex justify-center mt-[30px]">
      <Btn shadow={true} type="box7" href="/" title="viewall" bg="background"></Btn>
      </div>
    </div>
  );
}
