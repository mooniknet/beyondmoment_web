import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import type { ReactNode } from "react"
import { dict, type Lang } from "./dict"

const STORAGE_KEY = "moonik-lang"

function safeGet(key: string): string | null {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

function safeSet(key: string, value: string) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // ignore (private browsing / storage disabled)
  }
}

function detectLang(): Lang {
  const saved = safeGet(STORAGE_KEY)
  if (saved === "ko" || saved === "en") return saved
  const nav = (navigator.language || "en").toLowerCase()
  return nav.indexOf("ko") === 0 ? "ko" : "en"
}

interface LangContextValue {
  lang: Lang
  t: (key: string) => string
  toggle: () => void
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => detectLang())

  useEffect(() => {
    document.documentElement.lang = lang
    safeSet(STORAGE_KEY, lang)
  }, [lang])

  const t = useCallback(
    (key: string) => {
      const value = dict[lang][key]
      if (value === undefined) return key
      return value
    },
    [lang],
  )

  const toggle = useCallback(() => {
    setLang((cur) => (cur === "ko" ? "en" : "ko"))
  }, [])

  const value = useMemo(() => ({ lang, t, toggle }), [lang, t, toggle])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error("useLang must be used within a LangProvider")
  return ctx
}
