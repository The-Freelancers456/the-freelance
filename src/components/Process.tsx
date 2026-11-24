import React from 'react'
import { developmentProcess } from '../data/siteData'
import { GitCommit, ArrowRight, CheckCircle2, Workflow, Clock } from 'lucide-react'

export const Process: React.FC = () => {
  return (
    <section id="process" className="relative py-28 bg-navy-950 border-t border-navy-border overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-850 border border-brand-cyan/30 text-brand-cyan text-xs font-mono uppercase tracking-widest mb-4">
            <Workflow className="w-3.5 h-3.5 text-brand-orange" />
            Engineering Lifecycle
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            From Concept <br />
            <span className="text-gradient-cyan-orange">to Completion.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Every successful project follows a battle-tested, structured trajectory. From initial requirement discovery to live production deployment and technical documentation defense.
          </p>
        </div>

        {/* Timeline Process Flow */}
        <div className="relative">
          {/* Central Connecting Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-0.5 -translate-x-1/2 bg-gradient-to-b from-brand-orange via-brand-cyan to-brand-orange opacity-25" />

          <div className="space-y-12 lg:space-y-16">
            {developmentProcess.map((step, index) => {
              const isEven = index % 2 === 1

              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge in Center for Desktop */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-navy-900 border-2 border-brand-orange shadow-orange-glow items-center justify-center z-20">
                    <span className="font-mono text-xs font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pl-16' : 'lg:pr-16'}`}>
                    <div className="p-8 rounded-3xl bg-gradient-to-b from-navy-850 to-navy-900 border border-white/10 hover:border-brand-orange/40 transition-all duration-300 shadow-xl group hover:-translate-y-1">
                      {/* Top Header */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="lg:hidden font-mono text-xs font-bold text-brand-orange px-2.5 py-1 rounded-md bg-brand-orange/10 border border-brand-orange/20">
                          STAGE {step.number}
                        </span>
                        <span className="hidden lg:inline-block font-mono text-xs text-brand-cyan px-2.5 py-1 rounded-md bg-brand-cyan/10 border border-brand-cyan/20">
                          {step.duration}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                          <Clock className="w-3.5 h-3.5 text-slate-500" />
                          <span>Structured Milestone</span>
                        </div>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="font-editorial text-2xl font-bold text-white mb-1 group-hover:text-brand-orange transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs font-mono text-brand-cyan mb-4">
                        {step.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-slate-300 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Deliverables Checklist */}
                      <div className="pt-4 border-t border-white/10">
                        <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block mb-2.5">
                          Key Deliverables:
                        </span>
                        <div className="space-y-1.5">
                          {step.deliverables.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden lg:block w-1/2" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
