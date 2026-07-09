'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { useI18n, LANG_LABELS, LANG_SHORT, type Lang } from '@/lib/i18n'

const LANGS: Lang[] = ['en', 'zh', 'ja', 'ko']

function LanguageSwitcher() {
  const { lang, setLang } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-200"
        style={{ color: 'rgba(255,255,255,0.75)' }}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.2" />
          <path d="M1.75 8h12.5M8 1.75c1.6 1.7 2.5 3.9 2.5 6.25S9.6 12.55 8 14.25M8 1.75C6.4 3.45 5.5 5.65 5.5 8s.9 4.55 2.5 6.25" stroke="currentColor" strokeWidth="1.2" />
        </svg>
        <span>{LANG_SHORT[lang]}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.16 }}
            className="absolute right-0 mt-2 py-1.5 min-w-36 rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(15, 15, 17, 0.96)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
            }}
          >
            {LANGS.map((l) => (
              <li key={l}>
                <button
                  type="button"
                  role="option"
                  aria-selected={lang === l}
                  onClick={() => {
                    setLang(l)
                    setOpen(false)
                  }}
                  className="w-full text-left px-4 py-2 text-xs font-medium transition-colors duration-150"
                  style={{
                    color: lang === l ? '#2EE88E' : 'rgba(255,255,255,0.7)',
                    background: lang === l ? 'rgba(46,232,142,0.08)' : 'transparent',
                  }}
                >
                  {LANG_LABELS[l]}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Navbar() {
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: t.nav.product, href: '#product' },
    { label: t.nav.ai, href: '#ai' },
    { label: t.nav.markets, href: '#markets' },
    { label: t.nav.compute, href: '#product' },
    { label: t.nav.signals, href: '#signals' },
    { label: t.nav.pricing, href: '#pricing' },
  ]

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-3"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav
        className="flex items-center gap-1 px-2.5 py-2 transition-all duration-500 max-w-[calc(100vw-24px)]"
        style={{
          background: scrolled ? 'rgba(10, 10, 11, 0.85)' : 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '9999px',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.5)' : '0 4px 24px rgba(0,0,0,0.3)',
        }}
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          className="mr-2 px-2.5 py-1.5 text-sm font-bold tracking-widest text-white uppercase whitespace-nowrap"
          style={{ letterSpacing: '0.12em' }}
        >
          RWA.LAT
        </a>

        {/* Divider */}
        <div className="hidden md:block w-px h-4 mx-1" style={{ background: 'rgba(255,255,255,0.15)' }} />

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link, i) => (
            <a
              key={`${link.label}-${i}`}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium transition-all duration-200 rounded-full whitespace-nowrap"
              style={{ color: 'rgba(255,255,255,0.65)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fff'
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.65)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-px h-4 mx-1" style={{ background: 'rgba(255,255,255,0.15)' }} />

        {/* Right actions */}
        <div className="flex items-center gap-0.5">
          <LanguageSwitcher />
          <a
            href="#app"
            className="px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 whitespace-nowrap"
            style={{
              background: '#2EE88E',
              color: '#05140C',
              boxShadow: '0 0 20px rgba(46, 232, 142,0.35)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 30px rgba(46, 232, 142,0.6)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 20px rgba(46, 232, 142,0.35)'
            }}
          >
            {t.nav.download}
          </a>
        </div>
      </nav>
    </motion.header>
  )
}
