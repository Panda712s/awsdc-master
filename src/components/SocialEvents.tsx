import clsx from 'clsx'

import { PhotoTile } from '@/components/PhotoTile'
import { Reveal } from '@/components/Reveal'
import type { SocialEvent } from '@/data/types'

/** Alternating text and photo rows for the social programme. */
export function SocialEvents({ events }: { events: SocialEvent[] }) {
  return (
    <div className="space-y-16 sm:space-y-24">
      {events.map((e, i) => (
        <article key={e.title} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
          <Reveal className={clsx('lg:col-span-5', i % 2 === 1 && 'lg:order-2')}>
            <p className="font-display text-sm font-bold text-clay-700">0{i + 1}</p>
            <h3 className="mt-1 font-display text-3xl font-bold text-balance text-bark-900">{e.title}</h3>
            <p className="mt-4 text-lg leading-relaxed text-bark-800">{e.description}</p>
          </Reveal>
          <div className={clsx('grid gap-3 sm:gap-4 lg:col-span-7', e.photos.length > 2 ? 'grid-cols-2' : 'sm:grid-cols-2')}>
            {e.photos.map((p, j) => (
              <PhotoTile
                key={p.alt}
                photo={p}
                delay={j * 110}
                sizes="(min-width: 1024px) 28vw, 46vw"
                aspect={e.photos.length > 2 && j === 0 ? 'aspect-[16/9] col-span-2' : 'aspect-[4/3]'}
              />
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}
