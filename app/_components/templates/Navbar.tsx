"use client";
import useEn from "@/app/_hooks/UseLang/useEn";
import useFa from "@/app/_hooks/UseLang/useFa";
import i18n from "@/app/_i18n";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const clickhandleren = () => {
    useEn();
  };
  const clickhandlerfa = () => {
    useFa();
  };
  return (
    <div className="">
      <h1>{t("name")}</h1>
      <div className="flex flex-col gap-10">
        <button onClick={clickhandleren}>clicken</button>
        <button onClick={clickhandlerfa}>clickfa</button>
      </div>
    </div>
  );
}
