import { useEffect, useState } from "react"
import { useLang } from "@/lib/i18n"
import { useStarCanvas } from "@/hooks/useStarCanvas"
import { PerspectiveBook, BookTitle, BookDescription } from "@/components/ui/perspective-book"

const PAGE_KEYS = [
  "bmPage.comic1",
  "bmPage.comic2",
  "bmPage.comic3",
  "bmPage.comic4",
  "bmPage.comic5",
] as const

export function ComicBookIntro() {
  const { t } = useLang()
  const canvasRef = useStarCanvas("hero", { density: 0.6, shooting: false })
  const [isOpen, setIsOpen] = useState(false)
  const [pageIndex, setPageIndex] = useState(0)

  useEffect(() => {
    if (!isOpen) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") setPageIndex((i) => Math.max(0, i - 1))
      if (e.key === "ArrowRight") setPageIndex((i) => Math.min(PAGE_KEYS.length - 1, i + 1))
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [isOpen])

  const isLastPage = pageIndex === PAGE_KEYS.length - 1

  return (
    <section className="bm-comic" id="comicIntro">
      <canvas ref={canvasRef} />
      <div className="bm-fade" />
      <div className="bm-comic-inner">
        <div className={`bm-book${isOpen ? " is-open" : ""}`}>
          <div className="bm-book-cover-wrap" onClick={() => setIsOpen(true)}>
            <PerspectiveBook
              size="lg"
              className="bg-gradient-to-br from-[#1c2350] to-[#0c1030] border border-[rgba(255,217,160,0.28)] text-[#fdfbf6]"
            >
              <span className="bm-book-cover-mark">✦</span>
              <BookTitle className="bm-serif !font-normal !text-[28px] !mt-0">
                {t("bmPage.comicCoverTitle")}
              </BookTitle>
              <BookDescription className="!text-[13px] tracking-wide text-[#9aa3c4] !opacity-100">
                {t("bmPage.comicCoverHint")}
              </BookDescription>
            </PerspectiveBook>
          </div>

          <div className="bm-book-pages">
            {PAGE_KEYS.map((key, i) => (
              <div
                key={key}
                className={`bm-book-page${i === pageIndex ? " is-active" : i < pageIndex ? " is-prev" : ""}`}
              >
                <div className="bm-comic-panel">
                  <span>{t("bmPage.comicPanelPlaceholder")}</span>
                </div>
                <p className="bm-comic-caption">{t(key)}</p>
              </div>
            ))}
          </div>

          <div className="bm-book-nav" style={{ display: isOpen ? undefined : "none" }}>
            <button
              type="button"
              className="bm-book-arrow"
              onClick={() => setPageIndex((i) => Math.max(0, i - 1))}
              disabled={pageIndex === 0}
              aria-label="이전 페이지"
            >
              ‹
            </button>
            <div className="bm-book-dots">
              {PAGE_KEYS.map((key, i) => (
                <span key={key} className={i === pageIndex ? "is-active" : ""} />
              ))}
            </div>
            <button
              type="button"
              className="bm-book-arrow"
              onClick={() => setPageIndex((i) => Math.min(PAGE_KEYS.length - 1, i + 1))}
              disabled={isLastPage}
              aria-label="다음 페이지"
            >
              ›
            </button>
          </div>
        </div>
      </div>
      <div className={`bm-comic-scrollcue${isOpen && isLastPage ? " is-visible" : ""}`}>
        <span className="label bm-mono">{t("bmPage.comicScrollHint")}</span>
        <span className="line" />
      </div>
    </section>
  )
}
