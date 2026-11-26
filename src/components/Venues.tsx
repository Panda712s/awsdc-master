import { PhotoTile } from '@/components/PhotoTile'
import { Reveal } from '@/components/Reveal'
import type { EditionDetails } from '@/data/types'

export function Venues({ venues }: { venues: EditionDetails['venues'] }) {
  return (
    <div className="space-y-12">
      <div>
        <Reveal>
          <h3 className="font-display text-2xl font-bold text-bark-900">Host institution: {venues.institution}</h3>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {venues.institutionPhotos.map((p, i) => (
            <PhotoTile key={p.alt} photo={p} delay={i * 110} sizes="(min-width: 640px) 30vw, 90vw" />
          ))}
        </div>
      </div>
      <div className="grid gap-10 lg:grid-cols-2">
        {venues.rooms.map((r) => (
          <div key={r.name}>
            <Reveal>
              <h3 className="font-display text-2xl font-bold text-bark-900">{r.name}</h3>
            </Reveal>
            <div className={r.photos.length > 1 ? 'mt-6 grid gap-4 sm:grid-cols-2' : 'mt-6'}>
              {r.photos.map((p, i) => (
                <PhotoTile key={p.alt} photo={p} delay={i * 110} sizes="(min-width: 1024px) 40vw, 90vw" aspect={r.photos.length > 1 ? 'aspect-[4/3]' : 'aspect-[16/10]'} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
