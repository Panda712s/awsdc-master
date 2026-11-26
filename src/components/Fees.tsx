import { Reveal } from '@/components/Reveal'
import type { EditionDetails } from '@/data/types'

/** Fee tiers and payment deadlines. */
export function Fees({ details }: { details: EditionDetails }) {
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-7">
        <div className="grid gap-4 sm:grid-cols-2">
          <Reveal className="sm:col-span-2">
            <div className="rounded-2xl border border-sand-300 bg-white p-6 sm:p-7">
              <p className="text-sm font-semibold text-clay-800">Commitment fee</p>
              <p className="mt-2 font-display text-5xl font-bold text-bark-900">{details.commitmentFee.amount}</p>
              <p className="mt-2 text-base text-bark-700">{details.commitmentFee.description}</p>
            </div>
          </Reveal>
          {details.fees.map((f, i) => (
            <Reveal key={f.name} delay={(i + 1) * 100}>
              <div className={i === 1 ? 'h-full rounded-2xl bg-bark-900 p-6 text-sand-50 sm:p-7' : 'h-full rounded-2xl border border-sand-300 bg-white p-6 sm:p-7'}>
                <p className={i === 1 ? 'text-sm font-semibold text-saffron-300' : 'text-sm font-semibold text-clay-800'}>{f.name}</p>
                <p className="mt-2 font-display text-5xl font-bold">{f.amount}</p>
                <p className={i === 1 ? 'mt-2 text-base text-sand-200' : 'mt-2 text-base text-bark-700'}>{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="lg:col-span-5">
        <Reveal>
          <h3 className="font-display text-2xl font-bold text-bark-900">Key deadlines</h3>
          <ol className="relative mt-6 space-y-6 border-l-2 border-clay-600/40 pl-6">
            {details.deadlines.map((d) => (
              <li key={d.label} className="relative">
                <span aria-hidden="true" className="absolute top-1.5 -left-[1.95rem] h-3.5 w-3.5 rounded-full border-2 border-clay-700 bg-sand-50" />
                <p className="font-display text-xl font-bold text-bark-900">{d.date}</p>
                <p className="text-base text-bark-700">{d.label}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </div>
  )
}
