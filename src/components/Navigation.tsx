import React, { useState, useEffect } from 'react'
import { brandConfig, navigationItems } from '../data/siteData'
import { MessageSquare, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react'
import { useMagnetic } from '../hooks/useMagnetic'

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const magneticButtonRef = useMagnetic<HTMLAnchorElement>(0.3)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-navy-950/85 backdrop-blur-md border-b border-navy-border shadow-card-elevated'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-orange/50 rounded-lg p-1"
            aria-label="THE FREELANCE Homepage"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl overflow-hidden bg-navy-850/80 p-1 border border-cyan-500/20 shadow-sm group-hover:border-brand-orange/50 transition-colors">
              <img
                src="/logo-transparent.png"
                alt="THE FREELANCE Official Logo"
                className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-brand-orange transition-colors">
                THE FREELANCE
              </span>
              <span className="text-[10px] sm:text-xs text-brand-muted tracking-widest uppercase font-mono hidden sm:inline-block">
                Ideas • Technology • Research
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-1.5 rounded-full bg-navy-850/60 border border-white/5 backdrop-blur-sm">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp Quick Link */}
            <a
              href={brandConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-navy-800/80 text-brand-cyan hover:text-white hover:bg-brand-cyan/20 border border-brand-cyan/20 hover:border-brand-cyan/50 transition-all duration-200 flex items-center justify-center shadow-sm"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp: 9080234590"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* Primary Magnetic CTA */}
            <a
              ref={magneticButtonRef}
              href="#contact"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-orange to-orange-500 hover:from-brand-orange-light hover:to-brand-orange shadow-orange-glow hover:shadow-orange-glow/80 transition-all duration-200 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Discuss Project
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={brandConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-navy-800 text-brand-cyan border border-brand-cyan/30"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-navy-800/90 text-slate-200 hover:text-white border border-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-navy-950/95 border-b border-navy-border backdrop-blur-xl p-6 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-4">
            <div className="pb-3 border-b border-white/10 flex items-center justify-between">
              <span className="text-xs uppercase font-mono text-brand-orange flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Engineering Studio
              </span>
              <span className="text-xs font-mono text-slate-400">Available for Work</span>
            </div>

            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-200 hover:text-brand-orange py-2 border-b border-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-brand-orange text-white font-semibold shadow-orange-glow flex items-center justify-center gap-2"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href={brandConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-navy-800 border border-brand-cyan/40 text-brand-cyan font-medium flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: 9080234590</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
