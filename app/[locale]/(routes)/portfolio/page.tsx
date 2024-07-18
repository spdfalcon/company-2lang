import PortfolioFilter from "@/app/_components/modules/porfolio/PortfolioFilter";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="mt-[100px] container">
      <div>
        <div className="relative header px-5 flex flex-col items-center gap-6">
          <h1 className="text-3xl font-cinema">نمونه کارهای طراحی سایت</h1>
          <div className="flex gap-4 md:bg-second_dark shadow-md md:mt-10">
            <Image
              alt="نمونه کار های لاولکد"
              src={"/portfolio/1.png"}
              width={399}
              height={228}
              className="hidden md:block"
            ></Image>
            <div className="p-3 ">
              <h2 className="text-2xl hidden md:block ">
                +260 نمونه کار طراحی سایت حرفه ای اختصاصی
              </h2>
              <p className="text-sm md:mt-5 md:text-base">
                نمونه کار طراحی سایت های فروشگاهی، خبری و طراحی سایت آموزشی و
                ... را که در توی این صفحه مشاهده می کنی همه پروژه های اجرا شده
                کسب و کارهای آنلاینی اند که درحال کار هستند. همه این نمونه
                کارهای طراحی سایت با سورسی بهینه و طبق استاندارهای گوگل طراحی
                شده این ادعا به پشتوانه طراحی بی نظیر و پیاده سازی قوی و باکیفیت
                سایت های بسیاری برای برندها و استارتاپ های معتبر ایران انجام
                شده.
              </p>
            </div>
          </div>
          <h2 className="absolute -top-10 text-3xl bg-gradient-to-b from-[#FFFFFF] to-[#030712] text-transparent bg-clip-text font-bold opacity-20">
            portfolio
          </h2>
        </div>
        <div className="filter md:mt-20">
          <PortfolioFilter></PortfolioFilter>
        </div>
      </div>
    </div>
  );
}
