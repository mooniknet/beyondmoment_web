import { useLang } from "@/lib/i18n"
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll"

export function PromiseSection() {
  const { t } = useLang()
  const ref = useRevealOnScroll<HTMLElement>()

  return (
    <section className="bm-section" id="promise" ref={ref}>
      <div className="bm-section-head">
        <span className="bm-eyebrow bm-mono" style={{ color: "#ffd9a0" }}>
          01 — PROMISE
        </span>
        <h2 className="bm-serif">{t("bmPage.s1Title")}</h2>
        <p>{t("bmPage.s1Desc")}</p>
      </div>
      <div className="bm-promise-grid">
        <div className="bm-card">
          <div className="glow" style={{ background: "radial-gradient(circle, rgba(255,217,160,0.22), transparent 70%)" }} />
          <div className="icon" style={{ border: "1px solid rgba(255,217,160,0.4)" }}>
            <span
              style={{
                width: 12,
                height: 12,
                background: "#ffd9a0",
                borderRadius: 2,
                transform: "rotate(45deg)",
                boxShadow: "0 0 16px #ffd9a0",
              }}
            />
          </div>
          <h3>{t("bmPage.card1Title")}</h3>
          <p>{t("bmPage.card1Desc")}</p>
        </div>
        <div className="bm-card">
          <div className="glow" style={{ background: "radial-gradient(circle, rgba(143,214,232,0.2), transparent 70%)" }} />
          <div className="icon" style={{ border: "1px solid rgba(143,214,232,0.4)" }}>
            <span style={{ width: 20, height: 20, borderRadius: "50%", border: "1px solid #8fd6e8" }} />
          </div>
          <h3>{t("bmPage.card2Title")}</h3>
          <p>{t("bmPage.card2Desc")}</p>
        </div>
        <div className="bm-card">
          <div className="glow" style={{ background: "radial-gradient(circle, rgba(242,167,195,0.2), transparent 70%)" }} />
          <div className="icon" style={{ border: "1px solid rgba(242,167,195,0.42)" }}>
            <span
              style={{
                width: 11,
                height: 11,
                borderRadius: "50%",
                background: "#f2a7c3",
                boxShadow: "0 0 14px #f2a7c3",
              }}
            />
          </div>
          <h3>{t("bmPage.card3Title")}</h3>
          <p>{t("bmPage.card3Desc")}</p>
        </div>
      </div>
    </section>
  )
}
