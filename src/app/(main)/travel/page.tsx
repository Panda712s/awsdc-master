import { type Metadata } from 'next'

import { Accommodation } from '@/components/Accommodation'
import { ContactCard } from '@/components/ContactCard'
import { Layout } from '@/components/Layout'
import { PageHeader } from '@/components/PageHeader'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { Visa } from '@/components/Visa'
import { awsdc2027 as edition } from '@/data/awsdc-2027'

const d = edition.details!

export const metadata: Metadata = {
  title: 'Travel & stay',
  description: 'Travel to AWSDC 2027 in Pretoria: OR Tambo airport shuttles, visa requirements and the e-Visa, the official Anew Hotel and nearby accommodation options.',
  alternates: { canonical: '/travel' },
}

export default function TravelPage() {
  return (
    <Layout edition={edition}>
      <PageHeader title="Travel & stay" intro="Airport, visas and accommodation for AWSDC 2027." crumbs={[{ label: 'Home', href: '/' }, { label: 'Travel & stay' }]} />

      <Section>
        <Reveal className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-bark-900 sm:text-4xl">{d.airport.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-bark-800">{d.airport.text}</p>
        </Reveal>
      </Section>

      <Section tone="sand" title="Visa requirements">
        <Visa visa={d.visa} />
      </Section>

      <Section title="Accommodation">
        <Accommodation hotel={d.hotel} options={d.stayOptions} disclaimer={d.stayDisclaimer} />
      </Section>

      {edition.contact ? (
        <Section tone="sand">
          <ContactCard contact={edition.contact} />
        </Section>
      ) : null}
    </Layout>
  )
}
