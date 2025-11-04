import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 言語ファイルをインポート
import zhHK from "./locales/zh-HK.js";
import en from "./locales/en.js";
import ja from "./locales/ja.js";

const resources = {
  "zh-HK": { translation: zhHK },
  en: { translation: en },
  ja: { translation: ja }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "zh-HK",
  fallbackLng: "en",
  interpolation: { 
    escapeValue: false 
  },
  debug: process.env.NODE_ENV === 'development',
});

export default i18n;
