import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'
import { PageHeader } from '@/components/PageHeader'
import { Team } from '@/components/Team'
import { awsdc2027 as edition } from '@/data/awsdc-2027'
import { ARCHIVE_2026_PATH } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Team',
  description: 'The AWSDC 2027 team: convenors, Chief Adjudication Panel, core team and tournament staff.',
  alternates: { canonical: '/team' },
}

export default function TeamPage() {
  return (
    <Layout edition={edition}>
      <PageHeader title="The AWSDC 2027 team" intro="The convenors, adjudicators and staff running the championship." crumbs={[{ label: 'Home', href: '/' }, { label: 'Team' }]} />
      <div className="py-14 sm:py-20">
        <Team groups={edition.team} />
      </div>
      <Container className="pb-16">
        <p className="text-base text-bark-700">
          Looking for the people behind last year’s edition?{' '}
          <Link href={`${ARCHIVE_2026_PATH}/team`} className="font-semibold text-clay-800 underline underline-offset-4 hover:text-clay-700">
            See the 2026 team
          </Link>
        </p>
      </Container>
    </Layout>
  )
}
