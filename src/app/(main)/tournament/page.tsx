import { type Metadata } from 'next'

import { CtaBand } from '@/components/CtaBand'
import { HostCity } from '@/components/HostCity'
import { Layout } from '@/components/Layout'
import { Overview } from '@/components/Overview'
import { PageHeader } from '@/components/PageHeader'
import { Section } from '@/components/Section'
import { Venues } from '@/components/Venues'
import { awsdc2027 as edition } from '@/data/awsdc-2027'

const d = edition.details!

export const metadata: Metadata = {
  title: 'Tournament overview',
  description: 'AWSDC 2027 tournament overview: Pretoria, University of Pretoria, 19 to 25 March 2027, 100 team cap. Host city and venues.',
  alternates: { canonical: '/tournament' },
}

export default function TournamentPage() {
  return (
    <Layout edition={edition}>
      <PageHeader title="Tournament overview" intro="Seven days at the University of Pretoria, 19 to 25 March 2027." crumbs={[{ label: 'Home', href: '/' }, { label: 'Tournament' }]} />
      <Section title="At a glance">
        <Overview facts={d.overview} />
      </Section>
      <Section tone="sand" title="The host city">
        <HostCity city={d.hostCity} />
      </Section>
      <Section title="Tournament venues">
        <Venues venues={d.venues} />
      </Section>
      <CtaBand title="Plan your journey" text="Find airport, visa and accommodation information." actions={[{ label: 'Travel & stay', href: '/travel' }, { label: 'Register your team', href: '/take-part', variant: 'secondary' }]} />
    </Layout>
  )
}
