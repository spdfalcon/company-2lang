import BriefFeacher from "@/app/_components/modules/BriefFeacher";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
const BriefMd = () => {
  const t = useTranslations("home");
  return (
    <>
      <div className="flex flex-col px-[100px]">
        <div className="flex gap-14 w-full mt-40">
          <div className="r basis-1/2">
            <div className="w-full h-full">
              <div className="relative w-fit h-fit">
                <Image
                  alt=""
                  src={"/home/brief/briefmd.png"}
                  width={554}
                  height={619}
                ></Image>
                <div className="absolute w-1/2 h-20 bg-second_dark rounded-[20px] right-1/4 -bottom-10 flex flex-col justify-center text-center">
                  <span className="text-[26px]">35</span>
                  <span className="text-sm ">
                    {t("asuccessfulprojectintheportfolioofthelovelcodeteam")}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="l basis-1/2 flex flex-col gap-14">
            <div className="top flex flex-col gap-4">
              <div className="title">
                <div className="flex font-cinema text-[40px]">
                  <h2 className="gradient-orange text-transparent bg-clip-text">
                    {t("lovelcode")}
                  </h2>
                  <h2 className="">{t("ataglance")}</h2>
                </div>
                <h2 className="font-light">
                  {t("weareleadersinpromotingonlinebusinesses")}
                </h2>
              </div>
              <p className="text-lg ">{t("lowellcodewasbuiltin1402")}</p>
              <p className="text-lg ">{t("briefdesc")}</p>
            </div>
            <div className="down grid grid-cols-2 gap-x-20 gap-y-12">
              <BriefFeacher
                src="/home/brief/magic.svg"
                title="eyecatchingandexclusiveappearance"
              ></BriefFeacher>
              <BriefFeacher
                src="/home/brief/magic.svg"
                title="instantsupport"
              ></BriefFeacher>
              <BriefFeacher
                src="/home/brief/magic.svg"
                title="standardwebsitedesign"
              ></BriefFeacher>
              <BriefFeacher
                src="/home/brief/magic.svg"
                title="+2yearsofworkexperience"
              ></BriefFeacher>
            </div>
          </div>
        </div>
        <div className="relative h-[233px] w-full  rounded-[30px] mt-[200px] overflow-hidden">
          <Image
            className="blur-sm"
            alt=""
            src={"/home/brief/phonemd.png"}
            fill
          ></Image>
          <div className="absolute top-0 left-0 w-full h-full bg-second_dark/90 flex justify-center items-center">
            <div className="z-10 text-center flex flex-col gap-[15px] px-8">
              <h3 className="text-[40px] font-normal font-cinema ">{t("phonetitle")}</h3>
              <p className="font-light">{t("phonedesc")}</p>
              <p>09305712252</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BriefMd;
