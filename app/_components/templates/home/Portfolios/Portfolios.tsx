import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import Portfolio from "./Portfolio";

export default function Portfolios() {
  const t = useTranslations("home");
  return (
    <div >
      <div className="mt-16 px-5 md:px-[100px]">
        <div className="flex justify-center lg:justify-between  items-center">
          <div className="title">
            <div className="flex justify-center md:justify-normal font-cinema text-[25px] md:text-[40px] ">
              <h2 className="">{t("examplesofteamwork")}</h2>
              <h2 className="gradient-orange text-transparent bg-clip-text">
                {t("lovelcode")}
              </h2>
            </div>
            <h2 className="font-light text-xs md:text-base text-center md:text-start">
              {t("portfoliotitledesc")}
            </h2>
          </div>
          <Link
            className="w-[188px] h-[55px] rounded-2xl bg-second_dark justify-center items-center hidden lg:flex shadow-btn "
            href={""}
          >
            {t("viewall")}
          </Link>
        </div>
      </div>
      <div className="flex justify-center mt-9">
        <Portfolio></Portfolio>
      </div>
    </div>
  );
}
