import Link from 'next/link'

import { Container } from '@/components/Container'
import { PatternBand } from '@/components/PatternBand'

export type Crumb = { label: string; href?: string }

/** Title block at the top of every inner page. */
export function PageHeader({ title, intro, crumbs, badge }: { title: string; intro?: string; crumbs: Crumb[]; badge?: string }) {
  return (
    <div>
      <div className="bg-sand-100">
        <Container className="py-10 sm:py-14 lg:py-16">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-bark-700">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-2">
                  {i > 0 ? <span aria-hidden="true" className="text-bark-600/60">/</span> : null}
                  {c.href ? (
                    <Link href={c.href} className="underline-offset-4 hover:text-bark-950 hover:underline">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="font-semibold text-bark-900">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <h1 className="motion-safe:animate-rise mt-5 max-w-3xl font-display text-4xl leading-tight font-bold tracking-tight text-balance text-bark-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {badge ? (
            <p className="mt-4 inline-flex rounded-full bg-saffron-400 px-3.5 py-1 text-sm font-semibold text-bark-950">{badge}</p>
          ) : null}
          {intro ? <p className="motion-safe:animate-rise mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-bark-700 [animation-delay:100ms] sm:text-xl">{intro}</p> : null}
        </Container>
      </div>
      <PatternBand />
    </div>
  )
}
