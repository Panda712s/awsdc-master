import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import type { Edition } from '@/data/types'

export const pillars = [
  { title: 'Competition', text: 'High quality debating rounds between school teams.' },
  { title: 'Skills workshops', text: 'Learning that runs alongside the competition.' },
  { title: 'Cultural exchange', text: 'Meeting debaters and coaches from across Africa.' },
  { title: 'Socials', text: 'Memorable evenings that turn rivals into friends.' },
]

/** Intro copy plus the four things the championship is about. */
export function About({ edition, heading }: { edition: Edition; heading?: boolean }) {
  return (
    <section aria-label="About the championship" className="py-14 sm:py-20">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          {heading ? (
            <SectionHeading title="A week of debating, learning and community">{edition.intro[1]}</SectionHeading>
          ) : (
            <div className="max-w-xl space-y-5 text-lg leading-relaxed text-pretty text-bark-700">
              {edition.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          )}
        </div>
        <ul className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:col-span-7">
          {pillars.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 100} className="border-t-2 border-bark-900 pt-4">
              <h3 className="font-display text-xl font-bold text-bark-900">{p.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-bark-700">{p.text}</p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}
