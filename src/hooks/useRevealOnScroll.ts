import { useEffect, useRef } from "react"

/** Adds the `bm-visible` class once the element scrolls into view (ported
 * from the old static site's IntersectionObserver-driven `.bm-section` fade-in). */
export function useRevealOnScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (!("IntersectionObserver" in window)) {
      el.classList.add("bm-visible")
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("bm-visible")
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return ref
}
