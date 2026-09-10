import { useLang } from "@/lib/i18n"
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll"

export function PreviewSection() {
  const { t } = useLang()
  const ref = useRevealOnScroll<HTMLElement>()

  return (
    <section className="bm-section" id="preview" style={{ maxWidth: 1200, background: "none" }} ref={ref}>
      <div className="bm-section-head">
        <span className="bm-eyebrow bm-mono" style={{ color: "#8fd6e8" }}>
          02 — INSIDE THE APP
        </span>
        <h2 className="bm-serif">{t("bmPage.s2Title")}</h2>
        <p>{t("bmPage.s2Desc")}</p>
      </div>

      <div className="bm-preview-wrap">
        {/* Phone 1: full journey / constellation */}
        <div className="bm-phone-col">
          <div className="bm-phone">
            <div
              className="bm-screen"
              style={{ background: "linear-gradient(#0a1030 0%, #141a3d 46%, #3a2a4e 74%, #6a4a58 100%)" }}
            >
              <div className="bm-statusbar bm-mono">
                <span>9:41</span>
                <span>▪▪▪ ⌁ ▮</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 22px 4px", color: "#eaeeff", fontSize: 14 }}>
                <span style={{ opacity: 0.7 }}>☰</span>
                <span style={{ fontWeight: 500, letterSpacing: ".02em" }}>{t("bmPage.mockConstellation")}</span>
                <span style={{ opacity: 0.7 }}>⌕</span>
              </div>
              <svg viewBox="0 0 280 400" style={{ position: "absolute", top: 74, left: 0, width: "100%", height: 400 }}>
                <path
                  d="M92 34 C 130 74, 70 104, 104 150 S 60 216, 96 262 S 132 318, 106 372"
                  fill="none"
                  stroke="rgba(226,214,255,.42)"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                />
                <circle cx="92" cy="34" r="5" fill="#ffe3b4" />
                <circle cx="92" cy="34" r="13" fill="rgba(255,227,180,.16)" />
                <circle cx="104" cy="150" r="4.5" fill="#8fd6e8" />
                <circle cx="104" cy="150" r="12" fill="rgba(143,214,232,.14)" />
                <circle cx="96" cy="262" r="4.5" fill="#f2a7c3" />
                <circle cx="96" cy="262" r="12" fill="rgba(242,167,195,.14)" />
                <circle cx="106" cy="372" r="4" fill="#ffd9a0" opacity=".8" />
              </svg>
              <div style={{ position: "absolute", top: 92, left: 120, display: "flex", flexDirection: "column", gap: 2 }}>
                <span className="bm-mono" style={{ fontSize: 10, color: "#ffd9a0" }}>#24,921,382</span>
                <span className="bm-mono" style={{ fontSize: 9, color: "#8d96bb" }}>Aug 30, 2026</span>
                <span style={{ fontSize: 12, color: "#f2f5ff", marginTop: 3 }}>{t("bmPage.mockEntry1")}</span>
              </div>
              <div style={{ position: "absolute", top: 206, left: 132, display: "flex", flexDirection: "column", gap: 2 }}>
                <span className="bm-mono" style={{ fontSize: 10, color: "#8fd6e8" }}>#32,112,870</span>
                <span className="bm-mono" style={{ fontSize: 9, color: "#8d96bb" }}>Mar 14, 2029</span>
                <span
                  style={{ fontSize: 12, color: "#f2f5ff", marginTop: 3, lineHeight: 1.4 }}
                  dangerouslySetInnerHTML={{ __html: t("bmPage.mockEntry2") }}
                />
              </div>
              <div style={{ position: "absolute", top: 330, left: 126, display: "flex", flexDirection: "column", gap: 2, opacity: 0.82 }}>
                <span className="bm-mono" style={{ fontSize: 10, color: "#f2a7c3" }}>#33,512,984</span>
                <span style={{ fontSize: 12, color: "#e8ecff", marginTop: 3 }}>{t("bmPage.mockEntry3")}</span>
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 76,
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "11px 22px",
                  borderRadius: 999,
                  background: "rgba(18,22,48,.82)",
                  border: "1px solid rgba(255,217,160,.35)",
                  color: "#ffe3b4",
                  fontSize: 13,
                  backdropFilter: "blur(6px)",
                }}
              >
                <span style={{ fontSize: 11 }}>✦</span> <span>{t("bmPage.mockMoment")}</span>
              </div>
              <div
                className="bm-mono"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  padding: "14px 12px 20px",
                  background: "rgba(7,10,26,.86)",
                  borderTop: "1px solid rgba(180,196,255,.1)",
                  fontSize: 9,
                  color: "#7d87ad",
                }}
              >
                <span style={{ color: "#ffd9a0" }}>{t("bmPage.mockNavJourney")}</span>
                <span>{t("bmPage.mockNavMoments")}</span>
                <span
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,#ffe3b4,#ffc98a)",
                    color: "#1a1206",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                  }}
                >
                  +
                </span>
                <span>{t("bmPage.mockNavSearch")}</span>
                <span>{t("bmPage.mockNavProfile")}</span>
              </div>
            </div>
          </div>
          <div className="bm-phone-caption">
            <strong>{t("bmPage.phone1Caption")}</strong>
            <span>{t("bmPage.phone1Sub")}</span>
          </div>
        </div>

        {/* Phone 2: moment detail */}
        <div className="bm-phone-col">
          <div className="bm-phone">
            <div
              className="bm-screen"
              style={{ background: "radial-gradient(90% 60% at 50% 44%, #1c2148 0%, #0b0f26 60%, #070a18 100%)" }}
            >
              <div className="bm-statusbar bm-mono">
                <span>9:41</span>
                <span>▪▪▪ ⌁ ▮</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 22px", color: "#cfd6f4", fontSize: 15, opacity: 0.75 }}>
                <span>‹</span>
                <span>↗</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, marginTop: 18 }}>
                <span className="bm-mono" style={{ fontSize: 13, color: "#ffd9a0" }}>#27,884,021</span>
                <span className="bm-mono" style={{ fontSize: 10, color: "#7d87ad" }}>Nov 23, 2026 14:32:18 UTC</span>
              </div>
              <h4
                className="bm-serif"
                style={{ margin: "22px 0 0", textAlign: "center", fontWeight: 400, fontSize: 34, lineHeight: 1.2, color: "#fdfbf6" }}
                dangerouslySetInnerHTML={{ __html: t("bmPage.mockMarried") }}
              />
              <div style={{ position: "relative", height: 140, flex: "0 0 auto", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 4 }}>
                <span style={{ position: "absolute", width: 150, height: 54, border: "1px solid rgba(255,217,160,.3)", borderRadius: "50%", transform: "rotate(-18deg)" }} />
                <span
                  style={{
                    position: "absolute",
                    width: 96,
                    height: 96,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(255,227,180,.5), transparent 68%)",
                    animation: "bm-pulse 5s ease-in-out infinite",
                  }}
                />
                <span style={{ position: "relative", width: 15, height: 15, borderRadius: "50%", background: "#fff6e4", boxShadow: "0 0 34px 8px rgba(255,217,160,.7)" }} />
                <span style={{ position: "absolute", top: 6, fontSize: 13, color: "#f2a7c3" }}>♥</span>
              </div>
              <div
                className="bm-mono"
                style={{
                  flex: "0 0 auto",
                  margin: "auto 18px 34px",
                  borderRadius: 18,
                  border: "1px solid rgba(180,196,255,.12)",
                  background: "rgba(255,255,255,.035)",
                  overflow: "hidden",
                  fontSize: 10,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", padding: "13px 16px", borderBottom: "1px solid rgba(180,196,255,.08)" }}>
                  <span style={{ color: "#7d87ad" }}>{t("bmPage.mockBlockLabel")}</span>
                  <span style={{ color: "#e6ebff" }}>#27,884,021</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "13px 16px", borderBottom: "1px solid rgba(180,196,255,.08)" }}>
                  <span style={{ color: "#7d87ad" }}>{t("bmPage.mockTimestampLabel")}</span>
                  <span style={{ color: "#e6ebff" }}>2026-11-23 14:32</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "13px 16px", borderBottom: "1px solid rgba(180,196,255,.08)" }}>
                  <span style={{ color: "#7d87ad" }}>{t("bmPage.mockTxLabel")}</span>
                  <span style={{ color: "#e6ebff" }}>0x3af…8e21</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", padding: "13px 16px" }}>
                  <span style={{ color: "#7d87ad" }}>{t("bmPage.mockAuthorLabel")}</span>
                  <span style={{ color: "#e6ebff" }}>0x72af…9c13</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bm-phone-caption">
            <strong>{t("bmPage.phone2Caption")}</strong>
            <span>{t("bmPage.phone2Sub")}</span>
          </div>
        </div>

        {/* Phone 3: monthly / search */}
        <div className="bm-phone-col">
          <div className="bm-phone">
            <div className="bm-screen" style={{ background: "linear-gradient(#0b0f26, #0a0d20)" }}>
              <div className="bm-statusbar bm-mono">
                <span>9:41</span>
                <span>▪▪▪ ⌁ ▮</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 22px 2px" }}>
                <span className="bm-serif" style={{ fontSize: 26, color: "#fdfbf6" }}>2026</span>
                <span style={{ color: "#8f98ba" }}>→</span>
              </div>
              <div style={{ display: "flex", gap: 6, padding: "14px 18px 10px", fontSize: 12, color: "#7d87ad" }}>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span style={{ padding: "3px 10px", borderRadius: 999, background: "rgba(255,217,160,.14)", color: "#ffd9a0" }}>Nov</span>
                <span>Dec</span>
              </div>
              <div className="bm-mono" style={{ display: "flex", justifyContent: "space-between", padding: "8px 18px 6px", fontSize: 9, color: "#6b7599" }}>
                <span>SUN</span>
                <span>MON</span>
                <span>TUE</span>
                <span>WED</span>
                <span>THU</span>
                <span>FRI</span>
                <span>SAT</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 16px 14px", fontSize: 12, color: "#c3cae8" }}>
                <span style={{ width: 26, textAlign: "center" }}>22</span>
                <span style={{ width: 26, height: 26, borderRadius: "50%", background: "#ffd9a0", color: "#1a1206", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 500 }}>23</span>
                <span style={{ width: 26, textAlign: "center" }}>24</span>
                <span style={{ width: 26, textAlign: "center" }}>25</span>
                <span style={{ width: 26, textAlign: "center" }}>26</span>
                <span style={{ width: 26, textAlign: "center" }}>27</span>
                <span style={{ width: 26, textAlign: "center" }}>28</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "6px 16px 20px", overflow: "hidden" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "stretch" }}>
                  <span style={{ width: 7, height: 7, marginTop: 16, borderRadius: "50%", background: "#ffd9a0", flex: "0 0 auto" }} />
                  <div style={{ flex: "1 1 0%", padding: "14px 16px", borderRadius: 16, background: "rgba(255,255,255,.043)", border: "1px solid rgba(180,196,255,.1)", position: "relative" }}>
                    <span style={{ position: "absolute", top: 14, right: 14, width: 10, height: 10, borderRadius: "50%", background: "#f2a7c3", boxShadow: "0 0 10px #f2a7c3" }} />
                    <div className="bm-mono" style={{ fontSize: 10, color: "#ffd9a0" }}>#27,884,021</div>
                    <div className="bm-mono" style={{ fontSize: 9, color: "#7d87ad", marginTop: 3 }}>Nov 23, 2026</div>
                    <div style={{ fontSize: 13, color: "#f2f5ff", marginTop: 9 }}>{t("bmPage.mockCal1")}</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12, alignItems: "stretch" }}>
                  <span style={{ width: 7, height: 7, marginTop: 16, borderRadius: "50%", background: "#8fd6e8", flex: "0 0 auto" }} />
                  <div style={{ flex: "1 1 0%", padding: "14px 16px", borderRadius: 16, background: "rgba(255,255,255,.043)", border: "1px solid rgba(180,196,255,.1)" }}>
                    <div className="bm-mono" style={{ fontSize: 10, color: "#8fd6e8" }}>#27,901,993</div>
                    <div className="bm-mono" style={{ fontSize: 9, color: "#7d87ad", marginTop: 3 }}>Nov 24, 2026</div>
                    <div style={{ fontSize: 13, color: "#f2f5ff", marginTop: 9 }}>{t("bmPage.mockCal2")}</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12, alignItems: "stretch", opacity: 0.78 }}>
                  <span style={{ width: 7, height: 7, marginTop: 16, borderRadius: "50%", background: "#ffd9a0", flex: "0 0 auto" }} />
                  <div style={{ flex: "1 1 0%", padding: "14px 16px", borderRadius: 16, background: "rgba(255,255,255,.043)", border: "1px solid rgba(180,196,255,.1)" }}>
                    <div className="bm-mono" style={{ fontSize: 10, color: "#ffd9a0" }}>#27,912,884</div>
                    <div style={{ fontSize: 13, color: "#f2f5ff", marginTop: 9 }}>{t("bmPage.mockCal3")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bm-phone-caption">
            <strong>{t("bmPage.phone3Caption")}</strong>
            <span>{t("bmPage.phone3Sub")}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
