import clsx from 'clsx'

// Mudcloth-style zigzags and dashes taken from the pattern on the AWSDC map logo.
const tile = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="24"><rect width="48" height="24" fill="#382818"/><line x1="0" y1="4" x2="48" y2="4" stroke="#e8b848" stroke-width="2.5" stroke-dasharray="9 5" stroke-linecap="round"/><polyline points="0,18 6,9 12,18 18,9 24,18 30,9 36,18 42,9 48,18" fill="none" stroke="#c86838" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><line x1="0" y1="22" x2="48" y2="22" stroke="#b84838" stroke-width="2" stroke-dasharray="14 6" stroke-linecap="round"/></svg>`

/** Decorative strip of pattern that drifts slowly (static for reduced motion). */
export function PatternBand({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={clsx('h-6 w-full animate-band motion-reduce:animate-none', className)}
      style={{ backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(tile)}")`, backgroundSize: '48px 24px', backgroundRepeat: 'repeat-x' }}
    />
  )
}
