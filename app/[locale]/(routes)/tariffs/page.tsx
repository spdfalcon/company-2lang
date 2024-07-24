import Plans from "@/app/_components/templates/home/Plans/Plans";
import Portfolios from "@/app/_components/templates/home/Portfolios/Portfolios";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const page = () => {
  const t = useTranslations("home");
  return (
    <div className="mt-28 container">
      <div className="relative flex justify-center">
        <h1 className="font-cinema text-3xl lg:text-6xl">تعرفه طراحی سایت</h1>
        <h2 className="absolute -top-10 text-3xl bg-gradient-to-b from-[#FFFFFF] to-[#030712] text-transparent bg-clip-text font-bold opacity-20 lg:text-6xl">
          Website design fee
        </h2>
      </div>
      <div className="flex flex-col items-center rounded-2xl gap-5 mt-5 bg-second_dark px-10 md:p-3 pb-10 md:flex-row-reverse ">
        <Image
          className="md:hidden"
          alt=""
          src={"/tariffs/1.png"}
          width={320}
          height={210}
        ></Image>
        <Image
          className="hidden md:block"
          alt=""
          src={"/tariffs/1md.png"}
          width={320}
          height={210}
        ></Image>
        <div className="">
          <div className="flex flex-col gap-5 items-center md:items-start">
            <h2 className="md:text-[22px]">طراحی سایت با قیمت مناسب</h2>
            <p className="text-sm md:text-base leading-8 md:leading-9 ">
              در اینجا ما لیست قیمت طراحی سایت تمامی حوزه های طراحی سایت{" "}
              <span className="gradient-orange bg-clip-text text-transparent  ">
                لاول کد
              </span>{" "}
              ر را برای شما آماده کرده ایم. تنها کافیست که شما حوزه مورد نظر
              خودتان را انتخاب کنید و از هزینه طراحی سایت آن با خبر بشوید. در
              نظر داشته باشید که این قیمت ها، قیمت پایه هستند و برای طراحی سایت
              اختصاصی و وجود امکانات بیشتر می توانید با کارشناسان ما در ارتباط
              باشید.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center md: gap-5 mt-5">
            <h3 className="text-sm  font-bold">تماس با کارشناس ما</h3>
            <a
              className="flex gap-2 justify-center items-center gradient-orange px-6 py-[10px] rounded-xl rounded-br-none"
              href="tel:09305712252"
            >
              <span>09305712252</span>
              <i className="bi bi-telephone"></i>
            </a>
          </div>
        </div>
      </div>
      <Plans></Plans>
      <Portfolios></Portfolios>
      <div className="relative h-[233px] w-full  rounded-[30px] mt-[200px] overflow-hidden">
        <Image
          className="blur-sm"
          alt=""
          src={"/home/brief/phonemd.png"}
          fill
        ></Image>
        <div className="absolute top-0 left-0 w-full h-full bg-second_dark/90 flex justify-center items-center">
          <div className="z-10 text-center flex flex-col gap-[15px] px-8">
            <h3 className="text-[40px] font-normal font-cinema ">
              {t("phonetitle")}
            </h3>
            <p className="font-light">{t("phonedesc")}</p>
            <p>09305712252</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
