"use client";
import React from "react";
import SliderPortfoliosMd from "../../templates/home/Portfolios/SliderPortfoliosMd";
import SliderPortfolios from "../../templates/home/Portfolios/SliderPortfolios";
import Btn from "../Btn/Btn";
import Image from "next/image";
import { useTranslations } from "next-intl";

const PortfolioFilter = () => {
  const t = useTranslations("home");
  return (
    <div>
      <div className="mt-6 rtl:ps-5 ltr:pe-5">
        <div className="rtl:rounded-s-lg ltr:rounded-e-lg flex text-nowrap overflow-auto gap-4  *:flex *:items-center *:justify-center bg-second_dark text-white pl-5 ltr:pr-5 text-xs shadow-md shadow-black/65">
          <div className="px-9 py-4 gradient-orange rounded-lg font-medium">
            همه
          </div>
          <div className="">سایت فروشگاهی</div>
          <div>سایت آموزشی</div>
          <div>سایت شرکتی</div>
          <div>سایت شخصی</div>
          <div>دیجیتال مارکتینگ</div>
          <div>سایت خبری</div>
          <div>Ui/Ux</div>
        </div>
      </div>
      <div className="mt-28 lg:grid lg:grid-cols-12">
        <div className="lg:col-span-8">
          <SliderPortfolios></SliderPortfolios>
          <SliderPortfoliosMd></SliderPortfoliosMd>
        </div>
        <div className="lg:col-span-4 mt-9 bg-second_dark p-5 flex flex-col rounded-2xl">
          <h3>
            برای مشاوره در حوزه طراحی سایت، فروشگاه اینترنتی و یا اپلیکیشن
            موبایل با ما در ارتباط باشید:
          </h3>
          <form className="flex flex-col gap-4 mt-6">
            <input
              placeholder="پست الکترونیک"
              className="bg-white/5 px-4 py-3 rounded-2xl"
              type="text"
              name=""
              id=""
            />
            <textarea
              placeholder="متن پیام"
              className="bg-white/5 px-4 py-3 rounded-2xl h-60"
              name=""
              id=""
            ></textarea>
            <div className="flex justify-center">
              <Btn
                bg="gradient"
                title="placeanorderforwebsitedesign"
                href=""
                type="box5"
              ></Btn>
            </div>
          </form>
          <div className="flex justify-center">
            <div className="relative  h-[156px] mt-[65px] rounded-[22px] flex flex-col items-center gap-[15px] overflow-hidden justify-center">
              <div className="z-10 text-center flex flex-col gap-[15px] px-8">
                <h3 className="text-2xl font-cinema ">{t("phonetitle")}</h3>
                <p className="text-xs font-light">{t("phonedesc")}</p>
                <a href="tel:09305712252">09305712252</a>
              </div>

              <Image
                className="blur-sm"
                fill
                alt="/home/brief/phone.png"
                src={"/home/brief/phone.png"}
              ></Image>
              <div className="absolute top-0 left-0 w-full h-full bg-second_dark/90 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioFilter;
