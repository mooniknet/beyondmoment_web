import { useRef } from "react"
import { useLang } from "@/lib/i18n"
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll"

export function InviteSection() {
  const { t } = useLang()
  const ref = useRevealOnScroll<HTMLElement>()
  const emailRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const email = emailRef.current?.value.trim() ?? ""
    const subject = encodeURIComponent("BeyondMoment 사전 등록")
    const body = encodeURIComponent("이메일: " + email)
    window.location.href = `mailto:moonik.net@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="bm-section bm-invite" id="invite" ref={ref}>
      <div className="bm-invite-inner">
        <span className="bm-invite-dot" />
        <h2 className="bm-serif" dangerouslySetInnerHTML={{ __html: t("bmPage.inviteTitle") }} />
        <p className="bm-desc">{t("bmPage.inviteDesc")}</p>
        <form className="bm-invite-form" onSubmit={handleSubmit}>
          <input ref={emailRef} type="email" placeholder={t("bmPage.emailPlaceholder")} required />
          <button type="submit">{t("bmPage.registerBtn")}</button>
        </form>
        <span className="bm-nospam bm-mono">{t("bmPage.noSpam")}</span>
      </div>
    </section>
  )
}
