import React, { useState } from 'react'
import { brandConfig } from '../data/siteData'
import { MessageSquare, Mail, Phone, Send, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react'
import { useMagnetic } from '../hooks/useMagnetic'

export const CallToAction: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Final-Year Project',
    description: '',
  })
  const startBtnRef = useMagnetic<HTMLButtonElement>(0.3)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Format a direct WhatsApp inquiry with their filled details
    const text = `Hi THE FREELANCE,%0A%0AMy Name: ${encodeURIComponent(
      formData.name
    )}%0AEmail: ${encodeURIComponent(formData.email)}%0APhone: ${encodeURIComponent(
      formData.phone
    )}%0ACategory: ${encodeURIComponent(formData.category)}%0ARequirements: ${encodeURIComponent(
      formData.description
    )}`

    window.open(`https://wa.me/919080234590?text=${text}`, '_blank')
    setFormSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-28 bg-navy-950 border-t border-navy-border overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-orange/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Powerful Editorial Headline & Direct Contact CTAs */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy-850 border border-brand-orange/30 text-brand-orange text-xs font-mono uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Let's Build Something Great
              </div>
              <h2 className="font-editorial text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.05] mb-6">
                Have an Idea? <br />
                <span className="text-gradient-cyan-orange">Let's Make It Happen.</span>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Whether you're starting with an idea or already have a project in mind, we're ready to help you turn it into reality.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-4">
              {/* WhatsApp Card */}
              <a
                href={brandConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-2xl bg-gradient-to-r from-navy-850 to-navy-900 border border-brand-cyan/25 hover:border-brand-cyan/60 transition-all duration-300 hover:shadow-cyan-glow/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-cyan/15 text-brand-cyan flex items-center justify-center group-hover:bg-brand-cyan group-hover:text-navy-950 transition-colors">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Direct WhatsApp Instant Chat
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white group-hover:text-brand-cyan transition-colors">
                      {brandConfig.formattedPhone}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${brandConfig.email}?subject=Project%20Inquiry%20-%20THE%20FREELANCE`}
                className="group flex items-center justify-between p-5 rounded-2xl bg-gradient-to-r from-navy-850 to-navy-900 border border-brand-orange/25 hover:border-brand-orange/60 transition-all duration-300 hover:shadow-orange-glow/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/15 text-brand-orange flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Official Email Inquiry
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white group-hover:text-brand-orange transition-colors">
                      {brandConfig.email}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Availability Pill */}
            <div className="flex items-center gap-3 text-xs font-mono text-slate-400 pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Response Window: Typically under 15 minutes during IST hours</span>
            </div>
          </div>

          {/* Right Column: Interactive Project Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-navy-850 to-navy-900 border border-brand-cyan/25 shadow-2xl relative overflow-hidden">
              <h3 className="font-editorial text-2xl font-bold text-white mb-2">
                Start Your Project
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in your project requirements below to initiate a structured technical discussion.
              </p>

              {formSubmitted ? (
                <div className="p-8 text-center rounded-2xl bg-navy-950 border border-emerald-500/30 space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Opening WhatsApp...</h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Your project details have been formatted. A WhatsApp chat is launching to connect you directly with our engineering team.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-brand-cyan underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Name / College Team
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma / Final Year Team"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-orange transition-colors text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-orange transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-orange transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Project Domain / Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-white focus:outline-none focus:border-brand-orange transition-colors text-sm"
                    >
                      <option value="Final-Year Academic Project">Final-Year & Academic Project</option>
                      <option value="AI & Machine Learning Application">AI & Machine Learning Application</option>
                      <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                      <option value="Custom Software Development">Custom Software Development</option>
                      <option value="IEEE Research Paper & Publication">IEEE Research Paper & Publication</option>
                      <option value="Documentation, SRS & PPT">Documentation, SRS & PPT Preparation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">
                      Project Overview & Target Deadline
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us about the project idea, required features, or submission deadlines..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-navy-950 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-brand-orange transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    ref={startBtnRef}
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-orange to-orange-500 hover:from-brand-orange-light hover:to-brand-orange text-white font-semibold text-sm shadow-orange-glow hover:shadow-orange-glow/90 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    <span>Start Your Project</span>
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
