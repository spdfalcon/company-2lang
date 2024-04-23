'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import Plan from '@/app/_components/modules/home/Plan';
export default function AboutUs() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Plan></Plan></SwiperSlide>
        <SwiperSlide><Plan></Plan></SwiperSlide>
        <SwiperSlide><Plan></Plan></SwiperSlide>
        <SwiperSlide><Plan></Plan></SwiperSlide>
        <SwiperSlide><Plan></Plan></SwiperSlide>
        <SwiperSlide><Plan></Plan></SwiperSlide>
        <SwiperSlide><Plan></Plan></SwiperSlide>
      </Swiper>
    </>
  )
}
