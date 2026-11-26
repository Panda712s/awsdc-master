import { type Metadata } from 'next'

import { ContactCard } from '@/components/ContactCard'
import { Fees } from '@/components/Fees'
import { Layout } from '@/components/Layout'
import { PageHeader } from '@/components/PageHeader'
import { Section } from '@/components/Section'
import { TakePart } from '@/components/TakePart'
import { awsdc2027 as edition } from '@/data/awsdc-2027'

const d = edition.details!

export const metadata: Metadata = {
  title: 'Register & fees',
  description: 'Register a team for AWSDC 2027, apply to be a Deputy Chief Adjudicator, and see the fees and payment deadlines.',
  alternates: { canonical: '/take-part' },
}

export default function TakePartPage() {
  return (
    <Layout edition={edition}>
      <PageHeader title="Register & fees" intro="Register a team, apply to adjudicate, and see what it costs." crumbs={[{ label: 'Home', href: '/' }, { label: 'Register' }]} />
      <TakePart edition={edition} />
      <Section tone="sand" title="Fees and deadlines" intro="Fees are in US dollars. Please confirm your tier and payment details with the organisers.">
        <Fees details={d} />
      </Section>
      {edition.contact ? (
        <Section>
          <ContactCard contact={edition.contact} />
        </Section>
      ) : null}
    </Layout>
  )
}
