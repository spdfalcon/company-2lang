"use client";

import i18n from "@/app/_i18n";
import { useEffect } from "react";

export default function UseLang() {
  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang) {
      if (lang === "en") {
        i18n.changeLanguage("en");
        document.dir = "ltr";
      } else if (lang === "fa") {
        i18n.changeLanguage("fa");
        document.dir = "rtl";
      }
    } else {
      localStorage.setItem("lang", "fa");
      document.dir = "rtl";
    }
  }, []);

  return null;
}
