import React from 'react'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { FeaturedProjects } from './components/FeaturedProjects'
import { Process } from './components/Process'
import { WhyChooseUs } from './components/WhyChooseUs'
import { CallToAction } from './components/CallToAction'
import { Footer } from './components/Footer'
import { CustomCursor } from './components/CustomCursor'
import { brandConfig } from './data/siteData'
import { MessageSquare, ArrowUp } from 'lucide-react'

export function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-navy-950 text-brand-white font-sans selection:bg-brand-orange selection:text-white relative">
      {/* Interactive Cursor physics */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navigation />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero / Landing */}
        <Hero />

        {/* Section 2: Introduction / About Us */}
        <About />

        {/* Section 3: Our Services */}
        <Services />

        {/* Section 4: Featured Projects */}
        <FeaturedProjects />

        {/* Section 5: Our Development Process */}
        <Process />

        {/* Section 6: Why Choose Us? */}
        <WhyChooseUs />

        {/* Section 7: Let's Build Something (CTA) */}
        <CallToAction />
      </main>

      {/* Section 8: Footer */}
      <Footer />

      {/* Floating Quick Action Widget (WhatsApp & Back to Top) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="w-10 h-10 rounded-full bg-navy-800/90 hover:bg-navy-700 text-slate-300 hover:text-white border border-white/10 shadow-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        {/* WhatsApp Floating Instant Dial */}
        <a
          href={brandConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat directly on WhatsApp"
          className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg hover:shadow-emerald-500/50 hover:scale-110 transition-all duration-300"
        >
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-brand-orange rounded-full animate-ping" />
          <MessageSquare className="w-6 h-6" />
          
          {/* Tooltip on hover */}
          <span className="hidden sm:group-hover:inline-block absolute right-14 px-3 py-1.5 rounded-xl bg-navy-900 border border-white/10 text-xs font-mono text-white whitespace-nowrap shadow-xl">
            WhatsApp 9080234590
          </span>
        </a>
      </div>
    </div>
  )
}

export default App
