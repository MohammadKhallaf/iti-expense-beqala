import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// import Backend from "i18next-http-backend";
import arabicTranslation from "./ar/translation.json";
i18n
  //   .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: true,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    resources: {
      ar: {
        translation: arabicTranslation,
      },
    },
  });

export default i18n;
