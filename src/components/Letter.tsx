import Image from 'next/image'

import { Reveal } from '@/components/Reveal'
import type { EditionDetails, Person } from '@/data/types'

/** Letter from the conveners, with their portraits. */
export function Letter({ letter, people }: { letter: EditionDetails['letter']; people: Person[] }) {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <Reveal className="lg:col-span-4">
        <div className="flex gap-4 lg:flex-col lg:gap-6">
          {people.map((p) => (
            <figure key={p.name} className="w-1/2 lg:w-full lg:max-w-[16rem]">
              <div className="relative aspect-square overflow-hidden rounded-full ring-4 ring-saffron-400 ring-offset-4 ring-offset-sand-50">
                <Image src={p.image} alt={`Portrait of ${p.name}`} fill sizes="16rem" className="object-cover object-top" />
              </div>
              <figcaption className="mt-4 text-center lg:text-left">
                <p className="font-display text-lg font-bold text-bark-900">{p.name}</p>
                <p className="text-sm text-bark-700">{p.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
      <Reveal delay={120} className="lg:col-span-8">
        <div className="space-y-5 text-lg leading-relaxed text-bark-800">
          {letter.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <div>
            <p className="font-semibold text-bark-900">The Organising Committee remains unchanged from our inaugural year:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6 marker:text-clay-600">
              {letter.committee.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
