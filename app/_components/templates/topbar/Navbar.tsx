"use client";
import React, { ChangeEvent } from "react";
import AdsMd from "./AdsMd";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function Navbar() {
  const router = useRouter();
  const localActive = useLocale();
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(`/${nextLocale}`);
  };
  return (
    <div className="sticky top-6 w-full  flex justify-between  px-5">
      <div className="mt-6 md:hidden">
        <img src="/navbar/hamber.svg" alt="" />
      </div>
      <div className="flex gap-4">
        <div className="mt-6">
          <img src="/navbar/icon.png" alt="" />
        </div>
        <AdsMd></AdsMd>
      </div>
      <div className="flex items-center gap-3 mt-6 h-fit">
        <select
          defaultValue={localActive}
          onChange={onSelectChange}
          className="bg-background outline-none hidden md:block "
          name=""
          id=""
        >
          <option value="fa">Fa</option>
          <option value="en">En</option>
        </select>
        <span className="w-px h-7 bg-white/15 hidden md:block"></span>
        <div className="  rounded-full size-10 bg-white/10 flex justify-center items-center">
          <div className="rounded-full size-7 bg-background flex justify-center items-center">
            <img src="/navbar/user.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
