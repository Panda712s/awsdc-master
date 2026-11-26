'use client'

import { useEffect, useState } from 'react'

const pad = (n: number) => String(n).padStart(2, '0')

function remaining(startDate: string, endDate: string | null) {
  // Event dates are South African (SAST, UTC+2).
  const start = new Date(`${startDate}T00:00:00+02:00`).getTime()
  const end = new Date(`${endDate ?? startDate}T23:59:59+02:00`).getTime()
  const now = Date.now()
  if (now > end) return { phase: 'over' as const }
  if (now >= start) return { phase: 'live' as const }
  const s = Math.floor((start - now) / 1000)
  return { phase: 'before' as const, d: Math.floor(s / 86400), h: Math.floor((s % 86400) / 3600), m: Math.floor((s % 3600) / 60), s: s % 60 }
}

/** Live countdown tiles for the hero. */
export function Countdown({ startDate, endDate }: { startDate: string; endDate: string | null }) {
  const [r, setR] = useState<ReturnType<typeof remaining> | null>(null)

  useEffect(() => {
    const update = () => setR(remaining(startDate, endDate))
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [startDate, endDate])

  if (r && r.phase !== 'before') {
    return <p className="font-display text-2xl font-bold text-saffron-300">{r.phase === 'live' ? 'Happening now' : 'Concluded'}</p>
  }

  const tiles = [
    { label: 'Days', v: r && r.phase === 'before' ? String(r.d) : '--' },
    { label: 'Hours', v: r && r.phase === 'before' ? pad(r.h) : '--' },
    { label: 'Minutes', v: r && r.phase === 'before' ? pad(r.m) : '--' },
    { label: 'Seconds', v: r && r.phase === 'before' ? pad(r.s) : '--' },
  ]

  return (
    <div role="timer" aria-label="Time until AWSDC 2027 begins" className="grid grid-cols-4 gap-2 sm:gap-3">
      {tiles.map((t) => (
        <div key={t.label} className="rounded-xl bg-sand-50/10 px-2 py-3 text-center ring-1 ring-sand-50/15 sm:px-4">
          <div className="font-display text-3xl leading-none font-bold text-sand-50 tabular-nums sm:text-4xl">{t.v}</div>
          <div className="mt-1.5 text-xs font-medium text-sand-300">{t.label}</div>
        </div>
      ))}
    </div>
  )
}
