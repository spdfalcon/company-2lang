import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Brief = () => {
  const t = useTranslations("home");
  return (
    <>
      <div className="px-5">
        <div className="mt-16">
          <div className="flex justify-center items-center">
            <div className="title text-center">
              <div className="flex justify-center font-cinema text-[25px] md:text-[40px]">
                <h2 className="gradient-orange text-transparent bg-clip-text">
                  {t("lovelcode")}
                </h2>
                <h2 className="">{t("ataglance")}</h2>
              </div>
              <h2 className="font-light text-xs md:text-base text-gray_text">
                {t("weareleadersinpromotingonlinebusinesses")}
              </h2>
            </div>
          </div>
        </div>
        <p className="mt-6 text-sm leading-7">
          {t("lowellcodewasbuiltin1402")}
        </p>
        <p className="text-sm leading-7">{t("briefdesc")}</p>
        <div className="flex justify-center mt-5">
          <div className="flex flex-col items-center w-[232px] h-[75px] bg-main_dark rounded-2xl justify-center shadow-btn mb-5">
            <span className="text-xl">35</span>
            <span className="text-xs">
              {t("asuccessfulprojectintheportfolioofthelovelcodeteam")}
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-80 h-[156px] mt-[65px] rounded-[22px] flex flex-col items-center gap-[15px] overflow-hidden justify-center">
            <div className="z-10 text-center flex flex-col gap-[15px] px-8">
              <h3 className="text-2xl font-cinema ">{t("phonetitle")}</h3>
              <p className="text-xs font-light">{t("phonedesc")}</p>
              <p>09305712252</p>
            </div>

            <Image
              className="blur-sm"
              fill
              alt="/home/brief/phone.png"
              src={"/home/brief/phone.png"}
            ></Image>
            <div className="absolute top-0 left-0 w-full h-full bg-second_dark/90 "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brief;
