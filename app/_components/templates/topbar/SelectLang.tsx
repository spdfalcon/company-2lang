"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";

export default function SelectLang() {
  const pathname = usePathname();
  const newpathname = pathname.substring(3);
  const router = useRouter();
  const localActive = useLocale();
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(`/${nextLocale}${newpathname}`);
  };

  return (
    <div>
      <select
        defaultValue={localActive}
        onChange={onSelectChange}
        className="bg-transparent outline-none cursor-pointer"
        name=""
        id=""
      >
        <option value="fa">Fa</option>
        <option value="en">En</option>
      </select>
    </div>
  );
}
