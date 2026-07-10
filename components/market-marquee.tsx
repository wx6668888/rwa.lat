'use client'

const marketItems = [
  { symbol: 'NVDA', name: 'NVIDIA', score: 92, trend: '+4.2%', positive: true },
  { symbol: 'AAPL', name: 'Apple', score: 84, trend: '+1.8%', positive: true },
  { symbol: 'MSFT', name: 'Microsoft', score: 88, trend: '+2.3%', positive: true },
  { symbol: 'NASDAQ', name: 'NASDAQ', score: null, trend: 'Bullish', positive: true },
  { symbol: 'POLY', name: 'Polymarket', score: null, trend: 'Fed Cut 68%', positive: true },
  { symbol: 'TSLA', name: 'Tesla', score: 71, trend: '-1.2%', positive: false },
  { symbol: 'GOOGL', name: 'Alphabet', score: 86, trend: '+3.1%', positive: true },
  { symbol: 'META', name: 'Meta', score: 83, trend: '+2.7%', positive: true },
  { symbol: 'AMZN', name: 'Amazon', score: 80, trend: '+1.5%', positive: true },
  { symbol: 'BTC', name: 'Bitcoin', score: null, trend: '+5.4%', positive: true },
]

function MarketCard({ item }: { item: typeof marketItems[0] }) {
  return (
    <div
      className="flex-none flex items-center gap-3 px-3.5 py-2 mx-1.5"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '10px',
        minWidth: '138px',
      }}
    >
      {/* Symbol */}
      <div>
        <div className="text-xs font-bold text-white tracking-wide">{item.symbol}</div>
        <div className="text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>
          {item.name}
        </div>
      </div>

      <div className="flex-1" />

      {/* Score or label */}
      <div className="text-right">
        {item.score !== null ? (
          <>
            <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
              AI Score
            </div>
            <div
              className="text-xs font-bold"
              style={{ color: item.score >= 85 ? '#2EE88E' : item.score >= 75 ? '#5FF3AB' : 'rgba(255,255,255,0.7)' }}
            >
              {item.score}
            </div>
          </>
        ) : (
          <div
            className="text-[11px] font-semibold"
            style={{ color: item.positive ? '#34D399' : '#F87171' }}
          >
            {item.trend}
          </div>
        )}
        {item.score !== null && (
          <div
            className="text-[10px] font-medium"
            style={{ color: item.positive ? '#34D399' : '#F87171' }}
          >
            {item.trend}
          </div>
        )}
      </div>
    </div>
  )
}

export default function MarketMarquee() {
  const doubled = [...marketItems, ...marketItems]

  return (
    <section id="markets" className="relative pt-4 pb-10 overflow-hidden" aria-label="Market intelligence ticker">
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, #0A0A0B, transparent)',
        }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, #0A0A0B, transparent)',
        }}
      />

      {/* Marquee */}
      <div className="flex overflow-hidden">
        <div className="flex animate-marquee">
          {doubled.map((item, i) => (
            <MarketCard key={`${item.symbol}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
