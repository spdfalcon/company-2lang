"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
export default function Menu() {
  const navLinks = [
    { id: 1, title: "mainpage", href: "/" },
    { id: 2, title: "portfolio", href: "/portfolio" },
    { id: 3, title: "websitedesignfee", href: "/tariffs" },
    { id: 4, title: "articles", href: "/articles" },
    { id: 5, title: "aboutus", href: "/aboutus" },
    { id: 6, title: "contactus", href: "/contactus" },
  ];
  const localActive = useLocale();
  const t = useTranslations("menu");
  const pathname = usePathname();
  const mainPathName = pathname.split("/")[2];

  return (
    <div>
      <ul className="px-[27px] py-5 bg-background rounded-full text-sm flex gap-4 lg:gap-11">
        {navLinks.map((link) => (
          <li className="text-[10px] cursor-pointer lg:text-sm" key={link.id}>
            <Link
              className={
                `/${mainPathName}` === link.href
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
      </ul>
    </div>
  );
}
