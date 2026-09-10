import { useState } from "react"
import { useLang } from "@/lib/i18n"

export function Header() {
  const { t, lang, toggle } = useLang()
  const [navOpen, setNavOpen] = useState(false)

  return (
    <header>
      <div className="wrap">
        <nav>
          <a href="https://moonik.net" className="logo">
            <img src="/assets/moonik-logo-nav.png" alt="MoonIK" />
          </a>
          <div className={`nav-links${navOpen ? " open" : ""}`}>
            <a href="https://moonik.net/about.html" onClick={() => setNavOpen(false)}>
              {t("nav.about")}
            </a>
            <a href="https://moonik.net/dallae.html" onClick={() => setNavOpen(false)}>
              {t("nav.dallae")}
            </a>
            <a href="/" className="nav-active" onClick={() => setNavOpen(false)}>
              {t("beyond.name")}
            </a>
          </div>
          <div className="nav-actions">
            <button id="lang-toggle" className="btn btn-ghost" onClick={toggle}>
              {lang === "ko" ? "EN" : "한국어"}
            </button>
            <a href="https://moonik.net" className="btn btn-ghost nav-back">
              {t("nav.back")}
            </a>
            <button
              className="nav-toggle"
              onClick={() => setNavOpen((v) => !v)}
              aria-label="Menu"
            >
              ☰
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
