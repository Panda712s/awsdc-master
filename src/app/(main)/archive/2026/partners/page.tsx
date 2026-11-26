import { type Metadata } from 'next'

import { Layout } from '@/components/Layout'
import { PageHeader } from '@/components/PageHeader'
import { Sponsors } from '@/components/Sponsors'
import { awsdc2026 as edition } from '@/data/awsdc-2026'
import { ARCHIVE_2026_PATH } from '@/lib/site'

export const metadata: Metadata = {
  title: 'AWSDC 2026 partners (archive)',
  description: 'The partners and schools that supported the 2026 Africa World Schools Debating Championships.',
  alternates: { canonical: `${ARCHIVE_2026_PATH}/partners` },
}

export default function Partners2026() {
  return (
    <Layout edition={edition}>
      <PageHeader
        title="2026 partners and schools"
        badge="Archived 2026 edition"
        intro="The organisations that supported the 2026 championship."
        crumbs={[{ label: 'AWSDC 2026 archive', href: ARCHIVE_2026_PATH }, { label: 'Partners' }]}
      />
      <Sponsors partners={edition.partners} />
    </Layout>
  )
}
