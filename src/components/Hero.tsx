import Image from 'next/image'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Countdown } from '@/components/Countdown'
import { PatternBand } from '@/components/PatternBand'
import type { Edition } from '@/data/types'
import { formatDateRange } from '@/lib/dates'

import mark from '@/images/logos/awsdc-mark.png'

const TBA = 'To be announced'

function Fact({ term, children, pending }: { term: string; children: React.ReactNode; pending?: boolean }) {
  return (
    <div>
      <dt className="text-sm font-medium text-sand-300">{term}</dt>
      <dd className={pending ? 'mt-1 text-lg font-medium text-sand-200' : 'mt-1 text-lg font-semibold text-sand-50 sm:text-xl'}>{children}</dd>
    </div>
  )
}

/** Photo mosaic with staggered entrance, echoing the diagonal collage on the booklet cover. */
function Mosaic({ edition }: { edition: Edition }) {
  const photos = edition.details?.heroPhotos ?? []
  if (photos.length < 4) return null
  const [a, b, c, d] = photos
  const tile = 'relative overflow-hidden rounded-2xl bg-sand-200 shadow-lg shadow-bark-900/10'
  const img = 'object-cover transition-transform duration-700 hover:scale-105 motion-reduce:transition-none'
  return (
    <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
      <div className="space-y-3 sm:space-y-4">
        <div className={clsx(tile, 'aspect-[4/3] motion-safe:animate-pop [animation-delay:150ms]')}>
          <Image src={a.src} alt={a.alt} fill priority sizes="(min-width: 1024px) 24vw, 46vw" className={img} />
        </div>
        <div className={clsx(tile, 'aspect-[4/5] motion-safe:animate-pop [animation-delay:350ms]')}>
          <Image src={c.src} alt={c.alt} fill sizes="(min-width: 1024px) 24vw, 46vw" className={img} />
        </div>
      </div>
      <div className="mt-8 space-y-3 sm:mt-12 sm:space-y-4">
        <div className={clsx(tile, 'aspect-[4/5] motion-safe:animate-pop [animation-delay:250ms]')}>
          <Image src={d.src} alt={d.alt} fill priority sizes="(min-width: 1024px) 24vw, 46vw" className={img} />
        </div>
        <div className={clsx(tile, 'aspect-[4/3] motion-safe:animate-pop [animation-delay:450ms]')}>
          <Image src={b.src} alt={b.alt} fill sizes="(min-width: 1024px) 24vw, 46vw" className={img} />
        </div>
      </div>
      <div className="absolute -bottom-5 -left-3 w-24 rounded-full bg-sand-50 p-4 shadow-xl shadow-bark-900/15 motion-safe:animate-float sm:-left-6 sm:w-28">
        <Image src={mark} alt="AWSDC emblem" className="h-auto w-full" sizes="112px" />
      </div>
    </div>
  )
}

export function Hero({ edition }: { edition: Edition }) {
  const archived = edition.status === 'archived'
  const hasDates = Boolean(edition.startDate && edition.endDate)
  const where = [edition.venue, edition.city].filter(Boolean).join(', ')
  const register = edition.opportunities.find((o) => o.id === 'register')
  const mosaic = Boolean(edition.details?.heroPhotos?.length)

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <Container className="grid items-center gap-12 pt-10 pb-16 sm:pt-14 lg:grid-cols-12 lg:gap-10 lg:pt-20 lg:pb-24">
        <div className="relative z-10 lg:col-span-6">
          <p className="motion-safe:animate-rise inline-flex items-center gap-2 rounded-full border border-bark-900/15 bg-sand-100 px-4 py-1.5 text-sm font-medium text-bark-800">
            <span aria-hidden="true" className={clsx('h-2 w-2 rounded-full', archived ? 'bg-bark-600' : 'animate-pulse bg-clay-600 motion-reduce:animate-none')} />
            {archived ? `Archived ${edition.year} edition` : hasDates ? `2nd edition · ${formatDateRange(edition.startDate!, edition.endDate!)}` : `${edition.year} edition · Details to be announced`}
          </p>

          <h1 id="hero-title" className="motion-safe:animate-rise mt-6 font-display text-4xl leading-[1.05] font-bold tracking-tight text-balance text-bark-900 [animation-delay:80ms] sm:text-6xl lg:text-[3.6rem] xl:text-7xl">
            {edition.name}
          </h1>

          <p className="motion-safe:animate-rise mt-6 max-w-xl text-lg leading-relaxed text-pretty text-bark-700 [animation-delay:160ms] sm:text-xl">{edition.intro[0]}</p>

          <div className="motion-safe:animate-rise mt-9 flex flex-col gap-3 [animation-delay:240ms] sm:flex-row">
            {archived ? (
              <>
                <Button href="/">Back to AWSDC 2027</Button>
                <Button href="/archive/2026/schedule" variant="secondary">
                  View the {edition.year} schedule
                </Button>
              </>
            ) : (
              <>
                <Button href="/take-part">Register your team</Button>
                <Button href="/schedule" variant="secondary">
                  View the schedule
                </Button>
              </>
            )}
          </div>
        </div>

        <div className={clsx('relative lg:col-span-6', mosaic ? 'lg:pl-6' : 'mx-auto w-40 sm:w-56 lg:w-full lg:max-w-md lg:justify-self-end')}>
          {mosaic ? (
            <Mosaic edition={edition} />
          ) : (
            <div className="motion-safe:animate-settle relative [animation-delay:120ms]">
              <span aria-hidden="true" className="absolute inset-[-14%] -z-10 rounded-full bg-sand-100" />
              <Image src={mark} alt="AWSDC emblem: a map of Africa decorated with mudcloth-style patterns" priority sizes="(min-width: 1024px) 28rem, 14rem" className="h-auto w-full" />
            </div>
          )}
        </div>
      </Container>

      <PatternBand />
      <div className="bg-bark-900">
        <Container className="grid gap-8 py-8 sm:py-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-14">
          <dl className={clsx('grid gap-5 sm:gap-x-8', archived ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-3')}>
            <Fact term="Dates" pending={!hasDates}>
              {hasDates ? formatDateRange(edition.startDate!, edition.endDate!) : TBA}
            </Fact>
            <Fact term="Venue" pending={!where}>
              {where || TBA}
            </Fact>
            <Fact term="Registration" pending={!archived && !register?.href}>
              {archived ? 'Closed' : register?.href ? 'Open' : 'Opens soon'}
            </Fact>
            {archived ? <Fact term="Status">Concluded</Fact> : null}
          </dl>
          {!archived && hasDates ? (
            <div className="lg:min-w-[22rem]">
              <p className="mb-2 text-sm font-medium text-sand-300">Countdown to opening day</p>
              <Countdown startDate={edition.startDate!} endDate={edition.endDate} />
            </div>
          ) : null}
        </Container>
      </div>
    </section>
  )
}
