'use client'
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent } from 'react'

export default function SelectLang() {
    const router = useRouter();
    const localActive = useLocale();
    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
      const nextLocale = e.target.value;
      router.replace(`/${nextLocale}`);
    };
  return (
    <div>
      <select
          defaultValue={localActive}
          onChange={onSelectChange}
          className="bg-background outline-none hidden md:block cursor-pointer"
          name=""
          id=""
        >
          <option value="fa">Fa</option>
          <option value="en">En</option>
        </select>
    </div>
  )
}
