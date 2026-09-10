import { useLang } from "@/lib/i18n"
import { useStarCanvas } from "@/hooks/useStarCanvas"

export function ForeverBanner() {
  const { t } = useLang()
  const canvasRef = useStarCanvas("constellation")

  return (
    <section className="bm-section" style={{ padding: "0 0 40px", maxWidth: "none" }}>
      <div className="bm-forever-outer">
        <div className="bm-forever-banner">
          <canvas ref={canvasRef} />
          <div className="bm-forever-text">
            <span className="bm-eyebrow bm-mono" style={{ color: "#ffd9a0" }}>
              04 — FOREVER
            </span>
            <h2 className="bm-serif">{t("bmPage.s4Title")}</h2>
            <p>{t("bmPage.s4Desc")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
