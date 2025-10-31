import { useTranslation } from "react-i18next";

export default function App() {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    const next = i18n.language === "ja" ? "en" : "ja";
    i18n.changeLanguage(next);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Cell Vision Global Logo" className="h-10 w-10 rounded-xl object-contain bg-black" />
            <div className="leading-tight">
              <h1 className="text-lg font-semibold">{t("title")}</h1>
              <p className="text-xs text-neutral-500">香港｜品牌與研發協作</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#products" className="hover:opacity-70">產品</a>
            <a href="#evidence" className="hover:opacity-70">品牌與品質</a>
            <a href="#compliance" className="hover:opacity-70">合規聲明</a>
            <a href="#contact" className="hover:opacity-70">聯絡</a>
            <button
              onClick={toggleLang}
              className="border px-3 py-1 rounded text-sm ml-4"
            >
              {i18n.language === "ja" ? "EN" : "日本語"}
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-b from-neutral-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">日本原廠技術授權 × 香港市場</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
              {t("heroText")}<br className="hidden md:block" />
              香港市場官方資訊頁
            </h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              我們與日本 CellPro Japan 合作，引進品牌「Medica Cell」人類羊膜幹細胞來源之美容精華液（美容用途）。頁面資訊僅作產品說明與客戶服務之用，實際成分、規格與使用方式以標籤與隨附文件為準。
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#products" className="rounded-2xl px-5 py-3 bg-neutral-900 text-white text-sm font-medium hover:opacity-90">查看產品</a>
              <a href="#contact" className="rounded-2xl px-5 py-3 border text-sm font-medium hover:bg-neutral-50">聯絡我們</a>
            </div>
            <ul className="mt-6 text-sm text-neutral-600 space-y-1 list-disc pl-5">
              <li>日本原廠監製與技術支援（CellPro Japan）</li>
              <li>美容用途之精華液配方（非醫療用途）</li>
              <li>成分資訊、SDS 等文件可於合作框架下提供</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl border shadow-sm bg-neutral-100" />
            <p className="absolute bottom-3 left-3 text-xs text-neutral-500">＊此處可放置產品形象圖或包裝圖</p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="flex items-end justify-between">
            <h3 className="text-2xl md:text-3xl font-semibold">核心產品（暫定）</h3>
            <p className="text-sm text-neutral-500">* 產品圖與技術文件可於合作後提供</p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <article className="p-5 rounded-3xl border shadow-sm hover:shadow-md transition">
              <h4 className="text-lg font-semibold">Medica Cell｜人類羊膜幹細胞血清美容液</h4>
              <p className="mt-2 text-sm text-neutral-600">定位於美容用途之精華液產品（非醫療用途）。產品詳情以實際包裝標示與官方文件為準，品牌與技術由日本 CellPro Japan 提供。</p>
              <ul className="mt-3 text-sm text-neutral-600 space-y-1 list-disc pl-5">
                <li>日本原廠監製與品質控管</li>
                <li>提供基本產品文件（如規格書、SDS／如適用）</li>
                <li>可支援合作夥伴的培訓與上架資料</li>
              </ul>
            </article>
            {/* Placeholder for future products */}
            <article className="p-5 rounded-3xl border shadow-sm bg-neutral-50">
              <h4 className="text-lg font-semibold">（預留）系列延伸</h4>
              <p className="mt-2 text-sm text-neutral-600">未來可新增：配套產品／護理流程／研究資料下載等。</p>
            </article>
          </div>
        </div>
      </section>

      {/* EVIDENCE */}
      <section id="evidence" className="bg-neutral-50 border-t">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <h3 className="text-2xl md:text-3xl font-semibold">品牌背景與品質要點（供參）</h3>
          <div className="mt-6 rounded-3xl border bg-white p-6 shadow-sm text-sm text-neutral-700 space-y-2">
            <p>• 日本 CellPro Japan 之合作品牌與技術支援。</p>
            <p>• 針對美容用途之產品設計與文件提供（實際以標示為準）。</p>
            <p>• 香港市場上架前，將依合作夥伴需求提供相應資料與培訓。</p>
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section id="compliance" className="bg-neutral-50 border-t">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <h3 className="text-2xl md:text-3xl font-semibold">合規聲明（香港）</h3>
          <div className="mt-6 rounded-3xl border bg-white p-6 shadow-sm text-sm text-neutral-700 space-y-3">
            <p>本頁資訊涉及之產品為<strong>美容用途</strong>，非用於診斷、治療或預防任何疾病。</p>
            <p>所有宣稱與使用方式以法規可接受之標準與實際標示為準。若後續涉及醫療／臨床研究等，將依適用之法規與倫理審批辦理。</p>
            <p>產品文件（規格書、SDS 等）與教育訓練可在合作框架下提供。</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white border-t">
        <div className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">聯絡我們</h3>
            <p className="mt-4 text-neutral-600">Cell Vision Global Limited（CVG）</p>
            <div className="mt-4 text-sm text-neutral-700 space-y-1">
              <p>地址（繁）：香港九龍尖沙咀廣東道30號新港中心第二座十樓1005室</p>
              <p>Address (EN): Room 1005, 10/F Tower 2 Silvercord, 30 Canton Rd, Tsim Sha Tsui, Kowloon, Hong Kong</p>
              <p>電郵：info@cellvisionglobal.com</p>
              <p>電話：+852-6466-6324（香港） / +81-90-9302-0682（日本）</p>
            </div>
            <p className="mt-4 text-xs text-neutral-500">© {new Date().getFullYear()} Cell Vision Global Limited. All rights reserved.</p>
          </div>
          <form
            action="https://formspree.io/f/xrboyrdj"  // ← 請替換成您自己的 Formspree 端點
            method="POST"
            className="rounded-3xl border p-6 shadow-sm bg-neutral-50"
          >
            <div className="grid gap-4">
              <input
                className="w-full rounded-xl border px-4 py-3"
                type="text"
                name="name"
                placeholder="您的姓名"
                required
              />
              <input
                className="w-full rounded-xl border px-4 py-3"
                type="email"
                name="email"
                placeholder="電郵地址"
                required
              />
              <input
                className="w-full rounded-xl border px-4 py-3"
                type="text"
                name="organization"
                placeholder="所屬機構／公司名稱"
              />
              <textarea
                className="w-full rounded-xl border px-4 py-3 min-h-[120px]"
                name="message"
                placeholder="查詢內容"
                required
              ></textarea>

              <button
                type="submit"
                className="rounded-2xl px-5 py-3 bg-neutral-900 text-white text-sm font-medium hover:opacity-90"
              >
                送出表單
              </button>
            </div>

            <p className="mt-3 text-xs text-neutral-500">
              提交此表單表示您同意我們透過電郵回覆。訊息將經由 Formspree 安全傳送。
            </p>
          </form>

        </div>
      </section>
    </div>
  );
}
