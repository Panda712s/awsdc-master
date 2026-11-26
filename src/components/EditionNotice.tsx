import Link from 'next/link'

import { Container } from '@/components/Container'
import { ARCHIVE_2026_LABEL, ARCHIVE_2026_PATH } from '@/lib/site'

/** Slim strip above the 2027 header pointing to the previous website. */
export function ArchiveStrip() {
  return (
    <div className="bg-bark-900 text-sand-100">
      <Container className="flex min-h-10 flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2 text-sm">
        <p className="text-sand-200">Looking for last year’s championship?</p>
        <Link href={ARCHIVE_2026_PATH} className="rounded-full bg-saffron-400 px-3.5 py-1 font-semibold text-bark-950 transition-colors hover:bg-saffron-300">
          {ARCHIVE_2026_LABEL}
        </Link>
      </Container>
    </div>
  )
}

/** Unmissable banner shown on every archived page. */
export function ArchiveBanner({ year }: { year: number }) {
  return (
    <div role="note" className="bg-saffron-400 text-bark-950">
      <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-2.5 text-sm sm:text-base">
        <p>
          <strong className="font-bold">Archive:</strong> you are viewing the archived {year} edition. Information here is no longer current.
        </p>
        <Link href="/" className="rounded-full bg-bark-900 px-4 py-1.5 font-semibold text-sand-50 transition-colors hover:bg-bark-800">
          Back to AWSDC 2027
        </Link>
      </Container>
    </div>
  )
}
