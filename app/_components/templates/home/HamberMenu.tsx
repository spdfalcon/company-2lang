import Image from "next/image";
import Link from "next/link";
import React from "react";
import SelectLang from "../topbar/SelectLang";
import { useLocale, useTranslations } from "next-intl";

export default function HamberMenu({ setIsShow }: any) {
  const t = useTranslations("menu");
  const localActive = useLocale();

  return (
        <div className="px-8 py-12 bg-black w-full h-screen">
          <div className="flex justify-between w-full">
            <Image
              alt=""
              src={"/footer/icon.png"}
              width={65.52}
              height={43.71}
            ></Image>
            <i
              onClick={() => setIsShow((priv: any) => !priv)}
              className="bi bi-x-lg cursor-pointer p-1"
            ></i>
          </div>
          <div>
            <div className="flex flex-col gap-9 mt-12 text-xs">
              <Link
                onClick={() => setIsShow((priv: any) => !priv)}
                href={`/${localActive}/portfolio`}
              >
                {t("portfolio")}
              </Link>
              <Link
                onClick={() => setIsShow((priv: any) => !priv)}
                href={`/${localActive}/Tariff`}
              >
                {t("websitedesignfee")}
              </Link>
              <Link
                onClick={() => setIsShow((priv: any) => !priv)}
                href={`/${localActive}/articles`}
              >
                {t("articles")}
              </Link>
              <Link
                onClick={() => setIsShow((priv: any) => !priv)}
                href={`/${localActive}/aboutus`}
              >
                {t("aboutus")}
              </Link>
              <Link
                onClick={() => setIsShow((priv: any) => !priv)}
                href={`/${localActive}/contactus`}
              >
                {t("contactus")}
              </Link>
              <SelectLang></SelectLang>
            </div>
          </div>
        </div>
  );
}
