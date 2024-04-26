"use client"
import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import Portfolio from './Portfolio'
export default function SliderPortfolios() {
  return (
    <div className='md:hidden mt-9'>
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
            <Portfolio></Portfolio>
          </SwiperSlide>
          <SwiperSlide>
            <Portfolio></Portfolio>
          </SwiperSlide>
          <SwiperSlide>
            <Portfolio></Portfolio>
          </SwiperSlide>
          <SwiperSlide>
            <Portfolio></Portfolio>
          </SwiperSlide>
          <SwiperSlide>
            <Portfolio></Portfolio>
          </SwiperSlide>
          <SwiperSlide>
            <Portfolio></Portfolio>
          </SwiperSlide>
          <SwiperSlide>
            <Portfolio></Portfolio>
          </SwiperSlide>
          
        </Swiper>
    </div>
  )
}
