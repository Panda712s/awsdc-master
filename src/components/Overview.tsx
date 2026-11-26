import { Reveal } from '@/components/Reveal'
import type { Fact } from '@/data/types'

/** Tournament overview as a clean definition list. */
export function Overview({ facts }: { facts: Fact[] }) {
  return (
    <Reveal>
      <dl className="overflow-hidden rounded-2xl border border-sand-300 bg-white">
        {facts.map((f) => (
          <div key={f.label} className="grid gap-1 border-b border-sand-200 px-5 py-4 last:border-b-0 sm:grid-cols-[14rem_1fr] sm:gap-6 sm:px-7 sm:py-5">
            <dt className="text-sm font-semibold text-clay-800 sm:text-base">{f.label}</dt>
            <dd className="text-base text-bark-900">
              {Array.isArray(f.value) ? (
                <ul className="space-y-0.5">
                  {f.value.map((v) => (
                    <li key={v}>{v}</li>
                  ))}
                </ul>
              ) : (
                f.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </Reveal>
  )
}
