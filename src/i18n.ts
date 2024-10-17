import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./locales/en.json";
import koTranslations from "./locales/ko.json";
import jaTranslations from "./locales/ja.json";
import ruTranslations from "./locales/ru.json";
import zhTranslations from "./locales/zh.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    ko: { translation: koTranslations },
    ja: { translation: jaTranslations },
    ru: { translation: ruTranslations },
    zh: { translation: zhTranslations },
  },
  lng: "ko", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
