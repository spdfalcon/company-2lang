import { BriefFeacherProps } from "@/app/_types/types";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const BriefFeacher: React.FC<BriefFeacherProps> = ({ title, src }) => {
    const t = useTranslations('home')
  return (
    <>
      <div className="relative bg-second_dark shadow-btn w-[170px] h-[66px] lg:w-[200px] lg:h-[66px] rounded-[18px] flex justify-center items-end text-sm pb-3">
        <span>{t(title)}</span>
        <div className="absolute size-12 rounded-full bg-background border-4 border-white/10 -top-6 flex justify-center items-center">
          <Image
            alt=""
            src={src}
            width={17}
            height={17}
          ></Image>
        </div>
      </div>
    </>
  );
};

export default BriefFeacher;
