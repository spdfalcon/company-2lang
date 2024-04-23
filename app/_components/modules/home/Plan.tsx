import React from "react";
import FeaturesPlan from "./FeaturesPlan";
import Btn from "../Btn/Btn";
import { PlanProps } from "@/app/_types/types";

const Plan:React.FC<PlanProps> =({title})=> {
  return (
    <div className="flex justify-center ">
      <div className=" mt-10 px-5 pb-5 bg-second_dark w-[273px] border-[1px] rounded-[20px]">
        <div className="justify-center text-center items-center">
          <span className="px-8 py-3 text-xs bg-[#5200FF]/10 inline-block rounded-b-[15px]">
            {title}
          </span>
        </div>
        <div className="mt-6 text-xs flex flex-col gap-5">
          <FeaturesPlan
            width={18}
            height={18}
            count={4}
            src="/home/plans/star.svg"
            title={"سرعت سایت:"}
          ></FeaturesPlan>
          <FeaturesPlan
            width={18}
            height={18}
            count={2}
            src="/home/plans/star.svg"
            title={"قابلیت سفارشی سازی :"}
          ></FeaturesPlan>
          <FeaturesPlan
            width={18}
            height={18}
            count={1}
            src="/home/plans/check.svg"
            title={"سئو تکنیکال"}
          ></FeaturesPlan>
          <FeaturesPlan
            width={18}
            height={18}
            count={1}
            src="/home/plans/check.svg"
            title={"تغییر رنگ به سلیقه شما"}
          ></FeaturesPlan>
          <FeaturesPlan
            width={18}
            height={18}
            count={1}
            src="/home/plans/check.svg"
            title={"اموزش کامل پنل کاربری :"}
          ></FeaturesPlan>
          <FeaturesPlan
            title={"پشتیبانی رایگان :"}
            text="6 ماهه"
          ></FeaturesPlan>
          <FeaturesPlan title={": UI / UX"} text="آماده"></FeaturesPlan>
          <FeaturesPlan title={"زمان اجرا :"} text="10 روز کاری"></FeaturesPlan>
        </div>
        <div className="flex mt-[30px] items-center justify-center gap-2 ">
          <span className="text-sm">شروع قیمت از : 10 </span>
          <div className="flex flex-col">
          <span className="text-[10px]">میلیون</span>
          <span className="text-[10px]">تومان</span>
          </div>
        </div>
        <div className="mt-3">
        <Btn bg="gradient" href="/" title="ثبت درخواست" type="box6"></Btn>
        </div>
      </div>
    </div>
  );
}



export default Plan