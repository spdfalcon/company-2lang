"use client";
import Image from "next/image";
import React from "react";

export default function Ads() {
  return (
    <div className="relative">
      <div className="w-full h-20 absolute top-0 left-0 overflow-hidden">
        <Image
          className="blur-sm"
          alt=""
          src={"/Ads/ads.png"}
          layout="fill"
        ></Image>
      </div>
      <div className="absolute top-0 left-0 bg-black/60 z-20 w-full h-20"></div>
      <div className="absolute top-8 z-40 flex w-full justify-between items-center px-5">
        <div className="flex gap-4">
          <div className="flex flex-col">
            <h3 className="font-medium text-sm">%50 تخفیف</h3>
            <h4 className="font-light text-[10px]">برای اولین ثبت سفارش</h4>
          </div>
          <span className="text-black bg-white w-20 h-6 rounded-full flex justify-center items-center text-xs">
            nr20a
          </span>
        </div>
        <div className="text-xs flex items-center ">
          <span>بستن</span>
          <i className="bi bi-x flex justify-center items-center"></i>
        </div>
      </div>
    </div>
  );
}
