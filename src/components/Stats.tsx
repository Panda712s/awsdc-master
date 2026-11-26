import { Container } from '@/components/Container'
import { CountUp } from '@/components/CountUp'
import { Reveal } from '@/components/Reveal'
import type { Stat } from '@/data/types'

/** Animated key numbers. */
export function Stats({ stats }: { stats: Stat[] }) {
  return (
    <section aria-label="AWSDC 2027 in numbers" className="border-b border-sand-300 bg-sand-100">
      <Container>
        <dl className="grid grid-cols-2 divide-x divide-y divide-sand-300 lg:grid-cols-4 lg:divide-y-0">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="flex flex-col px-4 py-8 text-center sm:px-6 sm:py-10">
              <dt className="order-2 mt-2 text-sm font-medium text-bark-700 sm:text-base">{s.label}</dt>
              <dd className="font-display text-5xl font-bold text-clay-700 sm:text-6xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  )
}
