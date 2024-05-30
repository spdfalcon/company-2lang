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
          <div className="flex justify-center items-center mt-10">
          <div className="flex justify-center w-fit ">
          <div onClick={()=>swiperRef.current.slidePrev()} className="custom-prev cursor-pointer flex justify-center items-center bg-white/10 size-12 rounded-full">
          <i className="bi bi-arrow-right flex justify-center items-center"></i>
          </div>
          <div className="custom-pagination px-5" />
          <div onClick={()=>swiperRef.current.slideNext()} className="custom-next cursor-pointer flex justify-center items-center bg-white/10 size-12 rounded-full">
          <i className="bi bi-arrow-left flex justify-center items-center"></i>
          </div>
          </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
