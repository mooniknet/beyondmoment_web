import { useLang } from "@/lib/i18n"
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll"

export function HowItWorks() {
  const { t } = useLang()
  const ref = useRevealOnScroll<HTMLElement>()

  return (
    <section className="bm-section" id="how" ref={ref}>
      <div className="bm-section-head">
        <span className="bm-eyebrow bm-mono" style={{ color: "#f2a7c3" }}>
          03 — HOW IT WORKS
        </span>
        <h2 className="bm-serif">{t("bmPage.s3Title")}</h2>
      </div>
      <div className="bm-steps">
        <div className="bm-step">
          <span className="num bm-mono" style={{ color: "#ffd9a0" }}>STEP 01</span>
          <h3>{t("bmPage.step1Title")}</h3>
          <p>{t("bmPage.step1Desc")}</p>
          <span className="meta bm-mono">24 / 200</span>
        </div>
        <div className="bm-step">
          <span className="num bm-mono" style={{ color: "#8fd6e8" }}>STEP 02</span>
          <h3>{t("bmPage.step2Title")}</h3>
          <p>{t("bmPage.step2Desc")}</p>
        </div>
        <div className="bm-step">
          <span className="num bm-mono" style={{ color: "#f2a7c3" }}>STEP 03</span>
          <h3>{t("bmPage.step3Title")}</h3>
          <p>{t("bmPage.step3Desc")}</p>
          <span className="meta bm-mono">Block #36,551,982</span>
        </div>
        <div className="bm-step bm-step-final">
          <span className="num bm-mono" style={{ color: "#ffd9a0" }}>STEP 04</span>
          <h3 style={{ color: "#fff6e4" }}>{t("bmPage.step4Title")}</h3>
          <p style={{ color: "#cbd0e8" }}>{t("bmPage.step4Desc")}</p>
        </div>
      </div>
    </section>
  )
}
