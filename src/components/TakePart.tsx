import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import type { Edition } from '@/data/types'

export function TakePart({ edition, title, tone = 'plain' }: { edition: Edition; title?: string; tone?: 'plain' | 'sand' }) {
  if (edition.opportunities.length === 0) return null
  const anyOpen = edition.opportunities.some((o) => o.href)
  const status = anyOpen
    ? 'Registration and applications that are open are linked below.'
    : `Registration and applications for ${edition.year} have not opened yet. Links will appear here as soon as they are confirmed.`

  return (
    <section aria-label="Ways to take part" className={tone === 'sand' ? 'bg-sand-100 py-16 sm:py-24' : 'py-14 sm:py-20'}>
      <Container>
        {title ? (
          <SectionHeading title={title}>{status}</SectionHeading>
        ) : (
          <p className="max-w-2xl text-lg leading-relaxed text-bark-700">{status}</p>
        )}

        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {edition.opportunities.map((o, i) => (
            <Reveal as="li" key={o.id} delay={i * 100} className="flex flex-col rounded-2xl border border-sand-300 bg-white p-6 sm:p-7">
              <h3 className="font-display text-xl font-bold text-balance text-bark-900">{o.title}</h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-bark-700">{o.description}</p>
              <div className="mt-6">
                {o.href ? (
                  <Button href={o.href} className="w-full sm:w-auto">
                    {o.actionLabel ?? (o.title.startsWith('Apply') ? 'Apply now' : 'Register now')}
                  </Button>
                ) : (
                  <p className="inline-flex items-center gap-2 rounded-full bg-sand-100 px-4 py-2 text-sm font-semibold text-bark-800">
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-saffron-500" />
                    {o.pendingLabel ?? 'Opens soon'}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
