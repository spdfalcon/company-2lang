"use client";
import Plan from "@/app/_components/modules/home/Plan";
import React, { useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
export default function SliderPlansMd() {
  const swiperRef:any = useRef(null)
  return (
    <div className="">
      <div className="hidden md:block">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
            el: ".custom-pagination", // کلاس سفارشی برای pagination
            bulletClass: "custom-bullet", // کلاس سفارشی برای bullet ها
            bulletActiveClass: "custom-bullet-active", // کلاس سفارشی برای bullet های فعال
          }}
          ref={swiperRef}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          className="mySwiper"
          autoplay={{
            delay: 2500,
          }}
          modules={[Autoplay, Pagination, Navigation]}
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
          <div className="flex justify-center">
          <div className="flex justify-center w-20">
          <div onClick={()=>swiperRef.current.slidePrev()} className="custom-prev cursor-pointer">
            Prev
          </div>
          <div className="custom-pagination" />
          <div onClick={()=>swiperRef.current.slideNext()} className="custom-next cursor-pointer">
            Next
          </div>
          </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
