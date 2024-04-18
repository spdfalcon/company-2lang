"use client";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navlink({ title, href }: any) {
  const pathname = usePathname();
  const localActive = useLocale()
  return (
      <Link
        className={`${pathname === `/${localActive}${href}` ? "gradient-orange" : ""}`}
        href={href}
      >
        {title}
      </Link>
  );
}
