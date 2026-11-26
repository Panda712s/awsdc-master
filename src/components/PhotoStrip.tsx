import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import type { Person } from '@/data/types'

/** A row of portraits with a link to the full team page. */
export function PhotoStrip({
  people,
  title,
  intro,
  href,
  cta,
  badge,
}: {
  people: Person[]
  title: string
  intro: string
  href: string
  cta: string
  badge?: string
}) {
  return (
    <section aria-labelledby="strip-title" className="bg-bark-900 py-16 text-sand-50 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            {badge ? <p className="mb-4 inline-flex rounded-full bg-saffron-400 px-3.5 py-1 text-sm font-semibold text-bark-950">{badge}</p> : null}
            <SectionHeading id="strip-title" title={title} onDark>
              {intro}
            </SectionHeading>
          </div>
          <Button href={href} variant="light" className="shrink-0 self-start sm:self-auto">
            {cta}
          </Button>
        </div>
        <ul className={`mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 ${people.length === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-6'}`}>
          {people.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 80}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-bark-800">
                <Image src={p.image} alt={`Portrait of ${p.name}`} fill sizes="(min-width: 1024px) 15vw, (min-width: 640px) 30vw, 46vw" className="object-cover transition-transform duration-700 hover:scale-105 motion-reduce:transition-none" />
              </div>
              <p className="mt-3 font-display text-base leading-snug font-bold">{p.name}</p>
              <p className="text-sm leading-snug text-sand-200">{p.role}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
