import Btn from "@/app/_components/modules/Btn/Btn";
import MainFeaturesSite from "@/app/_components/modules/porfolio/MainFeaturesSite";
import ShowPortfolioMobile from "@/app/_components/modules/porfolio/ShowPortfolioMobile";
import ShowPortfolioPc from "@/app/_components/modules/porfolio/ShowPortfolioPc";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="container mt-16">
      <div className="bredcromp">
        <div className="rounded-md p-3 flex items-center gap-2 bg-second_dark text-badge w-fit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          <span className="text-xs">نمونه کار ها</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
          <span className="text-xs">شرکت آزاسیت</span>
        </div>
      </div>
      <div className="mt-32 relative header px-5 flex flex-col items-center gap-6">
        <h1 className="text-3xl font-cinema">نمونه کار شرکت آزاسیت</h1>
        <h2 className="absolute -top-10 text-3xl bg-gradient-to-b from-[#FFFFFF] to-[#030712] text-transparent bg-clip-text font-bold opacity-20">
          Company Azasit
        </h2>
        <p className="hidden lg:flex">
          نمونه کار طراحی سایت شرکتی آزاسیت یک شرکت اینترنتی با امکاناتی ویژه
          است. از جمله امکانات این نمونه کار شرکت می تواند به دسته بندی محصولات
          بر اساس برند، محصولات تخفیفی، پرفروش ترین و… همچنین قابلیت مقایسه چند
          کالا با یکدیگر اشاره نمود.
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <div className="show-portfolio flex flex-col items-center gap-4 lg:flex-row-reverse lg:items-start ">
          <ShowPortfolioPc></ShowPortfolioPc>
          <ShowPortfolioMobile></ShowPortfolioMobile>
        </div>
      </div>
      <div className=" bg-second_dark pt-5 rounded-md mt-10">
        <div className="px-5">
          <h2 className="text-xl font-cinema text-center lg:text-[40px]">
            نمونه طراحی سایت شرکتی آزاسیت
          </h2>
          <p className="text-sm mt-5 leading-7 lg:text-base">
            شرکت آزاسیت با مدیریت محمد گودرزی در سال 1403 با هدف گسترش فرهنگ
            استفاده از پارچه های الیاف طبیعی و مدلهای ایرانی شروع به فعالیت کرده
            و هم اکنون جزو پیشتازان این عرصه بوده که سادگی ، زیبایی و رنگ را
            زیبنده ی تن پوش های خود نموده. گام نهادن در وب‌سایت آزاسیت، حس قدم
            زدن در بوتیکی شیک و مدرن را به شما القا می‌کند.در این نمونه طراحی
            سایت با استفاده از رنگ‌هایی شاد و پویا، تصاویر باکیفیت از مدل‌ها و
            لباس‌ها، و چیدمانی منظم و دسته‌بندی‌شده، تجربه‌ای بصری دلنشین را
            برایتان به ارمغان می‌آورد و شما را به گشت و گذار در میان انبوه
            لباس‌های جذاب دعوت می‌کند.
          </p>
        </div>
        <div className="mt-5 flex flex-col gap-5 lg:flex-row justify-center items-center">
          <Btn
            shadow
            href="/"
            type="box6"
            bg="gradient"
            title="placeanorderforwebsitedesign"
          ></Btn>
          <Btn
            shadow
            href="/"
            type="box6"
            bg="background"
            title="placeanorderforwebsitedesign"
          ></Btn>
        </div>
        <div className="mt-10">
          <MainFeaturesSite></MainFeaturesSite>
        </div>
      </div>
    </div>
  );
};

export default page;
