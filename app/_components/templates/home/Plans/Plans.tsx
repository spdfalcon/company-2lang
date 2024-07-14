import React from "react";
// Import Swiper styles
import Btn from "@/app/_components/modules/Btn/Btn";
import { useTranslations } from "next-intl";
import Link from "next/link";
import SliderPlans from "./SliderPlans";
import SliderPlansMd from "./SliderPlansMd";

// import required modules
export default function Plans() {
  const t = useTranslations("home");
  return (
    <div>
      <div className="mt-16 md:px-[100px]">
        <div className="flex justify-center lg:justify-between text-center items-center">
          <div className="title">
            <div className="flex font-cinema text-[25px] md:text-[40px]">
              <h2 className="">{t("thecostofwebsitedesignplans")}</h2>
              <h2 className="gradient-orange text-transparent bg-clip-text">
                {t("lovelcode")}
              </h2>
            </div>
            <h2 className="font-light text-xs text-gray_text md:text-base">
              {t("specialplanscustomersthebestandhighestquality")}
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
      <SliderPlans></SliderPlans>
      <SliderPlansMd></SliderPlansMd>
      <div className="flex justify-center mt-[30px] md:hidden">
        <Btn
          shadow={true}
          type="box7"
          href="/"
          title="viewall"
          bg="background"
        ></Btn>
      </div>
    </div>
  );
}
