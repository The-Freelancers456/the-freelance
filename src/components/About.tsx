import React from 'react'
import { corePillars, targetAudienceSegments } from '../data/siteData'
import { Sparkles, CheckCircle2, ShieldCheck, Zap, Layers, Compass, ArrowRight } from 'lucide-react'

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 bg-navy-900 border-t border-navy-border overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-800/80 border border-brand-orange/30 text-brand-orange text-xs font-mono uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            Who We Are & What We Do
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            More Than Just Development. <br />
            <span className="text-gradient-cyan-orange">We Build Possibilities.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            At <strong className="text-white font-semibold">THE FREELANCE</strong>, we believe every breakthrough begins as an ambitious idea. We bridge the gap between creative ambition and practical execution, turning complex concepts into robust, production-ready software, intelligent AI models, and publication-standard research engineering.
          </p>
        </div>

        {/* Editorial Value Statement Banner */}
        <div className="mb-20 rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-navy-850 to-navy-950 border border-brand-cyan/20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-72 h-72 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase font-mono text-brand-cyan tracking-widest block mb-2">
                Our Engineering Philosophy
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white mb-4">
                Structured Engineering. Practical Execution. Zero Compromise.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Whether you are a final-year engineering team aiming for a top-tier viva score, a researcher requiring IEEE-compliant algorithmic formulation, or an entrepreneur scaling a digital product — we provide rigorous, end-to-end technical execution with clear documentation and 100% working source code.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span>Real Working Code</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                  <span>IEEE Paper Standards</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                  <span>1-on-1 Walkthroughs</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-navy-900/90 rounded-2xl p-6 border border-white/10 shadow-inner">
              <div className="text-xs font-mono text-slate-400 mb-3 flex items-center justify-between border-b border-white/10 pb-2">
                <span>OUR CORE VALUES</span>
                <Sparkles className="w-4 h-4 text-brand-orange" />
              </div>
              <ul className="space-y-3">
                {[
                  { title: 'Innovation', desc: 'Modern frameworks, AI integration & creative approaches' },
                  { title: 'Technical Expertise', desc: 'Deep architectural understanding across web, AI & systems' },
                  { title: 'Reliability', desc: 'Zero fake stats, guaranteed deadlines & verifiable deliverables' },
                  { title: 'Complete Transparency', desc: 'Clear communication with complete code ownership' },
                ].map((val) => (
                  <li key={val.title} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">{val.title}</h4>
                      <p className="text-xs text-slate-400">{val.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 6 Key Pillars / Methodological Capabilities */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-white/10">
            <div>
              <span className="text-xs uppercase font-mono text-brand-orange tracking-widest block mb-1">
                The 6 Engineering Disciplines
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                How We Approach Technology
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 sm:mt-0 font-mono">
              From whiteboard concept to production handover
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corePillars.map((pillar) => (
              <div
                key={pillar.step}
                className="group p-6 rounded-2xl bg-gradient-to-b from-navy-850 to-navy-900 border border-white/10 hover:border-brand-orange/40 transition-all duration-300 hover:shadow-card-elevated hover:-translate-y-1 relative"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-bold text-brand-cyan/60 group-hover:text-brand-orange transition-colors">
                    {pillar.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-navy-800 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-brand-orange/20 transition-all">
                    <Layers className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="font-editorial text-lg font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Target Audience Spectrum Grid */}
        <div className="rounded-3xl p-8 bg-navy-950/70 border border-navy-border">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan block mb-2">
              Who We Serve
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
              Built For Innovators, Students & Ambitious Clients
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {targetAudienceSegments.map((seg, idx) => (
              <div
                key={seg.label}
                className="p-5 rounded-xl bg-navy-900/60 border border-white/5 hover:border-brand-cyan/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono text-brand-orange mb-1.5">
                    SEGMENT 0{idx + 1}
                  </div>
                  <h4 className="font-semibold text-white text-base mb-1">{seg.label}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{seg.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-brand-cyan">
                  <span>Full Technical Support</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
