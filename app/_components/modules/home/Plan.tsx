import React from "react";
import FeaturesPlan from "./FeaturesPlan";
import Btn from "../Btn/Btn";
import { PlanProps } from "@/app/_types/types";
import { useTranslations } from "next-intl";

const Plan:React.FC<PlanProps> =({title})=> {
  const t = useTranslations('home')
  return (
    <div className="flex justify-center">
      <div className=" mt-10 px-5 pb-5 bg-second_dark w-[273px] border-[1px] rounded-[20px]">
        <div className="justify-center text-center items-center">
          <span className="px-8 py-3 text-xs bg-[#5200FF]/10 inline-block rounded-b-[15px]">
            {t(title)}
          </span>
        </div>
        <div className="mt-6 text-xs flex flex-col gap-5">
          <FeaturesPlan
            width={18}
            height={18}
            count={4}
            src="/home/plans/star.svg"
            title={'sitespeed'}
          ></FeaturesPlan>
          <FeaturesPlan
            width={18}
            height={18}
            count={2}
            src="/home/plans/star.svg"
            title={'customization'}
          ></FeaturesPlan>
          <FeaturesPlan
            width={18}
            height={18}
            count={1}
            src="/home/plans/check.svg"
            title={'technicalseo'}
          ></FeaturesPlan>
          <FeaturesPlan
            width={18}
            height={18}
            count={1}
            src="/home/plans/check.svg"
            title={'changethecolortoyourtaste'}
          ></FeaturesPlan>
          <FeaturesPlan
            width={18}
            height={18}
            count={1}
            src="/home/plans/check.svg"
            title={'fulluserpaneltutorial'}
          ></FeaturesPlan>
          <FeaturesPlan
            title={'freesupport'}
            text="6months"
          ></FeaturesPlan>
          <FeaturesPlan title={'uiux'} text="ready"></FeaturesPlan>
          <FeaturesPlan title={'executiontime'} text="10workingdays"></FeaturesPlan>
        </div>
        <div className="flex mt-[30px] items-center justify-center gap-2 ">
          <span className="text-sm">شروع قیمت از : 10 </span>
          <div className="flex flex-col">
          <span className="text-[10px]">میلیون</span>
          <span className="text-[10px]">تومان</span>
          </div>
        </div>
        <div className="mt-3">
        <Btn bg="gradient" href="/" title="Requestregistration" type="box6"></Btn>
        </div>
      </div>
    </div>
  );
}



export default Plan