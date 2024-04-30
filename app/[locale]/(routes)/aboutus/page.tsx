import SelectLang from "@/app/_components/templates/topbar/SelectLang";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function AboutUs() {
  const t = useTranslations("menu");
  return (
    <>
      <div className="flex justify-center ">
        <div className="w-full px-8 py-12">
          <div className="flex justify-between w-full">
            <Image
              alt=""
              src={"/footer/icon.png"}
              width={65.52}
              height={43.71}
            ></Image>
            <i className="bi bi-x-lg"></i>
          </div>
          <div>
            <div className="flex flex-col gap-9 mt-12 text-xs">
              <Link href={"/"}>{t("portfolio")}</Link>
              <Link href={"/"}>{t("websitedesignfee")}</Link>
              <Link href={"/"}>{t("articles")}</Link>
              <Link href={"/"}>{t("aboutus")}</Link>
              <Link href={"/"}>{t("contactus")}</Link>
              <SelectLang></SelectLang>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
