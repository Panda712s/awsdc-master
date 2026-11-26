import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'
import { PageHeader } from '@/components/PageHeader'
import { Sponsors } from '@/components/Sponsors'
import { awsdc2027 as edition } from '@/data/awsdc-2027'
import { ARCHIVE_2026_PATH } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Partners and organisers',
  description: 'The organisers and partners of AWSDC 2027: Royalty Pact Debate Academy, University of Pretoria Debating Union, University of Pretoria and Gauteng Debate.',
  alternates: { canonical: '/partners' },
}

export default function PartnersPage() {
  return (
    <Layout edition={edition}>
      <PageHeader title="Partners and organisers" intro="The organisations that make the championship possible." crumbs={[{ label: 'Home', href: '/' }, { label: 'Partners' }]} />
      <Sponsors partners={edition.partners} />
      <Container className="pb-16">
        <p className="text-base text-bark-700">
          Looking for last year’s partners?{' '}
          <Link href={`${ARCHIVE_2026_PATH}/partners`} className="font-semibold text-clay-800 underline underline-offset-4 hover:text-clay-700">
            See the 2026 partners
          </Link>
        </p>
      </Container>
    </Layout>
  )
}
