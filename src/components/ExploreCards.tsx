import Link from 'next/link'

import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

export type ExploreItem = { title: string; description: string; href: string; status?: string }

/** Grid of large links to the inner pages. */
export function ExploreCards({ items, title, intro }: { items: ExploreItem[]; title: string; intro?: string }) {
  return (
    <section aria-labelledby="explore-title" className="py-16 sm:py-24">
      <Container>
        <SectionHeading id="explore-title" title={title}>
          {intro}
        </SectionHeading>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal as="li" key={item.href} delay={i * 100}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-2xl border border-sand-300 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-bark-900/40 hover:shadow-lg hover:shadow-bark-900/5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7"
              >
                <h3 className="font-display text-2xl font-bold text-bark-900">{item.title}</h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-bark-700">{item.description}</p>
                <p className="mt-6 flex items-center justify-between text-sm font-semibold text-clay-800">
                  <span className="underline-offset-4 group-hover:underline">Open {item.title.toLowerCase()}</span>
                  {item.status ? <span className="rounded-full bg-sand-100 px-3 py-1 text-xs font-semibold text-bark-800">{item.status}</span> : null}
                </p>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
