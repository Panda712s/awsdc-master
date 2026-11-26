'use client'

import Link from 'next/link'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import type { ScheduleDay, SlotKind } from '@/data/types'
import { formatDayHeading } from '@/lib/dates'
import { ARCHIVE_2026_PATH } from '@/lib/site'

const KIND: Record<SlotKind, { label: string; dot: string; bar: string; strong: boolean }> = {
  debate: { label: 'Debate', dot: 'bg-clay-700', bar: 'border-clay-700', strong: true },
  speaking: { label: 'Public speaking & Spelling Bee', dot: 'bg-saffron-500', bar: 'border-saffron-500', strong: true },
  social: { label: 'Social', dot: 'bg-rust-600', bar: 'border-rust-600', strong: true },
  meal: { label: 'Meal or break', dot: 'bg-bark-600/60', bar: 'border-transparent', strong: false },
  travel: { label: 'Travel', dot: 'bg-sand-300', bar: 'border-transparent', strong: false },
  admin: { label: 'Briefing or admin', dot: 'bg-bark-900', bar: 'border-transparent', strong: false },
}

function Legend() {
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-bark-700" aria-label="Colour key">
      {(['debate', 'speaking', 'social', 'meal', 'travel', 'admin'] as SlotKind[]).map((k) => (
        <li key={k} className="inline-flex items-center gap-2">
          <span aria-hidden="true" className={clsx('h-2.5 w-2.5 rounded-full', KIND[k].dot)} />
          {KIND[k].label}
        </li>
      ))}
    </ul>
  )
}

function Pending({ showArchiveLink }: { showArchiveLink: boolean }) {
  return (
    <div className="mt-10 max-w-2xl rounded-2xl border border-dashed border-bark-900/25 bg-sand-100 p-6 sm:p-8">
      <h3 className="font-display text-xl font-bold text-bark-900">Schedule to be announced</h3>
      <p className="mt-2 text-base leading-relaxed text-bark-700">
        The full programme will be published here once the dates and venue are confirmed.
      </p>
      {showArchiveLink ? (
        <p className="mt-4 text-base">
          <Link href={`${ARCHIVE_2026_PATH}/schedule`} className="font-semibold text-clay-800 underline underline-offset-4 hover:text-clay-700">
            See how the 2026 schedule was laid out
          </Link>
        </p>
      ) : null}
    </div>
  )
}

export function Schedule({
  days,
  title,
  intro,
  formatNote,
  timeZoneNote,
  showArchiveLink = false,
}: {
  days: ScheduleDay[]
  title?: string
  intro?: string
  formatNote?: string | null
  timeZoneNote?: string
  showArchiveLink?: boolean
}) {
  return (
    <section aria-label="Tournament schedule" className={title ? 'bg-sand-100 py-16 sm:py-24' : 'py-14 sm:py-20'}>
      <Container>
        {title ? (
          <SectionHeading title={title}>{intro}</SectionHeading>
        ) : intro ? (
          <p className="max-w-2xl text-lg leading-relaxed text-bark-700">{intro}</p>
        ) : null}
        {formatNote ? (
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-bark-900/15 bg-white px-4 py-2 text-sm font-medium text-bark-800">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-clay-600" />
            {formatNote}
          </p>
        ) : null}

        {days.length === 0 ? (
          <Pending showArchiveLink={showArchiveLink} />
        ) : (
          <TabGroup className="mt-10 grid gap-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-10">
            <TabList className="grid grid-cols-4 gap-2 sm:grid-cols-7 lg:grid-cols-1 lg:content-start">
              {days.map((d) => {
                const h = formatDayHeading(d.date)
                return (
                  <Tab
                    key={d.date}
                    className="rounded-xl border border-bark-900/15 bg-white px-2 py-2.5 text-center transition-colors hover:border-bark-900/40 data-selected:border-bark-900 data-selected:bg-bark-900 data-selected:text-sand-50 lg:px-4 lg:py-3 lg:text-left"
                  >
                    <span className="block text-xs font-medium opacity-80">{h.weekdayShort}</span>
                    <span className="block font-display text-lg leading-tight font-bold lg:inline">
                      {h.day} {h.monthShort}
                    </span>
                    <span className="mt-1 hidden text-sm leading-snug font-normal opacity-80 lg:block">{d.summary}</span>
                  </Tab>
                )
              })}
            </TabList>

            <div className="min-w-0">
            <TabPanels>
              {days.map((d) => {
                const h = formatDayHeading(d.date)
                return (
                  <TabPanel key={d.date} className="rounded-2xl border border-sand-300 bg-white focus:outline-none motion-safe:animate-pop">
                    <div className="border-b border-sand-200 p-5 sm:p-6">
                      <h3 className="font-display text-2xl font-bold text-bark-900">
                        {h.weekday} {h.day} {h.month}
                      </h3>
                      <p className="mt-1 text-base text-bark-700">{d.summary}</p>
                    </div>
                    <ol className="p-2 sm:p-3">
                      {d.slots.map((s, i) => {
                        const k = KIND[s.kind]
                        return (
                          <li key={`${s.start}-${s.name}`} style={{ animationDelay: `${Math.min(i, 12) * 35}ms` }} className={clsx('motion-safe:animate-rise grid grid-cols-[6.25rem_minmax(0,1fr)] gap-x-3 rounded-lg border-l-4 px-3 py-3 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-x-4 sm:px-4', k.bar)}>
                            <p className="text-sm font-medium whitespace-nowrap text-bark-700 tabular-nums sm:text-base">
                              <time dateTime={s.start}>{s.start}</time>
                              <span aria-hidden="true">–</span>
                              <span className="sr-only"> to </span>
                              <time dateTime={s.end}>{s.end}</time>
                            </p>
                            <p className={clsx('min-w-0 text-base leading-snug break-words', k.strong ? 'font-semibold text-bark-950' : 'text-bark-800')}>
                              {s.name}
                              <span className="sr-only"> ({k.label})</span>
                            </p>
                          </li>
                        )
                      })}
                    </ol>
                  </TabPanel>
                )
              })}
            </TabPanels>
            <div className="mt-5 space-y-2">
              <Legend />
              {timeZoneNote ? <p className="text-sm text-bark-700">{timeZoneNote}</p> : null}
            </div>
            </div>
          </TabGroup>
        )}
      </Container>
    </section>
  )
}
