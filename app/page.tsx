import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import MarketMarquee from '@/components/market-marquee'
import BentoSection from '@/components/bento-section'
import AIAnalystSection from '@/components/ai-analyst-section'
import PortfolioSection from '@/components/portfolio-section'
import CTASection from '@/components/cta-section'
import IntroSequence from '@/components/intro-sequence'
import BrandMark from '@/components/brand-mark'
import { LanguageProvider } from '@/lib/i18n'

export default function Page() {
  return (
    <LanguageProvider>
      <main
        className="relative min-h-screen overflow-x-hidden"
        style={{ background: '#0A0A0B', ['--brand-reveal' as string]: 'clamp(70px, 20vw, 220px)' }}
      >
        {/* Cinematic intro overlay */}
        <IntroSequence />

        {/* Navbar */}
        <Navbar />

        {/* Giant fixed wordmark revealed at the bottom of the page */}
        <BrandMark />

        {/* Solid-background content that scrolls over the wordmark */}
        <div
          className="relative z-10"
          style={{ background: '#0A0A0B', marginBottom: 'var(--brand-reveal)' }}
        >
          {/* Hero */}
          <HeroSection />

          {/* Market Marquee */}
          <MarketMarquee />

          {/* Divider */}
          <div className="w-full h-px max-w-5xl mx-auto" style={{ background: 'rgba(255,255,255,0.06)' }} />

          {/* Bento modules */}
          <BentoSection />

          {/* Divider */}
          <div className="w-full h-px max-w-5xl mx-auto" style={{ background: 'rgba(255,255,255,0.06)' }} />

          {/* AI Analyst Showcase */}
          <AIAnalystSection />

          {/* Divider */}
          <div className="w-full h-px max-w-5xl mx-auto" style={{ background: 'rgba(255,255,255,0.06)' }} />

          {/* Portfolio Intelligence */}
          <PortfolioSection />

          {/* CTA + Footer */}
          <CTASection />
        </div>
      </main>
    </LanguageProvider>
  )
}
