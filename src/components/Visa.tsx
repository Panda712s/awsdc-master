import { Reveal } from '@/components/Reveal'
import type { VisaInfo } from '@/data/types'

export function Visa({ visa }: { visa: VisaInfo }) {
  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
      <div>
        <Reveal>
          <h3 className="font-display text-2xl font-bold text-bark-900">Visa-free countries</h3>
        </Reveal>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {visa.visaFree.map((c, i) => (
            <Reveal as="li" key={c} delay={i * 45} className="rounded-full border border-bark-900/15 bg-white px-4 py-2 text-base font-medium text-bark-900">
              {c}
            </Reveal>
          ))}
        </ul>
        <Reveal delay={200}>
          <p className="mt-6 rounded-xl bg-sand-100 p-5 text-base leading-relaxed text-bark-800">{visa.note}</p>
        </Reveal>
      </div>
      <div>
        <Reveal>
          <h3 className="font-display text-2xl font-bold text-bark-900">e-Visa processing</h3>
          <p className="mt-3 text-base leading-relaxed text-bark-700">{visa.evisaIntro}</p>
        </Reveal>
        <ul className="mt-5 space-y-3">
          {visa.evisaOptions.map((o, i) => (
            <Reveal as="li" key={o.label} delay={i * 110} className="flex items-center justify-between gap-4 rounded-2xl border border-sand-300 bg-white p-5">
              <div>
                <p className="font-display text-lg font-bold text-bark-900">{o.label}</p>
                <p className="text-sm text-bark-700">{o.processing}</p>
              </div>
              <p className="font-display text-3xl font-bold text-clay-700">{o.price}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  )
}
