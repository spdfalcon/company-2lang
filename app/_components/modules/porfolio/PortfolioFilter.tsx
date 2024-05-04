"use client";
import React from "react";

const PortfolioFilter = () => {
  return (
    <div className="mt-6 ps-5">
      <div className="rtl:rounded-s-lg ltr:rounded-e-lg h-[50px] overflow-auto lg:overflow-clip bg-white text-second_dark flex text-nowrap items-center *:h-full *:px-6 *:flex *:items-center">
        <div className="gradient-orange rounded-lg text-white text-xs">همه</div>
        <div className="">سایت فروشگاهی</div>
        <div>سایت آموزشی</div>
        <div>سایت شرکتی</div>
        <div>سایت شخصی</div>
        <div>دیجیتال مارکتینگ</div>
        <div>سایت خبری</div>
        <div>Ui/Ux</div>
      </div>
    </div>
  );
};

export default PortfolioFilter;
