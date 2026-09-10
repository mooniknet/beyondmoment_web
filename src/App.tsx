import { useEffect } from "react"
import { useLang } from "@/lib/i18n"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { ComicBookIntro } from "@/components/ComicBookIntro"
import { Hero } from "@/components/Hero"
import { PromiseSection } from "@/components/PromiseSection"
import { PreviewSection } from "@/components/PreviewSection"
import { HowItWorks } from "@/components/HowItWorks"
import { ForeverBanner } from "@/components/ForeverBanner"
import { InviteSection } from "@/components/InviteSection"

function App() {
  const { t } = useLang()

  useEffect(() => {
    document.body.classList.add("bm")
  }, [])

  useEffect(() => {
    document.title = t("beyondPage.title")
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute("content", t("beyondPage.desc"))
  }, [t])

  return (
    <>
      <Header />
      <main>
        <ComicBookIntro />
        <Hero />
        <PromiseSection />
        <PreviewSection />
        <HowItWorks />
        <ForeverBanner />
        <InviteSection />
      </main>
      <Footer />
    </>
  )
}

export default App
