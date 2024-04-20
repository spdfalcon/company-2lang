import React from "react";
import AdsMd from "./AdsMd";
import Menu from "./Menu";
import SelectLang from "./SelectLang";
import Image from "next/image";
export default function Navbar() {
  
  return (
    <div className="sticky top-6 w-full  flex justify-between items-center md:items-start px-5">
      <div className="mt-16 md:hidden">
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
        <SelectLang></SelectLang>
        <span className="w-px h-7 bg-white/15 hidden md:block"></span>
        <div className="  rounded-full size-10 bg-white/10 flex justify-center items-center">
          <div className="rounded-full size-7 bg-background flex justify-center items-center">
            <Image width={10.91} height={12.36} src="/navbar/user.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
