import Image from 'next/image'
import Link from 'next/link'

import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import type { SocialEvent } from '@/data/types'

/** Photo cards for the social programme, linking to the About page. */
export function Highlights({ events }: { events: SocialEvent[] }) {
  return (
    <Section tone="sand" title="More than debating" intro="A cultural night, a braai, an excursion around Pretoria and a black-tie finale.">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {events.map((e, i) => (
          <Reveal as="li" key={e.title} delay={i * 100}>
            <Link href="/about#social" className="group flex h-full flex-col overflow-hidden rounded-2xl border border-sand-300 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-bark-900/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
              <div className="relative aspect-[4/3] overflow-hidden bg-sand-200">
                <Image src={e.photos[0].src} alt={e.photos[0].alt} fill sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw" className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl leading-snug font-bold text-balance text-bark-900">{e.title}</h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-bark-700">{e.description}</p>
                <p className="mt-4 text-sm font-semibold text-clay-800 underline-offset-4 group-hover:underline">Read more</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
