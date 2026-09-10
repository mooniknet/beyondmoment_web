import { useEffect, useRef } from "react"

interface FitResult {
  ctx: CanvasRenderingContext2D
  w: number
  h: number
}

function fit(canvas: HTMLCanvasElement): FitResult | null {
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const r = canvas.parentElement!.getBoundingClientRect()
  if (r.width < 2 || r.height < 2) return null
  canvas.width = Math.max(1, Math.floor(r.width * dpr))
  canvas.height = Math.max(1, Math.floor(r.height * dpr))
  const ctx = canvas.getContext("2d")!
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  return { ctx, w: r.width, h: r.height }
}

interface Star {
  x: number
  y: number
  r: number
  p: number
  s: number
  d: number
  c: string
}

function initHeroStars(canvas: HTMLCanvasElement, density: number, shootingEnabled: boolean) {
  const tints = ["255,246,228", "255,217,160", "200,216,255", "242,207,222", "175,220,236"]
  let hero: FitResult | null = null
  let stars: Star[] = []
  let shoot: { x: number; y: number; v: number; a: number; life: number } | null = null
  let nextShoot = 2.2
  let raf = 0

  function size() {
    const f = fit(canvas)
    if (!f) return
    hero = f
    const n = Math.round(((f.w * f.h) / 5200) * density)
    stars = []
    for (let i = 0; i < n; i++) {
      stars.push({
        x: Math.random() * f.w,
        y: Math.random() * f.h,
        r: Math.random() * Math.random() * 1.7 + 0.35,
        p: Math.random() * Math.PI * 2,
        s: 0.4 + Math.random() * 1.3,
        d: 0.02 + Math.random() * 0.06,
        c: tints[(Math.random() * tints.length) | 0],
      })
    }
  }

  let last = performance.now()
  let t = 0
  function loop(now: number) {
    if (!hero) {
      raf = requestAnimationFrame(loop)
      return
    }
    const dt = Math.min((now - last) / 1000, 0.05)
    last = now
    t += dt
    const { ctx, w, h } = hero
    ctx.clearRect(0, 0, w, h)

    for (let i = 0; i < stars.length; i++) {
      const s = stars[i]
      s.y -= s.d
      if (s.y < -2) {
        s.y = h + 2
        s.x = Math.random() * w
      }
      const a = 0.28 + 0.72 * (0.5 + 0.5 * Math.sin(t * s.s + s.p))
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(" + s.c + "," + a.toFixed(3) + ")"
      ctx.fill()
      if (s.r > 1.15) {
        const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 9)
        g.addColorStop(0, "rgba(" + s.c + "," + (a * 0.3).toFixed(3) + ")")
        g.addColorStop(1, "rgba(" + s.c + ",0)")
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r * 9, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    if (shootingEnabled) {
      nextShoot -= dt
      if (!shoot && nextShoot <= 0) {
        shoot = {
          x: Math.random() * w * 0.7,
          y: Math.random() * h * 0.45,
          v: 520 + Math.random() * 260,
          a: 0.42 + Math.random() * 0.2,
          life: 0,
        }
        nextShoot = 4 + Math.random() * 7
      }
      if (shoot) {
        shoot.life += dt
        shoot.x += Math.cos(shoot.a) * shoot.v * dt
        shoot.y += Math.sin(shoot.a) * shoot.v * dt
        const len = 150
        const tx = shoot.x - Math.cos(shoot.a) * len
        const ty = shoot.y - Math.sin(shoot.a) * len
        const fade = Math.max(0, 1 - shoot.life / 1.5)
        const sg = ctx.createLinearGradient(shoot.x, shoot.y, tx, ty)
        sg.addColorStop(0, "rgba(255,248,232," + (0.85 * fade).toFixed(3) + ")")
        sg.addColorStop(1, "rgba(255,248,232,0)")
        ctx.strokeStyle = sg
        ctx.lineWidth = 1.6
        ctx.beginPath()
        ctx.moveTo(shoot.x, shoot.y)
        ctx.lineTo(tx, ty)
        ctx.stroke()
        if (shoot.x > w + 200 || shoot.y > h + 200 || fade <= 0) shoot = null
      }
    }

    raf = requestAnimationFrame(loop)
  }

  size()
  window.addEventListener("resize", size)
  raf = requestAnimationFrame(loop)

  return () => {
    window.removeEventListener("resize", size)
    cancelAnimationFrame(raf)
  }
}

interface Node {
  bx: number
  by: number
  ph: number
  r: number
  big: boolean
}

function initConstellationBanner(canvas: HTMLCanvasElement) {
  const count = 34
  let cst: FitResult | null = null
  let nodes: Node[] = []
  let links: [number, number][] = []
  let raf = 0

  function size() {
    const f = fit(canvas)
    if (!f) return
    cst = f
    nodes = []
    for (let i = 0; i < count; i++) {
      const px = 0.08 + (i / (count - 1)) * 0.86
      nodes.push({
        bx: px * f.w,
        by: f.h * (0.34 + 0.42 * Math.sin(i * 1.07) * Math.cos(i * 0.43)) + f.h * 0.14,
        ph: Math.random() * Math.PI * 2,
        r: 1.2 + Math.random() * 2.4,
        big: Math.random() > 0.82,
      })
    }
    const isNarrow = f.w < 780
    const radius = isNarrow ? Math.min(70, f.w * 0.22) : Math.max(120, f.w * 0.11)
    links = []
    for (let a = 0; a < nodes.length; a++) {
      for (let b = a + 1; b < nodes.length; b++) {
        const dx = nodes[a].bx - nodes[b].bx
        const dy = nodes[a].by - nodes[b].by
        if (Math.sqrt(dx * dx + dy * dy) < radius) links.push([a, b])
      }
    }
    if (isNarrow) {
      links = links.filter((_, i) => i % 2 === 0)
    }
  }

  let last = performance.now()
  let t = 0
  function loop(now: number) {
    if (!cst) {
      raf = requestAnimationFrame(loop)
      return
    }
    const dt = Math.min((now - last) / 1000, 0.05)
    last = now
    t += dt
    const { ctx, w, h } = cst
    ctx.clearRect(0, 0, w, h)

    const pts = nodes.map((n) => ({
      x: n.bx + Math.sin(t * 0.28 + n.ph) * 9,
      y: n.by + Math.cos(t * 0.22 + n.ph) * 11,
      r: n.r,
      big: n.big,
      ph: n.ph,
    }))

    const grow = Math.min(1, t / 4.5)
    ctx.lineWidth = 0.7
    links.forEach((pair, k) => {
      if (k / links.length > grow) return
      const a = pts[pair[0]]
      const b = pts[pair[1]]
      ctx.strokeStyle = "rgba(206,216,255," + (0.1 + 0.09 * Math.sin(t + k)).toFixed(3) + ")"
      ctx.beginPath()
      ctx.moveTo(a.x, a.y)
      ctx.lineTo(b.x, b.y)
      ctx.stroke()
    })

    pts.forEach((p, i) => {
      if (i / pts.length > grow + 0.05) return
      const a = 0.45 + 0.5 * (0.5 + 0.5 * Math.sin(t * 1.3 + p.ph))
      const col = p.big ? "255,227,180" : "224,232,255"
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 10)
      g.addColorStop(0, "rgba(" + col + "," + (a * 0.4).toFixed(3) + ")")
      g.addColorStop(1, "rgba(" + col + ",0)")
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r * 10, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = "rgba(" + col + "," + a.toFixed(3) + ")"
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fill()
    })

    raf = requestAnimationFrame(loop)
  }

  size()
  window.addEventListener("resize", size)
  raf = requestAnimationFrame(loop)

  return () => {
    window.removeEventListener("resize", size)
    cancelAnimationFrame(raf)
  }
}

type StarCanvasMode = "hero" | "constellation"

export function useStarCanvas(mode: StarCanvasMode, options: { density?: number; shooting?: boolean } = {}) {
  const ref = useRef<HTMLCanvasElement>(null)
  const { density = 1, shooting = false } = options

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const cleanup =
      mode === "constellation" ? initConstellationBanner(canvas) : initHeroStars(canvas, density, shooting)
    return cleanup
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, density, shooting])

  return ref
}
