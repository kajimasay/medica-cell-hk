import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      title: "Cell Vision Global",
      heroText: "Medica Cell — Human Amniotic Stem Cell Serum Essence",
      heroSubtext: "Official Information Page for Hong Kong Market",
      contact: "Contact Us",
      submit: "Submit Form",
      name: "Your Name",
      email: "Email Address",
      organization: "Organization/Company",
      message: "Inquiry Details",
      products: "Products",
      evidence: "Brand & Quality",
      compliance: "Compliance Statement",
    },
  },
  ja: {
    translation: {
      title: "Cell Vision Global",
      heroText: "Medica Cell｜人類羊膜幹細胞血清美容液",
      heroSubtext: "香港市場官方資訊頁",
      contact: "聯絡我們",
      submit: "送出表單",
      name: "您的姓名",
      email: "電郵地址",
      organization: "所屬機構／公司名稱",
      message: "查詢內容",
      products: "產品",
      evidence: "品牌與品質",
      compliance: "合規聲明",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ja", // デフォルト言語
  fallbackLng: "en",
  interpolation: { 
    escapeValue: false 
  },
});

export default i18n;
