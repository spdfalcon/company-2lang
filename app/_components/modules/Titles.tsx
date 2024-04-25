import { TitleProps } from "@/app/_types/types";
import { useTranslations } from "next-intl";
import React from "react";

const Titles: React.FC<TitleProps> = ({ title, desc, first }) => {
  const t = useTranslations("home");
  return (
    <div>
      <div className="top text-center flex flex-col gap-3">
        <h1 className="font-cinema text-3xl">
          {first ? (
            <>
              <span className="gradient-orange text-transparent bg-clip-text">
                {t('lovelcode')}
              </span>
              {"   "}
              <span className="">{t(title)}</span>
            </>
          ) : (
            <>
              <span className="">{t(title)}</span>
              {"   "}
              <span className="gradient-orange text-transparent bg-clip-text">
                {t('lovelcode')}
              </span>
            </>
          )}
        </h1>
        <h3 className=" text-xs font-light">{t(desc)}</h3>
      </div>
    </div>
  );
};

export default Titles;
