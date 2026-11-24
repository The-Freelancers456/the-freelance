import React from 'react'
import { whyChooseUs, brandConfig } from '../data/siteData'
import {
  CheckCircle2,
  Layers,
  Workflow,
  Sliders,
  FileCheck2,
  Headphones,
  ShieldAlert,
  Sparkles,
  ArrowRight,
  Code2,
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  CheckCircle2,
  Layers,
  Workflow,
  Sliders,
  FileCheck2,
  Headphones,
}

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="relative py-28 bg-navy-900 border-t border-navy-border overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Editorial Pitch */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-850 border border-brand-orange/30 text-brand-orange text-xs font-mono uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Value Proposition
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                Why Work With <br />
                <span className="text-gradient-cyan-orange">THE FREELANCE?</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                In an ecosystem flooded with unreliable freelancing promises and recycled internet templates, we provide an uncompromised standard of excellence.
              </p>
            </div>

            {/* Our Authentic Guarantee Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-850 to-navy-950 border border-brand-cyan/20 shadow-xl space-y-4">
              <div className="flex items-center gap-2.5 text-brand-cyan font-mono text-xs uppercase tracking-wider">
                <Code2 className="w-4 h-4" />
                <span>Our Engineering Standard</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We believe in <strong>radical transparency</strong>: zero fabricated statistics, zero fake client testimonials, and 100% focus on working software, validated research logic, and complete technical handover.
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Verified Deliverables</span>
                <span className="text-brand-orange">100% Original Code</span>
              </div>
            </div>

            {/* Quick Action */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-white transition-colors group"
              >
                <span>Speak directly with our technical team</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: 6 Value Pillar Cards */}
          <div className="lg:col-span-7 space-y-6">
            {whyChooseUs.map((item, index) => {
              const Icon = iconMap[item.iconName] || CheckCircle2
              const isEven = index % 2 === 1

              return (
                <div
                  key={item.id}
                  className="group p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-navy-850 to-navy-900 border border-white/10 hover:border-brand-cyan/40 transition-all duration-300 hover:shadow-card-elevated hover:-translate-y-1 relative"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-navy-800 flex items-center justify-center text-brand-cyan group-hover:text-brand-orange group-hover:bg-brand-orange/10 transition-colors shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-editorial text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-navy-950 border border-white/5 text-[11px] font-mono text-brand-orange whitespace-nowrap self-start sm:self-center">
                      {item.highlight}
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed pl-0 sm:pl-13">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
