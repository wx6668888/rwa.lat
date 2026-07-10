'use client'

// Giant fixed wordmark pinned to the bottom of the page.
// The main content scrolls over it and reveals it near the end of the page.
export default function BrandMark() {
  return (
    <div
      aria-hidden="true"
      className="fixed bottom-0 left-0 right-0 z-0 flex items-end justify-center overflow-hidden select-none pointer-events-none"
      style={{ height: 'var(--brand-reveal)' }}
    >
      <div className="flex items-end justify-center w-full px-4">
        <span
          className="font-bold leading-[0.8] tracking-tighter whitespace-nowrap"
          style={{
            fontSize: 'clamp(3rem, 26vw, 18rem)',
            color: '#2EE88E',
            letterSpacing: '-0.05em',
          }}
        >
          RWA.LAT
        </span>
      </div>
    </div>
  )
}
