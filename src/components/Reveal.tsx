'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

/**
 * Fades and lifts content in as it scrolls into view.
 * Content is fully visible without JavaScript and for reduced-motion users.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: React.ElementType
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [state, setState] = useState<'idle' | 'hidden' | 'shown'>('idle')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.92) return // already on screen: leave as is
    setState('hidden')
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('shown')
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={state === 'idle' ? undefined : { transitionDelay: `${delay}ms` }}
      className={clsx(
        state !== 'idle' && 'transition-[opacity,transform] duration-700 ease-out',
        state === 'hidden' && 'translate-y-6 opacity-0',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
