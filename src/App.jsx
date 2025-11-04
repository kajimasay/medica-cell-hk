import { useTranslation } from "react-i18next";
import { useCallback } from "react";

export default function App() {
  const { t, i18n } = useTranslation();

  const toggleLang = useCallback(() => {
    const languages = ["zh-HK", "en", "ja"];
    const currentIndex = languages.indexOf(i18n.language);
    const nextIndex = (currentIndex + 1) % languages.length;
    i18n.changeLanguage(languages[nextIndex]);
  }, [i18n]);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Cell Vision Global Logo" 
              className="h-10 w-10 rounded-xl object-contain bg-black"
              loading="lazy"
            />
            <div className="leading-tight">
              <h1 className="text-lg font-semibold">{t("title")}</h1>
              <p className="text-xs text-neutral-500">{t("subtitle")}</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#products" className="hover:opacity-70">{t("products")}</a>
            <a href="#evidence" className="hover:opacity-70">{t("evidence")}</a>
            <a href="#compliance" className="hover:opacity-70">{t("compliance")}</a>
            <a href="#contact" className="hover:opacity-70">{t("contact")}</a>
            <button
              onClick={toggleLang}
              className="border px-3 py-1 rounded text-sm ml-4"
            >
              {i18n.language === "zh-HK" ? "EN" : 
               i18n.language === "en" ? "日本語" : "繁體中文"}
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-b from-neutral-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">{t("badge")}</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
              {t("heroText")}<br className="hidden md:block" />
              {t("heroSubtext")}
            </h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              {t("heroDescription")}
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#products" className="rounded-2xl px-5 py-3 bg-neutral-900 text-white text-sm font-medium hover:opacity-90">{t("viewProducts")}</a>
              <a href="#contact" className="rounded-2xl px-5 py-3 border text-sm font-medium hover:bg-neutral-50">{t("contactUs")}</a>
            </div>
            <ul className="mt-6 text-sm text-neutral-600 space-y-1 list-disc pl-5">
              <li>{t("feature1")}</li>
              <li>{t("feature2")}</li>
              <li>{t("feature3")}</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl border shadow-sm bg-neutral-100" />
            <p className="absolute bottom-3 left-3 text-xs text-neutral-500">{t("imageNote")}</p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="flex items-end justify-between">
            <h3 className="text-2xl md:text-3xl font-semibold">{t("coreProducts")}</h3>
            <p className="text-sm text-neutral-500">{t("productNote")}</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <article className="p-5 rounded-3xl border shadow-sm hover:shadow-md transition">
              <h4 className="text-lg font-semibold">{t("productTitle")}</h4>
              <p className="mt-2 text-sm text-neutral-600">{t("productDescription")}</p>
              <ul className="mt-3 text-sm text-neutral-600 space-y-1 list-disc pl-5">
                <li>{t("productFeature1")}</li>
                <li>{t("productFeature2")}</li>
                <li>{t("productFeature3")}</li>
              </ul>
            </article>
            <article className="p-5 rounded-3xl border shadow-sm bg-neutral-50">
              <h4 className="text-lg font-semibold">{t("futureProducts")}</h4>
              <p className="mt-2 text-sm text-neutral-600">{t("futureProductsDesc")}</p>
            </article>
          </div>
        </div>
      </section>

      {/* EVIDENCE */}
      <section id="evidence" className="bg-neutral-50 border-t">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <h3 className="text-2xl md:text-3xl font-semibold">{t("brandBackground")}</h3>
          <div className="mt-6 rounded-3xl border bg-white p-6 shadow-sm text-sm text-neutral-700 space-y-2">
            <p>• {t("brandPoint1")}</p>
            <p>• {t("brandPoint2")}</p>
            <p>• {t("brandPoint3")}</p>
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section id="compliance" className="bg-neutral-50 border-t">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <h3 className="text-2xl md:text-3xl font-semibold">{t("complianceTitle")}</h3>
          <div className="mt-6 rounded-3xl border bg-white p-6 shadow-sm text-sm text-neutral-700 space-y-3">
            <p>{t("complianceText1")}</p>
            <p>{t("complianceText2")}</p>
            <p>{t("complianceText3")}</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white border-t">
        <div className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">{t("contactUs")}</h3>
            <p className="mt-4 text-neutral-600">Cell Vision Global Limited（CVG）</p>
            <div className="mt-4 text-sm text-neutral-700 space-y-1">
              <p>{t("addressZh")}</p>
              <p>{t("addressEn")}</p>
              <p>{t("email")}</p>
              <p>{t("phone")}</p>
            </div>
            <p className="mt-4 text-xs text-neutral-500">{t("copyright")}</p>
          </div>
          <form
            action="https://formspree.io/f/xrboyrdj"
            method="POST"
            className="rounded-3xl border p-6 shadow-sm bg-neutral-50"
          >
            {/* CSRF保護のための隠しフィールドを追加 */}
            <input type="hidden" name="_subject" value="Contact Form Submission" />
            <input type="hidden" name="_cc" value="backup@cellvisionglobal.com" />
            
            <div className="grid gap-4">
              <input
                className="w-full rounded-xl border px-4 py-3"
                type="text"
                name="name"
                placeholder={t("name")}
                required
                maxLength="100" // 文字数制限を追加
              />
              <input
                className="w-full rounded-xl border px-4 py-3"
                type="email"
                name="email"
                placeholder={t("email")}
                required
                maxLength="100"
              />
              <input
                className="w-full rounded-xl border px-4 py-3"
                type="text"
                name="organization"
                placeholder={t("organization")}
                maxLength="100"
              />
              <textarea
                className="w-full rounded-xl border px-4 py-3 min-h-[120px]"
                name="message"
                placeholder={t("message")}
                required
                maxLength="1000" // メッセージの文字数制限
              ></textarea>

              <button
                type="submit"
                className="rounded-2xl px-5 py-3 bg-neutral-900 text-white text-sm font-medium hover:opacity-90"
              >
                {t("submit")}
              </button>
            </div>

            <p className="mt-3 text-xs text-neutral-500">
              {t("formNote")}
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
