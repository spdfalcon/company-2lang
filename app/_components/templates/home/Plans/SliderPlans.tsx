"use client"
import Plan from '@/app/_components/modules/home/Plan'
import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
export default function SliderPlans() {
  return (
    <div>
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
    </div>
  )
}
