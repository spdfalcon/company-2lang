import i18n from "i18next";
import en from "./en";
import fa from "./fa";
import { initReactI18next } from "react-i18next";
const resources = {
  en: {
    translation: en,
  },
  fa: {
    translation: fa,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng:'fa',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
