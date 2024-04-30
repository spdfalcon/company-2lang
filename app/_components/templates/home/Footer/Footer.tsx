import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const tm = useTranslations("menu");
  const th = useTranslations("home");
  return (
    <div className=" gap-y-9 mt-[100px] flex flex-col  py-11">
      <div className="logoandmenu relative overflow-hidden py-11">
        <div className="logo flex justify-center">
          <Image
            alt=""
            src={"/footer/icon.png"}
            width={65.52}
            height={43.71}
          ></Image>
          <div className="absolute w-full h-full bg-black/90 top-0 left-0 -z-10"></div>
        </div>
        <div className="menu grid grid-cols-2 *:flex *:justify-center mt-9 gap-y-[30px] text-xs">
          <Link href={"/"}>{tm("portfolio")}</Link>
          <Link href={"/"}>{tm("websitedesignfee")}</Link>
          <Link href={"/"}>{tm("articles")}</Link>
          <Link href={"/"}>{tm("aboutus")}</Link>
          <Link href={"/"}>{tm("contactus")}</Link>
        </div>
        <Image
          className="absolute top-0 left-0 blur-sm -z-20"
          alt=""
          src={"/footer/bgsm.png"}
          fill
        ></Image>
      </div>
      <div className="enamad flex justify-center gap-6">
        <Image
          alt=""
          src={"/footer/namad1.png"}
          width={101}
          height={115}
        ></Image>
        <Image
          alt=""
          src={"/footer/namad2.png"}
          width={101}
          height={115}
        ></Image>
      </div>
      <div className="p flex justify-center text-white/40 text-xs bg-background">
        {th("copy")}
      </div>
    </div>
  );
}
