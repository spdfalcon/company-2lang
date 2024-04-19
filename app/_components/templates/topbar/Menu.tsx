"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
export default function Menu() {
  const navLinks = [
    { id: 1, title: "mainpage", href: "/" },
    { id: 2, title: "portfolio", href: "/portfolio" },
    { id: 3, title: "websitedesignfee", href: "/Tariff" },
    { id: 4, title: "articles", href: "/articles" },
    { id: 5, title: "aboutus", href: "/aboutus" },
    { id: 6, title: "contactus", href: "/contactus" },
  ];
  const localActive = useLocale();
  const t = useTranslations("menu");

  return (
    <div>
      <ul className="px-[27px] py-5 bg-red-300 rounded-full text-sm flex gap-4">
        {navLinks.map((link) => (
          <li className="" key={link.id}>
            <Link href={`/${localActive}${link.href}`}>{t(link.title)}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
