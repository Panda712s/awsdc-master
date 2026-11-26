import Image from 'next/image'

import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import type { Person, TeamGroup } from '@/data/types'

import mark from '@/images/logos/awsdc-mark.png'

function PersonCard({ person, index }: { person: Person; index: number }) {
  return (
    <Reveal as="li" delay={(index % 4) * 90} className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand-200">
        <Image
          src={person.image}
          alt={`Portrait of ${person.name}`}
          fill
          sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 24vw, (min-width: 640px) 30vw, 46vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      </div>
      <h3 className="mt-3 font-display text-lg leading-snug font-bold text-bark-900">{person.name}</h3>
      <p className="text-sm leading-snug text-bark-700">{person.role}</p>
      {person.country ? <p className="mt-1 inline-block rounded-full bg-sand-100 px-2.5 py-0.5 text-xs font-semibold text-bark-800">{person.country}</p> : null}
    </Reveal>
  )
}

function PendingCard({ group }: { group: TeamGroup }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-dashed border-bark-900/25 bg-white p-6">
      <Image src={mark} alt="" className="mb-4 h-10 w-auto self-start object-contain opacity-40" sizes="48px" />
      <h3 className="font-display text-lg font-bold text-bark-900">{group.name}</h3>
      <p className="mt-1 text-sm leading-relaxed text-bark-700">{group.description}</p>
      <p className="mt-3 text-sm font-semibold text-bark-800">To be announced</p>
    </div>
  )
}

/**
 * Team listing. Every member's photo is shown, grouped by role.
 * Groups without members show a "to be announced" card instead.
 * `idPrefix` keeps anchors unique when two teams share a page.
 */
export function Team({ groups, idPrefix = '' }: { groups: TeamGroup[]; idPrefix?: string }) {
  const filled = groups.filter((g) => g.members.length > 0)

  // Nothing confirmed yet: one compact grid of placeholders.
  if (filled.length === 0) {
    return (
      <Container>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <li key={g.id}>
              <PendingCard group={g} />
            </li>
          ))}
        </ul>
      </Container>
    )
  }

  const pending = groups.filter((g) => g.members.length === 0)

  return (
    <Container>
      <nav aria-label="Team groups" className="flex flex-wrap gap-2">
        {filled.map((g) => (
          <a
            key={g.id}
            href={`#${idPrefix}${g.id}`}
            className="inline-flex min-h-11 items-center rounded-full border border-bark-900/20 px-4 py-2 text-sm font-semibold text-bark-800 transition-colors hover:border-bark-900 hover:bg-bark-900 hover:text-sand-50"
          >
            {g.shortName}
            <span className="ml-2 text-xs font-medium opacity-70">{g.members.length}</span>
          </a>
        ))}
      </nav>

      <div className="mt-12 space-y-16">
        {filled.map((g) => (
          <section key={g.id} id={`${idPrefix}${g.id}`} aria-labelledby={`${idPrefix}${g.id}-title`}>
            <div className="border-b border-bark-900/15 pb-4">
              <h2 id={`${idPrefix}${g.id}-title`} className="font-display text-2xl font-bold text-bark-900 sm:text-3xl">
                {g.name}
              </h2>
              <p className="mt-1 text-base text-bark-700">{g.description}</p>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">
              {g.members.map((p, i) => (
                <PersonCard key={p.name} person={p} index={i} />
              ))}
            </ul>
          </section>
        ))}

        {pending.length > 0 ? (
          <section aria-label="Roles to be announced">
            <h2 className="font-display text-2xl font-bold text-bark-900 sm:text-3xl">Still to be announced</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pending.map((g) => (
                <li key={g.id}>
                  <PendingCard group={g} />
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </Container>
  )
}
