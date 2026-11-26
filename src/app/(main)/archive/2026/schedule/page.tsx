import { type Metadata } from 'next'

import { Layout } from '@/components/Layout'
import { PageHeader } from '@/components/PageHeader'
import { Schedule } from '@/components/Schedule'
import { awsdc2026 as edition } from '@/data/awsdc-2026'
import { ARCHIVE_2026_PATH } from '@/lib/site'

export const metadata: Metadata = {
  title: 'AWSDC 2026 schedule (archive)',
  description: 'The 2026 Africa World Schools Debating Championships schedule, 27 March to 2 April 2026 at the University of Pretoria.',
  alternates: { canonical: `${ARCHIVE_2026_PATH}/schedule` },
}

export default function Schedule2026() {
  return (
    <Layout edition={edition}>
      <PageHeader
        title="2026 tournament schedule"
        badge="Archived 2026 edition"
        intro="The championship ran from 27 March to 2 April 2026 at the University of Pretoria, with arrival on 27 March and departures on 2 April."
        crumbs={[{ label: 'AWSDC 2026 archive', href: ARCHIVE_2026_PATH }, { label: 'Schedule' }]}
      />
      <Schedule days={edition.schedule} formatNote={edition.formatNote} timeZoneNote="All times are South Africa Standard Time (SAST)." />
    </Layout>
  )
}
