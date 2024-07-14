import Btn from "@/app/_components/modules/Btn/Btn";
import Image from "next/image";
import React from "react";

export default function Portfolio() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 bg-second_dark p-4 rounded-[20px] relative w-[273px] h-[373]">
        <div className="absolute top-0 bg-second_dark left-1/2 -translate-x-1/2 rounded-b-[14px]  w-36 h-11 flex justify-center items-center z-50 text-xs">
          سایت فروشگاهی
        </div>
        <div className="relative w-[243px] h-[155px]">
          <Image alt="" src={"/home/portfolio/portfolio1.png"} fill></Image>
        </div>
        <div className="">
          <h3 className="title text-sm font-semibold">شرکت آزاسیت</h3>
        </div>
        <div>
          <p className="text-xs text-light_text">
            شرکت آسازیست اردم ، ارائه دهنده راهکار های ارگانیک برای دفع آفات
            است. تیم ما افتخار همکاری با این مجموعه بین المللی را داشته است.
          </p>
        </div>
        <Btn href="/" bg="gradient" title="viewdetails" type="box8"></Btn>
      </div>
    </div>
  );
}
