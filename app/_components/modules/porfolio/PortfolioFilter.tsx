"use client";
import React from "react";
import SliderPortfoliosMd from "../../templates/home/Portfolios/SliderPortfoliosMd";
import SliderPortfolios from "../../templates/home/Portfolios/SliderPortfolios";

const PortfolioFilter = () => {
  return (
    <div>
    <div className="mt-6 rtl:ps-5 ltr:pe-5">
      <div className="rtl:rounded-s-lg ltr:rounded-e-lg flex text-nowrap overflow-auto gap-4  *:flex *:items-center *:justify-center bg-second_dark text-white pl-5 ltr:pr-5 text-xs shadow-md shadow-black/65">
        <div className="px-9 py-4 gradient-orange rounded-lg font-medium">همه</div>
        <div className="">سایت فروشگاهی</div>
        <div>سایت آموزشی</div>
        <div>سایت شرکتی</div>
        <div>سایت شخصی</div>
        <div>دیجیتال مارکتینگ</div>
        <div>سایت خبری</div>
        <div>Ui/Ux</div>
      </div>
    </div>
    <div className="mt-28">
      <SliderPortfolios></SliderPortfolios>
      <SliderPortfoliosMd></SliderPortfoliosMd>
    </div>
    </div>
  );
};

export default PortfolioFilter;
