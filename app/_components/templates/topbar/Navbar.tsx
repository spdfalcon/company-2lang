"use client";
import React, { useState } from "react";
import AdsMd from "./AdsMd";
import Menu from "./Menu";
import SelectLang from "./SelectLang";
import Image from "next/image";
import HamberMenu from "../home/HamberMenu";
export default function Navbar() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="">
      <div className="sticky top-6 w-full  flex justify-between items-center md:items-start px-5">
        <div
          onClick={() => setIsShow((priv) => !priv)}
          className="mt-16 md:hidden cursor-pointer p-1"
        >
          <Image width={18.33} height={12} src="/navbar/hamber.svg" alt="" />
        </div>
        <div className="flex gap-4">
          <div className="mt-16">
            <Image width={65} height={43.37} src="/navbar/icon.png" alt="" />
          </div>
          <AdsMd></AdsMd>
        </div>
        <div className="hidden md:flex mt-16">
          <Menu></Menu>
        </div>
        <div className="flex items-center gap-3 mt-16 h-fit">
          <div className=" hidden md:block">
            <SelectLang></SelectLang>
          </div>
          <span className="w-px h-7 bg-white/15 hidden md:block"></span>
          <div className="  rounded-full size-10 bg-white/10 flex justify-center items-center">
            <div className="rounded-full size-7 bg-background flex justify-center items-center">
              <Image
                width={10.91}
                height={12.36}
                src="/navbar/user.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden w-full h-full duration-300 fixed top-0 z-50 ${
          isShow ? `rtl:right-0 ltr:left-0` : `rtl:-right-full ltr:-left-full`
        }`}
      >
        <HamberMenu setIsShow={setIsShow}></HamberMenu>
      </div>
      {isShow ? (
        <div
          onClick={() => setIsShow((priv) => !priv)}
          className="top-0 left-0 absolute w-full h-full bg-white/65 z-40"
        ></div>
      ) : null}
    </div>
  );
}
