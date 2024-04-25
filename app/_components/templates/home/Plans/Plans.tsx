"use client";
import React from "react";
import Plan from "../../../modules/home/Plan";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Btn from "@/app/_components/modules/Btn/Btn";
import { useTranslations } from "next-intl";
import Link from "next/link";

// import required modules
export default function Plans() {
  const t = useTranslations("home");
  return (
    <div>
      <div className="mt-16 md:px-[100px]">
        <div className="flex justify-center lg:justify-between text-center">
          <div className="title">
            <div className="flex font-cinema text-[25px] md:text-[40px]">
              <h2 className="">{t("thecostofwebsitedesignplans")}</h2>
              <h2 className="gradient-orange text-transparent bg-clip-text">
                {t("lovelcode")}
              </h2>
            </div>
            <h2 className="font-light text-xs md:text-base">
              {t("specialplanscustomersthebestandhighestquality")}
            </h2>
          </div>
          <Link
            className="w-[188px] h-[55px] rounded-2xl bg-second_dark justify-center items-center hidden lg:flex shadow-btn "
            href={""}
          >
            {t("viewall")}
          </Link>
        </div>
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
      <div className="flex justify-center mt-[30px] md:hidden">
        <Btn
          shadow={true}
          type="box7"
          href="/"
          title="viewall"
          bg="background"
        ></Btn>
      </div>
    </div>
  );
}
