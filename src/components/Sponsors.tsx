import Image from 'next/image'

import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import type { Partner } from '@/data/types'

export function Sponsors({ partners, title, intro }: { partners: Partner[]; title?: string; intro?: string }) {
  return (
    <section aria-label="Partners" className={title ? 'py-16 sm:py-24' : 'py-14 sm:py-20'}>
      <Container>
        {title ? <SectionHeading className="mb-10" title={title}>{intro}</SectionHeading> : null}

        {partners.length === 0 ? (
          <div className="max-w-2xl rounded-2xl border border-dashed border-bark-900/25 bg-sand-100 p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-bark-900">Partners to be announced</h3>
            <p className="mt-2 text-base leading-relaxed text-bark-700">
              Partners and schools supporting AWSDC 2027 will be listed here once confirmed.
            </p>
          </div>
        ) : (
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {partners.map((p, i) => {
              const logo = (
                <>
                  <span className="relative mx-auto block h-20 w-4/5 sm:h-24">
                    <Image src={p.logo} alt={`${p.name} logo`} fill sizes="(min-width: 768px) 18vw, 36vw" className="object-contain" />
                  </span>
                  <span className="mt-4 block text-center text-sm font-medium text-bark-800">{p.name}</span>
                  {p.role ? <span className="mx-auto mt-2 block w-fit rounded-full bg-saffron-300/60 px-3 py-0.5 text-xs font-semibold text-bark-950">{p.role}</span> : null}
                </>
              )
              const cls = 'block h-full rounded-2xl border border-sand-300 bg-white p-4 transition-shadow hover:shadow-lg hover:shadow-bark-900/5 sm:p-5'
              return (
                <Reveal as="li" key={p.name} delay={i * 90}>
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className={cls + ' transition-colors hover:border-bark-900/40'}>
                      {logo}
                    </a>
                  ) : (
                    <div className={cls}>{logo}</div>
                  )}
                </Reveal>
              )
            })}
          </ul>
        )}
      </Container>
    </section>
  )
}
