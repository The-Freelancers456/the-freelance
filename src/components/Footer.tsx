import React, { useState, useEffect } from 'react'
import { brandConfig, navigationItems, servicesData, featuredProjects } from '../data/siteData'
import { Github, MessageSquare, Mail, ArrowUpRight, Sparkles, MapPin, Clock } from 'lucide-react'

export const Footer: React.FC = () => {
  const [istTime, setIstTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }
      setIstTime(now.toLocaleTimeString('en-IN', options))
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="relative bg-navy-950 border-t border-navy-border pt-20 pb-12 overflow-hidden text-slate-400">
      {/* Background Top Ambient Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Official Logo */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-navy-850 p-1.5 border border-brand-cyan/30 flex items-center justify-center shadow-md">
                <img
                  src="/logo-transparent.png"
                  alt="THE FREELANCE Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-editorial text-xl font-bold text-white tracking-tight">
                  THE FREELANCE
                </span>
                <p className="text-xs text-brand-orange font-mono">
                  {brandConfig.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              {brandConfig.positioning}
            </p>

            {/* Live IST Agency Clock */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-navy-900 border border-white/10 text-xs font-mono text-slate-300">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <Clock className="w-3.5 h-3.5 text-brand-cyan" />
              <span>INDIA (IST): {istTime || '09:00:00 PM IST'}</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase text-white tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-brand-orange transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono uppercase text-white tracking-widest">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="hover:text-brand-cyan transition-colors truncate block"
                  >
                    {s.title.split(' ')[0]} {s.title.split(' ')[1]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Delivered Projects & Official Channels */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase text-white tracking-widest">
              Featured Work
            </h4>
            <ul className="space-y-2 text-sm">
              {featuredProjects.map((p) => (
                <li key={p.id}>
                  <a
                    href={p.liveUrl || '#projects'}
                    target={p.liveUrl ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-lg bg-navy-900 border border-white/5 hover:border-brand-orange/40 text-slate-200 transition-colors group"
                  >
                    <span className="truncate">{p.title} — {p.subtitle.split(' ')[0]} {p.subtitle.split(' ')[1]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-orange transition-colors" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-2 space-y-2 text-xs font-mono">
              <a
                href={brandConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-cyan hover:underline"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: {brandConfig.phone}</span>
              </a>
              <a
                href={`mailto:${brandConfig.email}`}
                className="flex items-center gap-2 text-brand-orange hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{brandConfig.email}</span>
              </a>
              <a
                href={brandConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-white"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub: @The-Freelancers456</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credentials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-300">THE FREELANCE</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Ideas • Technology • Development • Research</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
