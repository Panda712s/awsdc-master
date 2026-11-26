import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { PatternBand } from '@/components/PatternBand'
import type { Edition } from '@/data/types'
import { ARCHIVE_2026_LABEL, ARCHIVE_2026_PATH, ARCHIVE_INDEX_PATH, archive2026Nav, currentNav } from '@/lib/site'

import logo from '@/images/logos/awsdc-logo.png'

const linkClass = 'inline-block py-1.5 text-base text-sand-100 underline-offset-4 hover:text-white hover:underline'

export function Footer({ edition }: { edition: Edition }) {
  const archived = edition.status === 'archived'

  return (
    <footer className="mt-auto">
      <PatternBand />
      <div className="bg-bark-950 text-sand-100">
        <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="inline-block rounded-2xl bg-sand-50 p-3">
              <Image src={logo} alt="AWSDC – Africa World Schools Debate Championships" className="h-28 w-auto" sizes="120px" />
            </div>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-sand-200">
              {archived
                ? `You are viewing the archived ${edition.year} edition of the championship.`
                : 'A continental stage where high school debaters come together for a week of competition, learning and community.'}
            </p>
          </div>

          <nav aria-label="Explore" className="lg:col-span-3">
            <h2 className="font-display text-lg font-bold text-white">Explore</h2>
            <ul className="mt-3">
              {(archived ? [{ label: 'AWSDC 2027 home', href: '/' }, ...archive2026Nav] : [{ label: 'Home', href: '/' }, ...currentNav]).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Editions" className="lg:col-span-4">
            <h2 className="font-display text-lg font-bold text-white">Editions</h2>
            <ul className="mt-3">
              <li>
                <Link href="/" className={linkClass}>
                  AWSDC 2027 (current)
                </Link>
              </li>
              <li>
                <Link href={ARCHIVE_2026_PATH} className={linkClass}>
                  {ARCHIVE_2026_LABEL}
                </Link>
              </li>
              <li>
                <Link href={ARCHIVE_INDEX_PATH} className={linkClass}>
                  All previous editions
                </Link>
              </li>
            </ul>
            {edition.contact ? (
              <div className="mt-5 space-y-1 text-base">
                <p>
                  <a href={`mailto:${edition.contact.email}`} className="font-semibold text-white underline underline-offset-4">
                    {edition.contact.email}
                  </a>
                </p>
                {edition.contact.whatsapp.map((w) => (
                  <p key={w.number} className="text-sand-200">
                    WhatsApp {w.name}: {w.number}
                  </p>
                ))}
              </div>
            ) : null}
          </nav>
        </Container>

        <div className="border-t border-sand-50/10">
          <Container className="py-6 text-sm text-sand-300">
            <p>&copy; {edition.year} AWSDC – Africa World Schools Debating Championships. All rights reserved.</p>
          </Container>
        </div>
      </div>
    </footer>
  )
}
