import { type Metadata } from 'next'

import { Layout } from '@/components/Layout'
import { PageHeader } from '@/components/PageHeader'
import { Team } from '@/components/Team'
import { awsdc2026 as edition } from '@/data/awsdc-2026'
import { ARCHIVE_2026_PATH } from '@/lib/site'

export const metadata: Metadata = {
  title: 'AWSDC 2026 team (archive)',
  description: 'The convenors, adjudicators, tab team and volunteers who ran the 2026 Africa World Schools Debating Championships.',
  alternates: { canonical: `${ARCHIVE_2026_PATH}/team` },
}

export default function Team2026() {
  return (
    <Layout edition={edition}>
      <PageHeader
        title="The 2026 team"
        badge="Archived 2026 edition"
        intro="The convenors, adjudicators, tab team and volunteers who ran AWSDC 2026."
        crumbs={[{ label: 'AWSDC 2026 archive', href: ARCHIVE_2026_PATH }, { label: 'Team' }]}
      />
      <div className="py-14 sm:py-20">
        <Team groups={edition.team} />
      </div>
    </Layout>
  )
}
