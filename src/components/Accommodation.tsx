import clsx from 'clsx'

import { PhotoTile } from '@/components/PhotoTile'
import { Reveal } from '@/components/Reveal'
import type { EditionDetails } from '@/data/types'

const BREAKFAST: Record<string, { label: string; cls: string }> = {
  provided: { label: 'Breakfast provided', cls: 'bg-saffron-300/60 text-bark-950' },
  'not provided': { label: 'No breakfast', cls: 'bg-sand-100 text-bark-700' },
  varies: { label: 'Breakfast varies', cls: 'bg-sand-100 text-bark-700' },
  'not stated': { label: 'Breakfast not stated', cls: 'bg-sand-100 text-bark-700' },
}

/** Official hotel gallery + independent accommodation options. */
export function Accommodation({ hotel, options, disclaimer }: { hotel: EditionDetails['hotel']; options: EditionDetails['stayOptions']; disclaimer: string }) {
  const [lobby, corridor, kitchen, room, pool] = hotel.photos
  return (
    <div className="space-y-16">
      <div>
        <Reveal>
          <p className="inline-flex rounded-full bg-saffron-400 px-3.5 py-1 text-sm font-semibold text-bark-950">Official accommodation</p>
          <h3 className="mt-4 font-display text-3xl font-bold text-bark-900">{hotel.name}</h3>
          <p className="mt-3 max-w-2xl text-lg text-bark-800">{hotel.text}</p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-6">
          <PhotoTile photo={lobby} aspect="aspect-square lg:aspect-[4/3]" className="lg:col-span-2" sizes="(min-width: 1024px) 30vw, 46vw" />
          <PhotoTile photo={kitchen} aspect="aspect-square lg:aspect-[4/3]" className="lg:col-span-2" sizes="(min-width: 1024px) 30vw, 46vw" delay={100} />
          <PhotoTile photo={corridor} aspect="aspect-square lg:aspect-[4/3]" className="col-span-2 lg:col-span-2" sizes="(min-width: 1024px) 30vw, 90vw" delay={200} />
          <PhotoTile photo={room} aspect="aspect-[4/3]" className="lg:col-span-3" sizes="(min-width: 1024px) 45vw, 46vw" delay={100} />
          <PhotoTile photo={pool} aspect="aspect-[4/3]" className="lg:col-span-3" sizes="(min-width: 1024px) 45vw, 46vw" delay={200} />
        </div>
      </div>

      <div>
        <Reveal>
          <h3 className="font-display text-2xl font-bold text-bark-900 sm:text-3xl">Other accommodation near campus</h3>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-bark-700">
            For schools or families wishing to arrange independent accommodation nearby, these options may be used. {disclaimer} Prices are in rand.
          </p>
        </Reveal>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {options.map((o, i) => {
            const b = BREAKFAST[o.breakfast]
            return (
              <Reveal as="li" key={o.name} delay={(i % 3) * 80} className="flex flex-col rounded-2xl border border-sand-300 bg-white p-5">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-display text-lg leading-snug font-bold text-bark-900">{o.name}</h4>
                  <p className="shrink-0 rounded-full bg-bark-900 px-3 py-1 text-sm font-semibold text-sand-50">{o.distanceKm} km</p>
                </div>
                <p className="mt-1 text-sm text-bark-700">{o.address}</p>
                <div className="mt-4 flex flex-1 items-end justify-between gap-3">
                  <p className="font-display text-xl font-bold text-clay-700">
                    R{o.priceZar}
                  </p>
                  <p className={clsx('rounded-full px-3 py-1 text-xs font-semibold', b.cls)}>{b.label}</p>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
