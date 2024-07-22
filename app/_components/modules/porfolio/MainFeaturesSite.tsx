"use client";
import React, { useState } from "react";

const MainFeaturesSite = () => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className="relative">
      <h2 className="title  font-cinema text-xl text-center ">
        امکانات اصلی سایت شرکتی آزاسیت
      </h2>
      <div className="items p-5">
        <ul
          className={`md:h-full md:grid md:grid-cols-3  px-5 list-disc flex flex-col gap-4 mt-5 text-sm ${
            isShow ? "h-52 overflow-hidden" : "h-full"
          } `}
        >
          <li>طراحی سایت با وردپرس و ووکامرس</li>
          <li>ظاهر سایت دلخواه</li>
          <li>صفحه ساز گرافیکی</li>
          <li>پنل مدیریت پیشرفته</li>
          <li>طراحی سایت با وردپرس و ووکامرس</li>
          <li>ظاهر سایت دلخواه</li>
          <li>صفحه ساز گرافیکی</li>
          <li>پنل مدیریت پیشرفته</li>
          <li>طراحی سایت با وردپرس و ووکامرس</li>
          <li>ظاهر سایت دلخواه</li>
          <li>صفحه ساز گرافیکی</li>
          <li>پنل مدیریت پیشرفته</li>
        </ul>
      </div>
      <div className="relative md:hidden">
        <div
          onClick={() => setIsShow((priv) => !priv)}
          className={`absolute ${
            isShow ? "bg-gradient-to-t from-second_dark to-second_dark/75" : ""
          }  w-full h-32 bottom-0 cursor-pointer`}
        >
          <span className="absolute bottom-10 text-sm left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            {isShow ? "مشاهده همه" : null}
            <i
              className={`bi bi-chevron-double-down duration-500 ${
                isShow ? "rotate-0" : "rotate-180"
              }`}
            ></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainFeaturesSite;
