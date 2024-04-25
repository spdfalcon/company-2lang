import BriefFeacher from "@/app/_components/modules/BriefFeacher";
import Btn from "@/app/_components/modules/Btn/Btn";
import Titles from "@/app/_components/modules/Titles";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const BriefMd = () => {
  const t = useTranslations("home");
  return (
    <>
      <div className="flex gap-14 w-full px-[100px] mt-40">
        <div className="r basis-1/2">
          <div className="w-full h-full">
            <Image
              alt=""
              src={"/home/briefmd.png"}
              width={554}
              height={619}
            ></Image>
          </div>
        </div>
        <div className="l basis-1/2 flex flex-col gap-14">
          {/* <Titles desc="weareleadersinpromotingonlinebusinesses" first={true} title="ataglance"></Titles> */}
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
            {/* <div className="relative bg-second_dark shadow-btn w-[200px] h-[66px] rounded-[18px] flex justify-center items-end text-sm pb-3">
              <span>ظاهر چشم نواز و اختصاصی</span>
              <div className="absolute size-12 rounded-full bg-background border-4 border-white/10 -top-6 flex justify-center items-center">
                <Image alt="" src={'/home/brief/magic.svg'} width={17} height={17}></Image>
              </div>
            </div> */}
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
    </>
  );
};

export default BriefMd;
