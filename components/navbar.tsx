'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { Bot, LineChart, Cpu, TrendingUp, Menu, X, ChevronDown, Globe } from 'lucide-react'
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
        className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 hover:text-white"
        style={{ color: 'rgba(255,255,255,0.7)' }}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
      >
        <Globe size={14} aria-hidden="true" />
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
            className="absolute right-0 mt-3 py-1.5 min-w-36 rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(10, 10, 12, 0.96)',
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
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
  const [productOpen, setProductOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const productItems = [
    { icon: Bot, ...t.nav.menu.assistant, href: '#product' },
    { icon: LineChart, ...t.nav.menu.stock, href: '#product' },
    { icon: Cpu, ...t.nav.menu.compute, href: '#product' },
    { icon: TrendingUp, ...t.nav.menu.prediction, href: '#product' },
  ]

  const directLinks = [
    { label: t.nav.markets, href: '#markets' },
    { label: t.nav.compute, href: '#product' },
    { label: t.nav.signals, href: '#signals' },
    { label: t.nav.pricing, href: '#pricing' },
  ]

  const openProduct = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setProductOpen(true)
  }
  const closeProduct = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setProductOpen(false), 150)
  }

  const ctaBase = '0 0 24px rgba(46,232,142,0.4)'
  const ctaHover = '0 0 36px rgba(46,232,142,0.65)'

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-full max-w-[1100px]">
        <nav
          className="relative flex items-center h-[52px] px-3 md:px-4 transition-all duration-500"
          style={{
            background: scrolled ? 'rgba(6, 6, 8, 0.94)' : 'rgba(8, 8, 10, 0.82)',
            backdropFilter: 'blur(48px) saturate(200%)',
            WebkitBackdropFilter: 'blur(48px) saturate(200%)',
            border: '1px solid rgba(255,255,255,0.14)',
            borderRadius: '9999px',
            boxShadow: scrolled
              ? '0 4px 40px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)'
              : '0 2px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)',
          }}
          aria-label="Main navigation"
        >
          {/* Logo + BETA */}
          <a href="#" className="flex items-center gap-2 mr-auto md:mr-6 whitespace-nowrap">
            <span
              className="text-white font-extrabold"
              style={{ fontSize: '15px', letterSpacing: '0.14em' }}
            >
              RWA.LAT
            </span>
            <span
              className="font-bold leading-none"
              style={{
                background: 'rgba(46,232,142,0.15)',
                color: '#2EE88E',
                border: '1px solid rgba(46,232,142,0.3)',
                fontSize: '9px',
                padding: '2px 7px',
                borderRadius: '999px',
              }}
            >
              {t.nav.beta}
            </span>
          </a>

          {/* Center nav (md+) */}
          <div className="hidden md:flex items-center gap-1">
            {/* Product with dropdown */}
            <div className="relative" onMouseEnter={openProduct} onMouseLeave={closeProduct}>
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors duration-200"
                style={{
                  fontSize: '13px',
                  fontWeight: 450,
                  color: productOpen ? '#FFFFFF' : 'rgba(255,255,255,0.65)',
                }}
                aria-expanded={productOpen}
                aria-haspopup="true"
              >
                {t.nav.product}
                <ChevronDown
                  size={13}
                  style={{
                    transition: 'transform 200ms',
                    transform: productOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence>
                {productOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className="absolute left-0 top-full pt-3"
                  >
                    <div
                      style={{
                        background: 'rgba(10,10,12,0.96)',
                        backdropFilter: 'blur(40px)',
                        WebkitBackdropFilter: 'blur(40px)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '20px',
                        padding: '12px',
                        minWidth: '260px',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                      }}
                    >
                      {productItems.map((item) => {
                        const Icon = item.icon
                        return (
                          <a
                            key={item.title}
                            href={item.href}
                            onClick={() => setProductOpen(false)}
                            className="flex items-center gap-3 transition-colors duration-150"
                            style={{ padding: '10px 14px', borderRadius: '12px' }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'transparent'
                            }}
                          >
                            <span
                              className="flex items-center justify-center shrink-0"
                              style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '9999px',
                                background: 'rgba(46,232,142,0.12)',
                              }}
                            >
                              <Icon size={16} color="#2EE88E" aria-hidden="true" />
                            </span>
                            <span className="flex flex-col">
                              <span style={{ color: '#FFFFFF', fontSize: '13px', fontWeight: 500 }}>
                                {item.title}
                              </span>
                              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}>
                                {item.desc}
                              </span>
                            </span>
                          </a>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Direct links */}
            {directLinks.map((link, i) => (
              <a
                key={`${link.label}-${i}`}
                href={link.href}
                className="px-3 py-1.5 rounded-full transition-colors duration-200"
                style={{ fontSize: '13px', fontWeight: 450, color: 'rgba(255,255,255,0.65)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFFFFF'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.65)'
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right actions (md+) */}
          <div className="hidden md:flex items-center gap-2 ml-6">
            <LanguageSwitcher />
            <div className="w-px" style={{ height: '16px', background: 'rgba(255,255,255,0.12)' }} />
            <a
              href="#app"
              className="whitespace-nowrap"
              style={{
                background: '#2EE88E',
                color: '#05140C',
                fontWeight: 700,
                fontSize: '12px',
                padding: '8px 18px',
                borderRadius: '9999px',
                boxShadow: ctaBase,
                transition: 'box-shadow 200ms, transform 200ms',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = ctaHover
                e.currentTarget.style.transform = 'scale(1.03)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = ctaBase
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              {t.nav.download}
            </a>
          </div>

          {/* Mobile actions */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#app"
              className="whitespace-nowrap"
              style={{
                background: '#2EE88E',
                color: '#05140C',
                fontWeight: 700,
                fontSize: '12px',
                padding: '8px 16px',
                borderRadius: '9999px',
                boxShadow: ctaBase,
                display: 'inline-block',
              }}
            >
              {t.nav.download}
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="flex items-center justify-center rounded-full"
              style={{ width: '34px', height: '34px', color: '#FFFFFF' }}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="md:hidden mt-2 overflow-hidden"
              style={{
                background: 'rgba(8, 8, 10, 0.94)',
                backdropFilter: 'blur(48px) saturate(200%)',
                WebkitBackdropFilter: 'blur(48px) saturate(200%)',
                border: '1px solid rgba(255,255,255,0.14)',
                borderRadius: '20px',
                padding: '16px',
                boxShadow: '0 12px 40px rgba(0,0,0,0.6)',
              }}
            >
              <div className="flex flex-col">
                {productItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 py-2.5"
                    >
                      <span
                        className="flex items-center justify-center shrink-0"
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '9999px',
                          background: 'rgba(46,232,142,0.12)',
                        }}
                      >
                        <Icon size={16} color="#2EE88E" aria-hidden="true" />
                      </span>
                      <span style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: 500 }}>
                        {item.title}
                      </span>
                    </a>
                  )
                })}

                <div className="my-2 h-px w-full" style={{ background: 'rgba(255,255,255,0.1)' }} />

                {directLinks.map((link, i) => (
                  <a
                    key={`m-${link.label}-${i}`}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-2.5"
                    style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', fontWeight: 450 }}
                  >
                    {link.label}
                  </a>
                ))}

                <div className="my-2 h-px w-full" style={{ background: 'rgba(255,255,255,0.1)' }} />

                <div className="pt-1">
                  <LanguageSwitcher />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
