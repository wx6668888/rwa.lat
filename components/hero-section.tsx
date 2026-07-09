'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import dynamic from 'next/dynamic'
import { WordReveal, MagneticButton } from './motion-primitives'
import { useI18n } from '@/lib/i18n'

const AICore = dynamic(() => import('./ai-core'), { ssr: false })

// Intro overlay runs ~2.6s; hero content reveals as it lifts.
const BASE = 2.4

export default function HeroSection() {
  const { t } = useI18n()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex overflow-hidden"
      aria-label="Hero"
      style={{ background: '#0A0A0B' }}
    >
      {/* Faint grid lines (subtle, no colored glow) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 80% 80% at 50% 45%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 80% at 50% 45%, black 40%, transparent 100%)',
        }}
      />

      {/* Globe — centered, large. Sits a bit higher on mobile so it clears the copy. */}
      <div className="absolute inset-0 z-0 flex items-start justify-center pt-16 sm:pt-8 md:items-center md:pt-0">
        <motion.div
          className="w-full max-w-[680px]"
          initial={{ opacity: 0, scale: 0.75, filter: 'blur(18px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <AICore />
        </motion.div>
      </div>

      {/* Copy anchored to the bottom-left */}
      <motion.div
        className="relative z-10 w-full flex items-end"
        style={{ y: textY, opacity }}
      >
        <div className="w-full max-w-xl px-5 md:px-12 pb-24 md:pb-28 text-left pointer-events-none">
          <WordReveal
            as="h1"
            text={t.hero.title1}
            delay={BASE + 0.05}
            stagger={0.1}
            className="text-balance leading-[0.95] font-bold tracking-tight text-white"
            style={{ fontSize: 'clamp(2.5rem, 12vw, 5.5rem)' }}
          />
          <WordReveal
            as="h2"
            text={t.hero.title2}
            delay={BASE + 0.25}
            stagger={0.1}
            className="text-balance leading-[0.95] font-bold tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 12vw, 5.5rem)', color: '#2EE88E' }}
          />

          <motion.p
            className="max-w-sm text-sm md:text-lg leading-relaxed mb-8"
            style={{ color: 'rgba(255,255,255,0.55)' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: BASE + 0.5 }}
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            className="flex items-center gap-3 flex-wrap pointer-events-auto"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: BASE + 0.7 }}
          >
            <MagneticButton href="#app" variant="primary">
              {t.hero.cta1}
            </MagneticButton>
            <MagneticButton href="#product" variant="ghost">
              {t.hero.cta2}
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator (bottom-right, out of the way of the copy) */}
      <motion.div
        className="absolute bottom-8 right-6 hidden sm:flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: BASE + 1.2 }}
        style={{ color: 'rgba(255,255,255,0.3)' }}
      >
        <span className="text-xs tracking-widest uppercase">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, rgba(46, 232, 142,0.6), transparent)' }}
        />
      </motion.div>
    </section>
  )
}
