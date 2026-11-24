import React, { useState } from 'react'
import { servicesData, brandConfig } from '../data/siteData'
import { ServiceData } from '../types'
import {
  Cpu,
  Code2,
  Globe,
  GraduationCap,
  FileText,
  BookOpenCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  X,
  MessageSquare,
  Wrench,
} from 'lucide-react'

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Code2,
  Globe,
  GraduationCap,
  FileText,
  BookOpenCheck,
}

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null)

  return (
    <section id="services" className="relative py-28 bg-navy-950 border-t border-navy-border overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-850 border border-brand-cyan/30 text-brand-cyan text-xs font-mono uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              Comprehensive Technical Capabilities
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              What We Bring to <br />
              <span className="text-gradient-cyan-orange">the Table.</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md mt-4 md:mt-0 leading-relaxed font-normal">
            From algorithmic artificial intelligence to full-scale enterprise web systems and IEEE research publications, explore our six core technical domains.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => {
            const Icon = iconMap[service.iconName] || Wrench
            const isOrange = service.accentColor === 'orange'

            return (
              <div
                key={service.id}
                className="group relative rounded-3xl p-8 bg-gradient-to-b from-navy-850 to-navy-900 border border-white/10 hover:border-brand-orange/50 transition-all duration-300 flex flex-col justify-between hover:shadow-card-elevated hover:-translate-y-1.5"
              >
                {/* Glow highlight on hover */}
                <div
                  className={`absolute -inset-px rounded-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 pointer-events-none ${
                    isOrange
                      ? 'bg-gradient-to-b from-brand-orange/20 to-transparent'
                      : 'bg-gradient-to-b from-brand-cyan/20 to-transparent'
                  }`}
                />

                <div className="relative z-10">
                  {/* Card Header: Number & Distinctive Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-semibold text-slate-500 uppercase tracking-widest">
                      SERVICE // {service.number}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isOrange
                          ? 'bg-brand-orange/15 text-brand-orange group-hover:bg-brand-orange group-hover:text-white shadow-sm'
                          : 'bg-brand-cyan/15 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-navy-950 shadow-sm'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-editorial text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Feature Bullets (Quick glance) */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${
                            isOrange ? 'text-brand-orange' : 'text-brand-cyan'
                          }`}
                        />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-navy-950/80 border border-white/5 text-[11px] font-mono text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md bg-navy-950/80 text-[11px] font-mono text-slate-500">
                        +{service.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Button: Learn More */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">
                    {service.targetAudience.split(',')[0]}
                  </span>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-brand-orange transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Service Detailed Modal Drawer */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl rounded-3xl bg-navy-900 border border-brand-cyan/30 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-navy-800 text-slate-400 hover:text-white hover:bg-navy-700 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="mb-6">
              <span className="text-xs font-mono text-brand-orange uppercase tracking-wider block mb-2">
                SERVICE SPECIFICATION // {selectedService.number}
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white mb-3">
                {selectedService.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {selectedService.fullDesc}
              </p>
            </div>

            {/* Complete Key Features */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">
                What's Included:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-navy-850/80 border border-white/5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Matrix */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">
                Technologies & Tools:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg bg-navy-800 border border-white/10 text-xs font-mono text-brand-cyan"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`https://wa.me/919080234590?text=Hi%20THE%20FREELANCE%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(
                  selectedService.title
                )}%20service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-light text-white font-semibold text-sm shadow-orange-glow flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire About This Service</span>
              </a>
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-300 text-sm font-medium"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
