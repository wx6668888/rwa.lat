'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

function TopIcon() {
  return (
    <div className="flex items-center justify-center w-9 h-6 rounded-md border border-white/15 bg-white/5">
      <span className="flex gap-1">
        <span className="w-1 h-1 rounded-full bg-white" />
        <span className="w-1 h-1 rounded-full bg-white" />
      </span>
    </div>
  )
}

function SocialIcon({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="text-white/60 transition-colors duration-200 hover:text-white"
    >
      {children}
    </a>
  )
}

export default function CTASection() {
  const { t } = useI18n()

  const scrollTop = () => {
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* CTA */}
      <section
        id="pricing"
        className="relative py-28 px-4 overflow-hidden"
        aria-label="Call to action"
      >
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="text-balance font-bold leading-tight mb-6 text-white"
              style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
            >
              {t.cta.heading}
            </h2>

            <p
              className="text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              {t.cta.subtitle}
            </p>

            {/* CTA button */}
            <motion.a
              href="#app"
              className="inline-flex items-center gap-3 px-9 py-4 text-base font-semibold rounded-full"
              style={{ background: '#2EE88E', color: '#05221A' }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.cta.button}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>

            {/* Social proof */}
            <div className="flex items-center justify-center gap-8 mt-12 flex-wrap">
              {[
                { label: t.cta.users, value: '24K+' },
                { label: t.cta.assets, value: '$2.4B+' },
                { label: t.cta.accuracy, value: '91.4%' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t px-6 pt-10 pb-12" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="max-w-6xl mx-auto">
          {/* Brand mark icon */}
          <div className="mb-10">
            <TopIcon />
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 mb-12">
            {/* Terms */}
            <div>
              <div className="text-sm font-medium mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {t.footer.terms}
              </div>
              <ul className="flex flex-col gap-3">
                {[t.footer.termsOfService, t.footer.privacy, t.footer.cookie].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm font-semibold text-white hover:text-[#2EE88E] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <div className="text-sm font-medium mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {t.footer.resources}
              </div>
              <ul className="flex flex-col gap-3">
                {[t.footer.docs, t.footer.blog, t.footer.changelog].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm font-semibold text-white hover:text-[#2EE88E] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect + socials */}
            <div className="col-span-2">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-medium mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    {t.footer.connect}
                  </div>
                  <ul className="flex flex-col gap-3">
                    {[t.footer.feedback, t.footer.discord, t.footer.reddit, t.footer.community].map((link) => (
                      <li key={link}>
                        <a href="#" className="text-sm font-semibold text-white hover:text-[#2EE88E] transition-colors">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social icons */}
                <div className="flex items-center gap-5 pt-8">
                  <SocialIcon label="X">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.9 1.5h3.7l-8 9.2 9.4 12.4h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.8L0 1.5h7.6l5.2 6.9 6.1-6.9Zm-1.3 19.6h2L6.5 3.6H4.4l13.2 17.5Z" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon label="Discord">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.3 4.4A19.8 19.8 0 0 0 15.4 3l-.3.5c1.6.4 2.9 1 4.2 1.8a13.6 13.6 0 0 0-11-.4c-.6.2-1 .4-1.4.4.4-.9 1-1.6 1-1.6l-.3-.4A19.8 19.8 0 0 0 3.7 4.4C.8 8.8 0 13 .4 17.2a20 20 0 0 0 6 3l.8-1.2c-.7-.3-1.3-.6-1.9-1l.5-.3a14.3 14.3 0 0 0 12.3 0l.5.3c-.6.4-1.2.7-1.9 1l.8 1.2a20 20 0 0 0 6-3c.5-4.9-.8-9.1-3.5-12.8ZM8.3 14.7c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm7.4 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z" />
                    </svg>
                  </SocialIcon>
                  <SocialIcon label="Reddit">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 12c0-1.2-1-2.2-2.2-2.2-.6 0-1.1.2-1.5.6a10.8 10.8 0 0 0-5.6-1.8l1-4.4 3.1.7a1.6 1.6 0 1 0 .2-1L13.3 3c-.2 0-.4.1-.4.3l-1.1 4.9a10.8 10.8 0 0 0-5.7 1.8 2.2 2.2 0 1 0-2.4 3.6 4 4 0 0 0 0 .6c0 3.2 3.7 5.7 8.3 5.7s8.3-2.5 8.3-5.7v-.6c.8-.4 1.4-1.2 1.4-2.3Zm-14 1.5a1.6 1.6 0 1 1 3.2 0 1.6 1.6 0 0 1-3.2 0Zm8.9 4.2c-1 1-3 1.1-3.6 1.1-.6 0-2.6 0-3.6-1.1a.4.4 0 0 1 .5-.5c.7.6 2 .8 3.1.8 1 0 2.4-.2 3-.8a.4.4 0 1 1 .6.5Zm-.3-2.6a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2Z" />
                    </svg>
                  </SocialIcon>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="pt-6 flex items-center justify-between gap-4 border-t text-xs"
            style={{ borderColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.35)' }}
          >
            <span>{t.footer.copyright}</span>
            <button
              onClick={scrollTop}
              className="inline-flex items-center gap-2 font-semibold text-white hover:text-[#2EE88E] transition-colors"
            >
              {t.footer.backToTop}
              <span className="flex items-center justify-center w-5 h-5 rounded-full border border-white/25">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M6 9V3M3 6l3-3 3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </footer>
    </>
  )
}
