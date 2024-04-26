"use client";
import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import Portfolio from './Portfolio'
import 'swiper/css/grid';
import { Grid } from 'swiper/modules';

const SliderPortfoliosMd = () => {
  return (
    <div className=' mt-9 hidden md:block'>
      <Swiper
          slidesPerView={2}
          spaceBetween={40}
          className="mySwiper"
          autoplay={{
            delay: 2500,
          }}
          modules={[Autoplay , Grid]}
          grid={{
            rows:2,
            fill:"row"
          }}
          breakpoints={{
            810: {
              slidesPerView: 3,
              spaceBetween: 40,
              grid:{
                rows:2,
                fill:'row'
              }
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
  );
};

export default SliderPortfoliosMd;
