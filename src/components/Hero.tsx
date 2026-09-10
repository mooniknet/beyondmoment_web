import { useLang } from "@/lib/i18n"
import { useStarCanvas } from "@/hooks/useStarCanvas"

export function Hero() {
  const { t } = useLang()
  const canvasRef = useStarCanvas("hero", { density: 1, shooting: true })

  return (
    <section className="bm-hero">
      <canvas ref={canvasRef} />
      <div className="bm-fade" />
      <div className="bm-hero-inner">
        <img
          src="/assets/beyondmoment-icon.png"
          alt="BeyondMoment 아이콘"
          className="bm-icon-hero dallae-icon-float"
        />
        <h1 className="bm-serif">
          Beyond<span>Moment</span>
        </h1>
        <p className="bm-tagline bm-serif">Every moment, beyond time.</p>
        <p className="bm-desc" dangerouslySetInnerHTML={{ __html: t("bmPage.heroDesc") }} />
        <div className="bm-hero-actions">
          <a
            href="https://mooniknet.github.io/beyondmoment_chain_web/"
            target="_blank"
            rel="noopener"
            className="bm-btn-primary"
          >
            {t("bmPage.cta1")}
          </a>
          <a href="#preview" className="bm-btn-ghost">
            {t("bmPage.cta2")}
          </a>
        </div>
      </div>
      <div className="bm-scrollcue">
        <span className="label bm-mono">SCROLL</span>
        <span className="line" />
      </div>
    </section>
  )
}
