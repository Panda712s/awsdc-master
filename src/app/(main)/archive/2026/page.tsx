import { type Metadata } from 'next'

import { ExploreCards } from '@/components/ExploreCards'
import { Hero } from '@/components/Hero'
import { Layout } from '@/components/Layout'
import { PhotoStrip } from '@/components/PhotoStrip'
import { awsdc2026 as edition } from '@/data/awsdc-2026'
import { ARCHIVE_2026_PATH } from '@/lib/site'

export const metadata: Metadata = {
  title: 'AWSDC 2026 archive',
  description: 'Archive of the 2026 Africa World Schools Debating Championships, held in Pretoria from 27 March to 2 April 2026: team, tournament schedule and partners.',
  alternates: { canonical: ARCHIVE_2026_PATH },
  openGraph: { title: 'AWSDC 2026 archive', url: ARCHIVE_2026_PATH },
}

const team = edition.team.filter((g) => ['convenors', 'cas'].includes(g.id)).flatMap((g) => g.members)

export default function Archive2026() {
  return (
    <Layout edition={edition}>
      <Hero edition={edition} />
      <ExploreCards
        title="Browse the 2026 edition"
        items={[
          { title: 'Team', description: 'Convenors, chief adjudicators, tab team and volunteers.', href: `${ARCHIVE_2026_PATH}/team` },
          { title: 'Schedule', description: 'The day-by-day programme, 27 March to 2 April 2026.', href: `${ARCHIVE_2026_PATH}/schedule` },
          { title: 'Partners', description: 'The organisations that supported the championship.', href: `${ARCHIVE_2026_PATH}/partners` },
        ]}
      />
      <PhotoStrip people={team} title="The 2026 convenors and chief adjudicators" intro="The people who led AWSDC 2026." href={`${ARCHIVE_2026_PATH}/team`} cta="See the full 2026 team" />
    </Layout>
  )
}
