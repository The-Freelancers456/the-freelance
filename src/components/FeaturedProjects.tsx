import React, { useState } from 'react'
import { featuredProjects, brandConfig } from '../data/siteData'
import { ProjectData } from '../types'
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Info,
  X,
  Activity,
  Heart,
  FileCheck2,
  Cpu,
  GraduationCap,
} from 'lucide-react'

export const FeaturedProjects: React.FC = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectData | null>(null)

  return (
    <section id="projects" className="relative py-28 bg-navy-900 border-t border-navy-border overflow-hidden">
      {/* Background Lighting Elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-cyan/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-850/80 border border-brand-orange/30 text-brand-orange text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Verified Case Studies
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            Selected Work. <br />
            <span className="text-gradient-cyan-orange">Real Implementations.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            We don't showcase hypothetical templates. Here are the real, production-tested software platforms and engineering capstones we have successfully delivered.
          </p>
        </div>

        {/* Project 1 Case Study */}
        {featuredProjects[0] && (
          <div className="mb-24 rounded-3xl p-6 sm:p-10 lg:p-14 bg-gradient-to-br from-navy-850 via-navy-900 to-navy-950 border border-brand-orange/30 shadow-2xl relative overflow-hidden group">
            {/* Top ambient tag */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-mono font-semibold">
                  DELIVERED // 01
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {featuredProjects[0].category}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-emerald-400">Live in Production</span>
              </div>
            </div>

            {/* Asymmetric Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Description, Problem & Solution */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2">
                    {featuredProjects[0].title}
                  </h3>
                  <p className="text-sm font-mono text-brand-orange">
                    {featuredProjects[0].subtitle}
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {featuredProjects[0].description}
                </p>

                {/* Problem & Solution Accordion Cards */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-navy-950/70 border border-white/5">
                    <span className="text-xs uppercase font-mono text-red-400 font-semibold flex items-center gap-1.5 mb-1">
                      Problem Statement
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {featuredProjects[0].problemStatement}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-navy-950/70 border border-brand-cyan/20">
                    <span className="text-xs uppercase font-mono text-brand-cyan font-semibold flex items-center gap-1.5 mb-1">
                      Our Technical Solution
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {featuredProjects[0].solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Technologies Used:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {featuredProjects[0].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-navy-800 text-xs font-mono text-slate-200 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {featuredProjects[0].metrics.map((m) => (
                    <div key={m.label} className="p-3 rounded-xl bg-navy-950/90 border border-white/5 text-center">
                      <div className="text-lg sm:text-xl font-bold font-mono text-brand-orange">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Case Study CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  {featuredProjects[0].liveUrl && (
                    <a
                      href={featuredProjects[0].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-light text-white font-semibold text-sm shadow-orange-glow flex items-center gap-2 group transition-all"
                    >
                      <span>Visit Live Platform</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}

                  {featuredProjects[0].githubUrl && (
                    <a
                      href={featuredProjects[0].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-navy-800 hover:bg-navy-750 text-slate-300 hover:text-white border border-white/10 text-sm font-medium flex items-center gap-2 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub Code</span>
                    </a>
                  )}

                  <button
                    onClick={() => setActiveCaseStudy(featuredProjects[0])}
                    className="px-4 py-3 rounded-xl bg-navy-950 hover:bg-navy-850 text-brand-cyan text-sm font-medium border border-brand-cyan/25 flex items-center gap-1.5 transition-colors"
                  >
                    <Info className="w-4 h-4" />
                    <span>Deep-Dive Details</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Premium Interactive Browser Frame Mockup */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl bg-navy-950 border border-brand-orange/30 shadow-2xl overflow-hidden group-hover:border-brand-orange/60 transition-colors">
                  {/* Browser Top Bar */}
                  <div className="px-4 py-3 bg-navy-900 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="px-4 py-1 rounded-md bg-navy-950 border border-white/5 text-[11px] font-mono text-slate-400 max-w-xs truncate">
                      https://client-production-portal.app
                    </div>
                    <div className="text-[10px] font-mono text-brand-orange">
                      React 18 • GSAP
                    </div>
                  </div>

                  {/* High-Fidelity Interactive Preview UI */}
                  <div className="p-6 bg-gradient-to-b from-[#101010] to-[#1a1a1a] min-h-[380px] flex flex-col justify-between select-none">
                    <div>
                      {/* Top Bar inside mockup */}
                      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-md bg-[#FF5A1F] flex items-center justify-center text-white font-bold text-xs">
                            P1
                          </div>
                          <span className="font-bold text-white text-sm tracking-wider font-sans">
                            CREATOR MANAGEMENT PLATFORM
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                          <span className="w-2 h-2 rounded-full bg-green-400" />
                          <span>LIVE 60FPS</span>
                        </div>
                      </div>

                      {/* Mockup Kinetic Hero */}
                      <div className="space-y-3 mb-6">
                        <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-mono text-slate-300">
                          PREMIER CREATOR ECOSYSTEM
                        </div>
                        <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase leading-tight font-sans">
                          SCALABLE TALENT <br />
                          <span className="text-[#FF5A1F]">ARCHITECTURE.</span>
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-2">
                          450+ high-impact brand campaigns delivered across multi-tiered media networks with automated creator payout pipelines.
                        </p>
                      </div>

                      {/* Mockup Dual Tiers / Marquee simulation */}
                      <div className="p-3 rounded-xl bg-black/40 border border-white/5 mb-4">
                        <div className="text-[10px] font-mono text-slate-400 uppercase mb-2 flex items-center justify-between">
                          <span>Verified Partner Marquee</span>
                          <span className="text-[#FF5A1F]">450+ Campaigns</span>
                        </div>
                        <div className="flex flex-wrap gap-2 text-[10px] font-mono text-slate-300">
                          <span className="px-2 py-0.5 rounded bg-white/5">OTT Networks</span>
                          <span className="px-2 py-0.5 rounded bg-white/5">E-Commerce</span>
                          <span className="px-2 py-0.5 rounded bg-white/5">Fintech Apps</span>
                          <span className="px-2 py-0.5 rounded bg-white/5">D2C Brands</span>
                          <span className="px-2 py-0.5 rounded bg-white/5">Gaming</span>
                        </div>
                      </div>
                    </div>

                    {/* Mockup Bottom Portal CTAs */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                      <div className="flex gap-2">
                        <span className="px-3 py-1 rounded-lg bg-[#FF5A1F] text-white font-medium text-[11px]">
                          Join as Creator
                        </span>
                        <span className="px-3 py-1 rounded-lg bg-white/10 text-white font-medium text-[11px]">
                          Partner as Brand
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">
                        Production Deployment
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project 2 Case Study */}
        {featuredProjects[1] && (
          <div className="mb-24 rounded-3xl p-6 sm:p-10 lg:p-14 bg-gradient-to-br from-navy-850 via-navy-900 to-navy-950 border border-brand-cyan/30 shadow-2xl relative overflow-hidden group">
            {/* Top ambient tag */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-brand-cyan/20 text-brand-cyan text-xs font-mono font-semibold">
                  DELIVERED // 02
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {featuredProjects[1].category}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-mono text-cyan-400">Live on Vercel</span>
              </div>
            </div>

            {/* Asymmetric Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Interactive Browser Frame Mockup */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative rounded-2xl bg-navy-950 border border-brand-cyan/30 shadow-2xl overflow-hidden group-hover:border-brand-cyan/60 transition-colors">
                  {/* Browser Top Bar */}
                  <div className="px-4 py-3 bg-navy-900 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="px-4 py-1 rounded-md bg-navy-950 border border-white/5 text-[11px] font-mono text-slate-400 max-w-xs truncate">
                      https://motion-showcase.vercel.app
                    </div>
                    <div className="text-[10px] font-mono text-brand-cyan">
                      React 19 • Tailwind 4
                    </div>
                  </div>

                  {/* High-Fidelity Interactive Preview UI */}
                  <div className="p-6 bg-gradient-to-b from-[#141416] to-[#0c0d0e] min-h-[380px] flex flex-col justify-between select-none">
                    <div>
                      {/* Top Bar inside mockup */}
                      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                        <span className="font-bold text-white text-sm tracking-wider font-mono">
                          PROJECT 02 // MOTION
                        </span>
                        <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
                          <span>About</span>
                          <span>Services</span>
                          <span>Work</span>
                        </div>
                      </div>

                      {/* Mockup Animated Typography */}
                      <div className="space-y-3 mb-6">
                        <div className="inline-block px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-[10px] font-mono text-cyan-300">
                          ANIMATED PORTFOLIO SHOWCASE
                        </div>
                        <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase leading-tight font-editorial">
                          DIGITAL EXPERIENCES <br />
                          <span className="text-gradient-cyan">THAT MOVE PEOPLE.</span>
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-2">
                          We craft immersive digital experiences through thoughtful design, modern technology, and meaningful motion.
                        </p>
                      </div>

                      {/* Mockup Project Cards Grid preview */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-[#5b3df5]/30 to-[#17171a] border border-white/10">
                          <span className="text-[9px] font-mono text-slate-400 uppercase">Brand Identity</span>
                          <div className="font-bold text-white text-xs mt-1">Lumen</div>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-br from-[#ff6b4a]/30 to-[#5b3df5]/20 border border-white/10">
                          <span className="text-[9px] font-mono text-slate-400 uppercase">Web Platform</span>
                          <div className="font-bold text-white text-xs mt-1">Nova</div>
                        </div>
                      </div>
                    </div>

                    {/* Mockup Bottom Bar */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>Lighthouse 98+</span>
                      <span className="text-cyan-400">useMotion • gsap.matchMedia</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Description, Problem & Solution */}
              <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                <div>
                  <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2">
                    {featuredProjects[1].title}
                  </h3>
                  <p className="text-sm font-mono text-brand-cyan">
                    {featuredProjects[1].subtitle}
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {featuredProjects[1].description}
                </p>

                {/* Problem & Solution Accordion Cards */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-navy-950/70 border border-white/5">
                    <span className="text-xs uppercase font-mono text-red-400 font-semibold flex items-center gap-1.5 mb-1">
                      Problem Statement
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {featuredProjects[1].problemStatement}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-navy-950/70 border border-brand-cyan/20">
                    <span className="text-xs uppercase font-mono text-brand-cyan font-semibold flex items-center gap-1.5 mb-1">
                      Our Technical Solution
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {featuredProjects[1].solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Technologies Used:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {featuredProjects[1].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-navy-800 text-xs font-mono text-slate-200 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {featuredProjects[1].metrics.map((m) => (
                    <div key={m.label} className="p-3 rounded-xl bg-navy-950/90 border border-white/5 text-center">
                      <div className="text-lg sm:text-xl font-bold font-mono text-brand-cyan">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Case Study CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  {featuredProjects[1].liveUrl && (
                    <a
                      href={featuredProjects[1].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-brand-cyan hover:bg-brand-cyan-light text-navy-950 font-semibold text-sm shadow-cyan-glow flex items-center gap-2 group transition-all"
                    >
                      <span>Visit Live Showcase</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}

                  {featuredProjects[1].githubUrl && (
                    <a
                      href={featuredProjects[1].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-navy-800 hover:bg-navy-750 text-slate-300 hover:text-white border border-white/10 text-sm font-medium flex items-center gap-2 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>View GitHub Code</span>
                    </a>
                  )}

                  <button
                    onClick={() => setActiveCaseStudy(featuredProjects[1])}
                    className="px-4 py-3 rounded-xl bg-navy-950 hover:bg-navy-850 text-brand-orange text-sm font-medium border border-brand-orange/25 flex items-center gap-1.5 transition-colors"
                  >
                    <Info className="w-4 h-4" />
                    <span>Deep-Dive Details</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project 3 Case Study: College Engineering Project */}
        {featuredProjects[2] && (
          <div className="rounded-3xl p-6 sm:p-10 lg:p-14 bg-gradient-to-br from-navy-850 via-navy-900 to-navy-950 border border-brand-orange/30 shadow-2xl relative overflow-hidden group">
            {/* Top ambient tag */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-xs font-mono font-semibold flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  COLLEGE PROJECT // 03
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {featuredProjects[2].category}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-emerald-400">Defended with Top Grade (O)</span>
              </div>
            </div>

            {/* Asymmetric Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Description, Problem & Solution */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2">
                    {featuredProjects[2].title}
                  </h3>
                  <p className="text-sm font-mono text-brand-orange">
                    {featuredProjects[2].subtitle}
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {featuredProjects[2].description}
                </p>

                {/* Problem & Solution Accordion Cards */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-navy-950/70 border border-white/5">
                    <span className="text-xs uppercase font-mono text-red-400 font-semibold flex items-center gap-1.5 mb-1">
                      Academic Problem Statement
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {featuredProjects[2].problemStatement}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-navy-950/70 border border-brand-cyan/20">
                    <span className="text-xs uppercase font-mono text-brand-cyan font-semibold flex items-center gap-1.5 mb-1">
                      Our End-to-End Solution
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {featuredProjects[2].solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Technologies & Research Standards:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {featuredProjects[2].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-navy-800 text-xs font-mono text-slate-200 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {featuredProjects[2].metrics.map((m) => (
                    <div key={m.label} className="p-3 rounded-xl bg-navy-950/90 border border-white/5 text-center">
                      <div className="text-lg sm:text-xl font-bold font-mono text-brand-orange">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Case Study CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <a
                    href="#contact"
                    className="px-6 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-light text-white font-semibold text-sm shadow-orange-glow flex items-center gap-2 group transition-all"
                  >
                    <span>Request College Project Guidance</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <button
                    onClick={() => setActiveCaseStudy(featuredProjects[2])}
                    className="px-4 py-3 rounded-xl bg-navy-950 hover:bg-navy-850 text-brand-cyan text-sm font-medium border border-brand-cyan/25 flex items-center gap-1.5 transition-colors"
                  >
                    <Info className="w-4 h-4" />
                    <span>View Academic Specs</span>
                  </button>
                </div>
              </div>

              {/* Right Column: High-Fidelity IoT & AI Dashboard Mockup */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl bg-navy-950 border border-brand-orange/30 shadow-2xl overflow-hidden group-hover:border-brand-orange/60 transition-colors">
                  {/* Browser Top Bar */}
                  <div className="px-4 py-3 bg-navy-900 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="px-4 py-1 rounded-md bg-navy-950 border border-white/5 text-[11px] font-mono text-slate-400 max-w-xs truncate">
                      https://academic-iot-health.edu/vitals
                    </div>
                    <div className="text-[10px] font-mono text-brand-orange flex items-center gap-1">
                      <Cpu className="w-3 h-3" />
                      <span>ESP32 • TensorFlow</span>
                    </div>
                  </div>

                  {/* High-Fidelity Interactive Preview UI */}
                  <div className="p-6 bg-gradient-to-b from-[#0a0f1d] to-[#060b14] min-h-[380px] flex flex-col justify-between select-none">
                    <div>
                      {/* Top Bar inside mockup */}
                      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-md bg-brand-orange flex items-center justify-center text-white font-bold text-xs">
                            P3
                          </div>
                          <span className="font-bold text-white text-sm tracking-wider font-mono">
                            IoT BIOMEDICAL AI PLATFORM
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                          <Activity className="w-3 h-3 animate-pulse" />
                          <span>LIVE SENSOR STREAM</span>
                        </div>
                      </div>

                      {/* Mockup Biometric Telemetry Grid */}
                      <div className="grid grid-cols-3 gap-2.5 mb-5">
                        <div className="p-3 rounded-xl bg-navy-900 border border-white/5">
                          <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400 mb-1">
                            <Heart className="w-3 h-3 text-red-400" />
                            <span>PULSE</span>
                          </div>
                          <div className="text-lg font-bold font-mono text-white">76 <span className="text-[10px] text-slate-400">BPM</span></div>
                          <div className="text-[9px] text-emerald-400 font-mono">Normal Sinus</div>
                        </div>

                        <div className="p-3 rounded-xl bg-navy-900 border border-white/5">
                          <div className="text-[10px] font-mono text-slate-400 mb-1">SpO2 LEVEL</div>
                          <div className="text-lg font-bold font-mono text-white">98.5 <span className="text-[10px] text-slate-400">%</span></div>
                          <div className="text-[9px] text-emerald-400 font-mono">Optimal Range</div>
                        </div>

                        <div className="p-3 rounded-xl bg-navy-900 border border-white/5">
                          <div className="text-[10px] font-mono text-slate-400 mb-1">ML PREDICTION</div>
                          <div className="text-lg font-bold font-mono text-emerald-400">LOW RISK</div>
                          <div className="text-[9px] text-slate-400 font-mono">Score: 0.04</div>
                        </div>
                      </div>

                      {/* Mockup Academic Paper & Model Metrics Banner */}
                      <div className="p-3.5 rounded-xl bg-navy-900/90 border border-brand-cyan/20 space-y-2 mb-4">
                        <div className="flex items-center justify-between text-[11px] font-mono">
                          <span className="text-brand-cyan flex items-center gap-1">
                            <FileCheck2 className="w-3.5 h-3.5" />
                            IEEE Conference Format Paper
                          </span>
                          <span className="text-emerald-400 font-semibold">96.8% Accuracy</span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          Complete 2-column LaTeX manuscript, comparative confusion matrix, and full viva defense slide deck.
                        </p>
                      </div>
                    </div>

                    {/* Mockup Bottom Bar */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                      <span>Plagiarism: &lt; 5% Verified</span>
                      <span className="text-brand-orange">100% Viva Voce Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Case Study Modal Deep-Dive */}
      {activeCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-3xl rounded-3xl bg-navy-900 border border-brand-cyan/30 p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setActiveCaseStudy(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-navy-800 text-slate-400 hover:text-white hover:bg-navy-750 transition-colors"
              aria-label="Close case study details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-mono text-brand-orange uppercase tracking-wider block mb-2">
                VERIFIED CASE STUDY // {activeCaseStudy.year}
              </span>
              <h3 className="font-editorial text-2xl sm:text-4xl font-extrabold text-white mb-2">
                {activeCaseStudy.title}
              </h3>
              <p className="text-sm font-mono text-brand-cyan mb-4">
                {activeCaseStudy.subtitle}
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeCaseStudy.description}
              </p>
            </div>

            {/* Key Deliverables & Features */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">
                Key Engineered Capabilities:
              </h4>
              <div className="space-y-2">
                {activeCaseStudy.keyFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-navy-850/80 border border-white/5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcome & Impact */}
            <div className="mb-8 p-4 rounded-2xl bg-navy-950 border border-emerald-500/20">
              <h4 className="text-xs font-mono uppercase text-emerald-400 tracking-wider mb-2 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" />
                Delivered Outcome
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeCaseStudy.outcome}
              </p>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
              {activeCaseStudy.liveUrl ? (
                <a
                  href={activeCaseStudy.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-light text-white font-semibold text-sm shadow-orange-glow flex items-center gap-2"
                >
                  <span>Open Live Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <a
                  href="#contact"
                  onClick={() => setActiveCaseStudy(null)}
                  className="px-6 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-light text-white font-semibold text-sm shadow-orange-glow flex items-center gap-2"
                >
                  <span>Inquire About Similar College Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {activeCaseStudy.githubUrl && (
                <a
                  href={activeCaseStudy.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-navy-800 text-slate-200 hover:text-white text-sm font-medium flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>Repository</span>
                </a>
              )}

              <button
                onClick={() => setActiveCaseStudy(null)}
                className="px-5 py-3 rounded-xl bg-navy-800 text-slate-300 text-sm font-medium ml-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
