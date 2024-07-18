import Image from "next/image";
import Link from "next/link";
import React from "react";
import SelectLang from "../topbar/SelectLang";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function HamberMenu({ setIsShow }: any) {
  const navLinks = [
    { id: 1, title: "mainpage", href: "/" },
    { id: 2, title: "portfolio", href: "/portfolio" },
    { id: 3, title: "websitedesignfee", href: "/Tariff" },
    { id: 4, title: "articles", href: "/articles" },
    { id: 5, title: "aboutus", href: "/aboutus" },
    { id: 6, title: "contactus", href: "/contactus" },
  ];
  const t = useTranslations("menu");
  const localActive = useLocale();
  const pathname = usePathname();

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
        <ul className="flex flex-col gap-9 mt-12 text-sm">
          {navLinks.map((link) => (
            <li className="cursor-pointer" key={link.id}>
              <Link
                onClick={() => setIsShow((priv: any) => !priv)}
                className={
                  pathname === `/${localActive}${link.href}`
                    ? "gradient-orange text-transparent bg-clip-text before:size-[2px] before:gradient-orange before:block relative before:absolute before:-top-px before:-right-1 before:rounded-full "
                    : pathname === `${link.href}${localActive}`
                    ? "gradient-orange text-transparent bg-clip-text before:size-[2px] before:gradient-orange before:block relative before:absolute before:-top-px before:-right-1 before:rounded-full "
                    : ""
                }
                href={`/${localActive}${link.href}`}
              >
                {t(link.title)}
              </Link>
            </li>
          ))}

          {/* <Link
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
              </Link> */}
        </ul>
        <div className="mt-5">
          <SelectLang></SelectLang>
        </div>
      </div>
    </div>
  );
}
