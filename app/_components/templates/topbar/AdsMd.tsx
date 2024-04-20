import Image from "next/image";
import React from "react";

export default function AdsMd() {
  return (
    <>
      <div className="hidden relative overflow-hidden md:flex w-[100px] h-[180px] rounded-b-full">
        <Image
          width={100}
          height={180}
          className="blur-sm w-full h-full bg-cover bg-center"
          src="/Ads/adsMd.png"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 "></div>
        <div className="text-center absolute top-0  w-full h-full flex flex-col items-center justify-evenly text-white">
          <h3 className="">%50 تخفیف</h3>
          <h3 className="text-xs font-light">برای اولین ثبت سفارش</h3>
          <div className="l rounded-full bg-white text-black w-20 h-[25px] flex justify-center items-center text-xs">
            nr20a
          </div>
        </div>
      </div>
    </>
  );
}
