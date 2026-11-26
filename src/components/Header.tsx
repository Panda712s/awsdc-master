'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'

import { Brand } from '@/components/Brand'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import type { NavLink } from '@/data/types'

type HeaderProps = {
  nav: NavLink[]
  /** Primary action on the right (desktop) and at the top of the mobile menu. */
  cta: NavLink
  /** Extra prominent link inside the mobile menu (e.g. the archive). */
  menuExtra?: NavLink
  brandLabel?: string
  brandHref?: string
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  )
}

function useIsActive() {
  const pathname = usePathname()
  return (href: string) => {
    const path = href.split('#')[0] || '/'
    return pathname === path
  }
}

export function Header({ nav, cta, menuExtra, brandLabel, brandHref = '/' }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const isActive = useIsActive()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={clsx('sticky top-0 z-40 border-b bg-sand-50/95 backdrop-blur transition-shadow duration-300 supports-[backdrop-filter]:bg-sand-50/85', scrolled ? 'border-bark-900/15 shadow-md shadow-bark-900/5' : 'border-bark-900/10')}>
      <Container className={clsx('flex items-center justify-between gap-4 transition-[height] duration-300', scrolled ? 'h-14 lg:h-16' : 'h-16 lg:h-20')}>
        <Brand href={brandHref} label={brandLabel} />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={clsx(
                'rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors hover:bg-sand-200/70 hover:text-bark-950',
                isActive(item.href) ? 'bg-sand-200 text-bark-950' : 'text-bark-800',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <Button href={cta.href} className="min-h-11 px-5 py-2 text-[0.95rem]">
              {cta.label}
            </Button>
          </div>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-bark-900 hover:bg-sand-200/70 lg:hidden"
            aria-label="Open menu"
          >
            <MenuIcon open={false} />
          </button>
        </div>
      </Container>

      <Dialog open={open} onClose={setOpen} className="relative z-50 lg:hidden">
        <DialogBackdrop transition className="fixed inset-0 bg-bark-950/50 transition-opacity duration-200 data-closed:opacity-0" />
        <DialogPanel
          transition
          className="fixed inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-sand-50 px-5 pt-3 pb-8 shadow-2xl transition-transform duration-300 ease-out data-closed:translate-x-full"
        >
          <div className="flex h-16 items-center justify-between">
            <span className="font-display text-xl font-bold text-bark-900">Menu</span>
            <button type="button" onClick={() => setOpen(false)} className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-bark-900 hover:bg-sand-200/70" aria-label="Close menu">
              <MenuIcon open />
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-2 flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={clsx('border-b border-bark-900/10 py-4 text-lg font-medium', isActive(item.href) ? 'text-clay-700' : 'text-bark-900')}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-3">
            <Link href={cta.href} onClick={() => setOpen(false)} className="inline-flex min-h-12 items-center justify-center rounded-full bg-clay-700 px-6 py-3 text-base font-semibold text-white hover:bg-clay-800">
              {cta.label}
            </Link>
            {menuExtra ? (
              <Link href={menuExtra.href} onClick={() => setOpen(false)} className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-bark-900 px-6 py-3 text-base font-semibold text-bark-900 hover:bg-bark-900 hover:text-sand-50">
                {menuExtra.label}
              </Link>
            ) : null}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
