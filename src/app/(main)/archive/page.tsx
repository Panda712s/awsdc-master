import { type Metadata } from 'next'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'
import { PageHeader } from '@/components/PageHeader'
import { awsdc2026 } from '@/data/awsdc-2026'
import { formatDateRange } from '@/lib/dates'
import { ARCHIVE_2026_PATH } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Previous editions',
  description: 'Browse previous editions of the Africa World Schools Debating Championships.',
  alternates: { canonical: '/archive' },
}

export default function ArchiveIndex() {
  const e = awsdc2026
  return (
    <Layout>
      <PageHeader
        title="Previous editions"
        intro="Look back at earlier editions of the championship. Archived pages are kept as they were and are not updated."
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Previous editions' }]}
      />
      <section aria-label="Archived editions" className="py-14 sm:py-20">
        <Container>
          <ul className="grid gap-5 md:grid-cols-2">
            <li className="flex flex-col rounded-2xl border border-sand-300 bg-white p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold text-bark-900">{e.shortName}</h2>
              <p className="mt-2 text-base text-bark-700">
                {formatDateRange(e.startDate!, e.endDate!)} · {e.city}
              </p>
              <p className="mt-4 flex-1 text-base leading-relaxed text-bark-700">Team, tournament schedule and partners from the 2026 championship.</p>
              <div className="mt-6">
                <Button href={ARCHIVE_2026_PATH}>View AWSDC 2026</Button>
              </div>
            </li>
          </ul>
          <div className="mt-10">
            <Button href="/" variant="secondary">
              Back to AWSDC 2027
            </Button>
          </div>
        </Container>
      </section>
    </Layout>
  )
}
