import { useTranslations } from "next-intl";
import React from "react";
import Navlink from "./NavLink";
export default function Menu() {
  const t = useTranslations("menu");
  const navLinks = [
    { title: "mainpage", href: "/" },
    { title: "portfolio", href: "/" },
    { title: "websitedesignfee", href: "/" },
    { title: "articles", href: "/" },
    { title: "aboutus", href: "/aboutus" },
    { title: "contactus", href: "/" },
  ];
  return (
    <div>
      <div className="px-[27px] py-5 bg-red-300 rounded-full text-sm flex gap-4">
        {navLinks.map((link) => (
          <Navlink href={link.href} title={t(link.title)}></Navlink>
        ))}
      </div>
    </div>
  );
}
