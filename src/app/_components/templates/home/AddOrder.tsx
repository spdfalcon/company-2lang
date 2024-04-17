import { useTranslations } from "next-intl";
import React from "react";
export default function AddOrder() {
  const t = useTranslations('home')
  return (
    <div className="px-5 mt-11">
      <div className="top text-center flex flex-col gap-3">
        <h1 className="font-cinema text-3xl">
          <span className="">{t("professionaldigitalagencymarketing")}</span>
          {"   "}
          <span className="gradient-orange text-transparent bg-clip-text">
            {t("lovelcode")}
          </span>
        </h1>
        <h3 className=" text-xs">
          {t("weareatthesideofsettingupyourvirtualbusiness")}
        </h3>
      </div>
      <div className="mid"></div>
      <div className="down"></div>
    </div>
  );
}
