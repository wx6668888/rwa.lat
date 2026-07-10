'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

const reasons = [
  { icon: '▲', value: '+206%' },
  { icon: '▲', value: '+94%' },
  { icon: '▲', value: '+38%' },
]

export default function AIAnalystSection() {
  const { t } = useI18n()

  const reasonText = [
    'AI infrastructure demand accelerating',
    'Data center revenue growth record',
    'Institutional adoption increasing',
  ]

  const signals = [
    { label: t.analyst.marketTrend, value: t.analyst.valBullish, color: '#34D399' },
    { label: t.analyst.volatility, value: t.analyst.valLow, color: '#5FF3AB' },
    { label: t.analyst.momentum, value: t.analyst.valStrong, color: '#34D399' },
    { label: t.analyst.riskScore, value: '24/100', color: '#34D399' },
  ]

  return (
    <section id="ai" className="relative py-28 px-4 overflow-hidden" aria-label="AI Investment Analyst">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-balance text-3xl md:text-5xl font-bold text-white">
            {t.analyst.heading}
          </h2>
        </motion.div>

        {/* Main report card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left: AI Report */}
          <motion.div
            className="glass-card p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Top glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-0.5"
              style={{ background: 'linear-gradient(90deg, transparent, #2EE88E, transparent)' }}
            />

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-sm font-bold"
                  style={{ background: 'rgba(46, 232, 142,0.2)', border: '1px solid rgba(46, 232, 142,0.4)', color: '#5FF3AB' }}
                >
                  N
                </div>
                <div>
                  <div className="text-white font-bold text-lg">NVIDIA</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>NVDA · NASDAQ</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{t.analyst.report}</div>
                <div
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(52,211,153,0.12)', color: '#34D399', border: '1px solid rgba(52,211,153,0.25)' }}
                >
                  {t.analyst.live}
                </div>
              </div>
            </div>

            {/* Confidence */}
            <div className="flex items-center gap-4 mb-6 p-4 rounded-2xl" style={{ background: 'rgba(46, 232, 142,0.06)', border: '1px solid rgba(46, 232, 142,0.15)' }}>
              <div>
                <div className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{t.analyst.confidence}</div>
                <div className="flex items-baseline gap-1">
                  <motion.span
                    className="text-4xl font-bold"
                    style={{ color: '#2EE88E' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    86
                  </motion.span>
                  <span className="text-lg" style={{ color: 'rgba(255,255,255,0.4)' }}>/100</span>
                </div>
              </div>
              <div className="flex-1">
                <div
                  className="h-2 rounded-full overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #2EE88E, #5FF3AB)' }}
                    initial={{ width: 0 }}
                    whileInView={{ width: '86%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.4 }}
                  />
                </div>
                <div className="text-xs mt-1.5 font-semibold" style={{ color: '#34D399' }}>
                  {t.analyst.bullish}
                </div>
              </div>
            </div>

            {/* Reasons */}
            <div className="mb-6">
              <div className="text-xs font-semibold mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {t.analyst.keyDrivers}
              </div>
              <div className="flex flex-col gap-2.5">
                {reasons.map((r, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center justify-between p-2.5 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs" style={{ color: '#34D399' }}>{r.icon}</span>
                      <span className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>{reasonText[i]}</span>
                    </div>
                    <span className="text-xs font-bold" style={{ color: '#34D399' }}>{r.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Signals grid */}
            <div className="grid grid-cols-2 gap-2">
              {signals.map((s, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="text-xs mb-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.label}</div>
                  <div className="text-sm font-semibold" style={{ color: s.color }}>{s.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Feature list */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            {[
              (
                <svg key="0" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="7" stroke="#2EE88E" strokeWidth="1.5" />
                  <path d="M10 6v4l3 3" stroke="#2EE88E" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ),
              (
                <svg key="1" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <polyline points="2,14 6,9 9,11 13,5 18,8" stroke="#2EE88E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
              (
                <svg key="2" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="3" width="14" height="14" rx="3" stroke="#2EE88E" strokeWidth="1.5" />
                  <path d="M7 10h6M7 7h4M7 13h3" stroke="#2EE88E" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ),
            ].map((icon, i) => (
              <motion.div
                key={i}
                className="flex gap-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.12 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex-none flex items-center justify-center"
                  style={{ background: 'rgba(46, 232, 142,0.1)', border: '1px solid rgba(46, 232, 142,0.2)' }}
                >
                  {icon}
                </div>
                <div>
                  <div className="text-base font-semibold text-white mb-1.5">{t.analyst.features[i].title}</div>
                  <div className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {t.analyst.features[i].desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
