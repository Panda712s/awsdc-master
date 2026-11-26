import { PhotoTile } from '@/components/PhotoTile'
import { Reveal } from '@/components/Reveal'
import type { EditionDetails } from '@/data/types'

function Check() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-1 h-5 w-5 shrink-0 text-clay-700" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="8.5" />
      <path d="M6.5 10.4l2.4 2.4 4.6-5" />
    </svg>
  )
}

/** About Pretoria + excursion day highlights. */
export function HostCity({ city }: { city: EditionDetails['hostCity'] }) {
  const [a, b, c] = city.photos
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        <PhotoTile photo={a} aspect="aspect-[4/3] sm:aspect-[3/4]" sizes="(min-width: 640px) 30vw, 90vw" />
        <PhotoTile photo={b} aspect="aspect-[4/3] sm:aspect-[3/4]" sizes="(min-width: 640px) 30vw, 90vw" delay={120} className="sm:mt-8" />
        <PhotoTile photo={c} aspect="aspect-[4/3] sm:aspect-[3/4]" sizes="(min-width: 640px) 30vw, 90vw" delay={240} />
      </div>
      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h3 className="font-display text-2xl font-bold text-bark-900 sm:text-3xl">{city.title}</h3>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-bark-800">
            {city.paragraphs.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-2xl bg-sand-100 p-6 sm:p-8">
            <h3 className="font-display text-2xl font-bold text-bark-900">{city.excursionTitle}</h3>
            <ul className="mt-5 space-y-4">
              {city.excursion.map((e) => (
                <li key={e} className="flex gap-3 text-lg text-bark-800">
                  <Check />
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
