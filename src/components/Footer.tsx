import { useLang } from "@/lib/i18n"

export function Footer() {
  const { t } = useLang()

  return (
    <footer>
      <div
        className="wrap"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, width: "100%" }}
      >
        <span className="bm-serif" style={{ fontSize: 20, color: "#dfe4fb" }}>
          BeyondMoment
        </span>
        <div className="foot-links">
          <a href="/">{t("footer.home")}</a>
          <a href="mailto:moonik.net@gmail.com">{t("footer.contact")}</a>
        </div>
      </div>
    </footer>
  )
}
