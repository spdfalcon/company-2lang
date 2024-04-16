"use client";
import useEn from "@/app/_hooks/UseLang/useEn";
import useFa from "@/app/_hooks/UseLang/useFa";
import React from "react";
import { useTranslation } from "react-i18next";
import Ads from "./Ads";

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <>
      <div className="">
        <Ads></Ads>
      </div>
    </>
  );
}
