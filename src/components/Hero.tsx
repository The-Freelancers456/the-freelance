import React, { useEffect, useRef } from 'react'
import { brandConfig } from '../data/siteData'
import { ArrowDown, ArrowUpRight, MessageSquare, Sparkles, Terminal, Code2, Cpu } from 'lucide-react'
import { useMagnetic } from '../hooks/useMagnetic'

export const Hero: React.FC = () => {
  const exploreBtnRef = useMagnetic<HTMLAnchorElement>(0.35)
  const discussBtnRef = useMagnetic<HTMLAnchorElement>(0.35)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Interactive subtle particle grid canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    // Particles array
    const particleCount = Math.min(Math.floor(width / 30), 45)
    const particles: { x: number; y: number; vx: number; vy: number; radius: number; color: string }[] = []
    const colors = ['rgba(0, 210, 255, 0.4)', 'rgba(255, 107, 0, 0.35)', 'rgba(56, 189, 248, 0.25)']

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw faint connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 140) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.12 * (1 - dist / 140)})`
            ctx.lineWidth = 0.8
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Update & draw particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-navy-950">
      {/* Background Interactive Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-40 z-0"
      />

      {/* Ambient Lighting Halos */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-brand-orange/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-navy-700/30 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Mesh Overlay */}
      <div className="absolute inset-0 bg-grid-mesh opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Brand Identity Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-850/90 border border-brand-cyan/25 shadow-sm mb-8 backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
          <span className="text-xs sm:text-sm font-mono tracking-wider text-slate-300 uppercase">
            Creative Technology & Research Studio
          </span>
          <span className="text-brand-cyan text-xs font-mono">• Live Projects</span>
        </div>

        {/* Central Logo Feature Showcase */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-4 bg-gradient-to-r from-brand-orange/20 via-brand-cyan/20 to-brand-orange/20 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-3xl p-3 bg-gradient-to-b from-navy-800 to-navy-900 border border-brand-cyan/30 shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
            <img
              src="/logo-transparent.png"
              alt="THE FREELANCE Official Logo"
              className="w-full h-full object-contain filter drop-shadow-md"
            />
          </div>
          {/* Subtle floating badge */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-navy-950/90 border border-brand-orange/40 text-[11px] font-mono text-brand-orange whitespace-nowrap shadow-md">
            Ideas • Technology • Research
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.05] sm:leading-[1.05] mb-6">
          WE TURN IDEAS <br className="hidden sm:inline" />
          <span className="text-gradient-cyan-orange">INTO REALITY.</span>
        </h1>

        {/* Supporting Editorial Paragraph */}
        <p className="max-w-3xl text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-10 text-balance">
          From innovative concepts to fully developed technology solutions, we help transform ideas into impactful digital experiences.
        </p>

        {/* Interactive Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto mb-16">
          {/* Primary CTA */}
          <a
            ref={exploreBtnRef}
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-brand-orange to-orange-500 hover:from-brand-orange-light hover:to-brand-orange shadow-orange-glow hover:shadow-orange-glow/90 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Explore Our Work</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Secondary CTA */}
          <a
            ref={discussBtnRef}
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-slate-200 hover:text-white bg-navy-850/80 hover:bg-navy-800 border border-brand-cyan/25 hover:border-brand-cyan/60 shadow-sm transition-all duration-300 flex items-center justify-center gap-2 group backdrop-blur-md"
          >
            <MessageSquare className="w-5 h-5 text-brand-cyan group-hover:scale-110 transition-transform" />
            <span>Let's Discuss Your Project</span>
          </a>
        </div>

        {/* Target Audience Pills Strip */}
        <div className="w-full max-w-4xl pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-300 font-mono">
          <span className="text-slate-400 font-medium mr-1 uppercase text-[11px] tracking-wider">
            Tailored For:
          </span>
          <span className="px-3 py-1 rounded-full bg-navy-800/80 border border-white/10 flex items-center gap-1.5 hover:border-brand-orange/40 transition-colors">
            <GraduationCapIcon className="w-3.5 h-3.5 text-brand-orange" />
            College Students
          </span>
          <span className="px-3 py-1 rounded-full bg-navy-800/80 border border-white/10 flex items-center gap-1.5 hover:border-brand-cyan/40 transition-colors">
            <Cpu className="w-3.5 h-3.5 text-brand-cyan" />
            Final-Year Projects
          </span>
          <span className="px-3 py-1 rounded-full bg-navy-800/80 border border-white/10 flex items-center gap-1.5 hover:border-brand-orange/40 transition-colors">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
            Innovative Ideas
          </span>
          <span className="px-3 py-1 rounded-full bg-navy-800/80 border border-white/10 flex items-center gap-1.5 hover:border-brand-cyan/40 transition-colors">
            <Code2 className="w-3.5 h-3.5 text-brand-cyan" />
            Software Development
          </span>
          <span className="px-3 py-1 rounded-full bg-navy-800/80 border border-white/10 flex items-center gap-1.5 hover:border-brand-orange/40 transition-colors">
            <Terminal className="w-3.5 h-3.5 text-brand-orange" />
            IEEE Research Papers
          </span>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="flex flex-col items-center text-xs font-mono tracking-widest text-slate-400 hover:text-brand-cyan transition-colors"
          >
            <span className="mb-2">SCROLL DOWN</span>
            <div className="w-5 h-8 rounded-full border-2 border-slate-500/50 flex items-start justify-center p-1">
              <div className="w-1.5 h-2 bg-brand-orange rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

function GraduationCapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  )
}
