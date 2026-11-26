import { type Metadata } from 'next'

import { Layout } from '@/components/Layout'
import { PageHeader } from '@/components/PageHeader'
import { Schedule } from '@/components/Schedule'
import { awsdc2027 as edition } from '@/data/awsdc-2027'

export const metadata: Metadata = {
  title: 'Tournament schedule',
  description: 'The AWSDC 2027 schedule, 19 to 25 March 2027: arrival and opening ceremony, six preliminary rounds, excursion day, finals series and the grand finale banquet.',
  alternates: { canonical: '/schedule' },
}

export default function SchedulePage() {
  return (
    <Layout edition={edition}>
      <PageHeader title="Tournament schedule" intro="Seven days, 19 to 25 March 2027, at the University of Pretoria." crumbs={[{ label: 'Home', href: '/' }, { label: 'Schedule' }]} />
      <Schedule days={edition.schedule} formatNote={edition.formatNote} timeZoneNote="All times are South Africa Standard Time (SAST)." showArchiveLink />
    </Layout>
  )
}
