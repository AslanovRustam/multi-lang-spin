import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./locales/en/translation.json";
import translationAZ from "./locales/az/translation.json";
import translationDE from "./locales/de/translation.json";
import translationES from "./locales/es/translation.json";
import translationFR from "./locales/fr/translation.json";
import translationKZ from "./locales/kz/translation.json";
import translationPT from "./locales/pt/translation.json";
import translationBR from "./locales/br/translation.json";
import translationRU from "./locales/ru/translation.json";
import translationTR from "./locales/tr/translation.json";
import translationUZ from "./locales/uz/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  az: {
    translation: translationAZ,
  },
  de: {
    translation: translationDE,
  },
  es: {
    translation: translationES,
  },
  fr: {
    translation: translationFR,
  },
  kz: {
    translation: translationKZ,
  },
  pt: {
    translation: translationPT,
  },
  br: {
    translation: translationBR,
  },
  ru: {
    translation: translationRU,
  },
  tr: {
    translation: translationTR,
  },
  uz: {
    translation: translationUZ,
  },
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  // debug: true,
});

export default i18n;
