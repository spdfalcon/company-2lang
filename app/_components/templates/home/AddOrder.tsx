import { useTranslations } from "next-intl";
import React from "react";
import Player from "./Player";
import Btn from "../../modules/Btn/Btn";
export default function AddOrder() {
  const t = useTranslations("home");
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
      <div className="mid">
        <Player></Player>
      </div>
      <div className="w-full down flex justify-center mt-5">
        <div className="md:hidden text-xs">
          <Btn
            bg="gradient"
            type="box7"
            href={"/"}
            title={t('placeanorderforwebsitedesign')}
          ></Btn>
        </div>
        <div className="hidden md:flex text-[18px]">
          <Btn
            bg="gradient"
            type="box2"
            href={"/"}
            title={t('placeanorderforwebsitedesign')}
          ></Btn>
        </div>
      </div>
    </div>
  );
}
