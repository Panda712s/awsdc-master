import { type Metadata } from 'next'

import { CtaBand } from '@/components/CtaBand'
import { Layout } from '@/components/Layout'
import { Letter } from '@/components/Letter'
import { PageHeader } from '@/components/PageHeader'
import { PhotoTile } from '@/components/PhotoTile'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { SocialEvents } from '@/components/SocialEvents'
import { About } from '@/components/About'
import { awsdc2027 as edition } from '@/data/awsdc-2027'

const d = edition.details!

export const metadata: Metadata = {
  title: 'About AWSDC 2027',
  description: 'About the 2nd Africa World Schools Debating Championships, Pretoria, 19 to 25 March 2027: introduction, a letter from the conveners, and the social programme.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  const convenors = edition.team.find((g) => g.id === 'convenors')!.members
  return (
    <Layout edition={edition}>
      <PageHeader title="About the championship" intro="The 2nd edition of the Africa World Schools Debating Championships, hosted in Pretoria." crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-3xl font-bold text-bark-900 sm:text-4xl">Introduction</h2>
            <div className="mt-5 space-y-5 text-lg leading-relaxed text-bark-800">
              <p>
                Debate as a sport and a lifestyle serves as a social unifier and a platform to nurture ideas worth sharing. The Royalty Pact Debate Academy and the University of Pretoria Debating Union are among the biggest African contributors to this noble activity, with a long history of training debaters, adjudicators and coaches, and organising large-scale tournaments.
              </p>
              <p>
                Building on the success of the inaugural edition, we are proud to bring you the 2nd edition of the Africa World Schools Debate Championship, applying the experience accumulated throughout our work towards creating the most ideal tournament possible.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-7">
            <PhotoTile photo={d.introPhotos[0]} aspect="aspect-[3/4] row-span-2 h-full" sizes="(min-width: 1024px) 28vw, 46vw" />
            <PhotoTile photo={d.introPhotos[1]} aspect="aspect-[4/3]" delay={120} sizes="(min-width: 1024px) 28vw, 46vw" />
            <PhotoTile photo={d.introPhotos[2]} aspect="aspect-[4/3]" delay={240} sizes="(min-width: 1024px) 28vw, 46vw" />
          </div>
        </div>
      </Section>

      <About edition={edition} />

      <Section tone="sand" title="Letter from the conveners">
        <Letter letter={d.letter} people={convenors} />
      </Section>

      <Section id="social" title="Social events" intro="Between rounds, the championship is a week of culture, food and friendship.">
        <SocialEvents events={d.socialEvents} />
      </Section>

      <CtaBand title="Ready to be part of AWSDC 2027?" text="See the fees and deadlines, or look at the full schedule." actions={[{ label: 'Register your team', href: '/take-part' }, { label: 'View the schedule', href: '/schedule', variant: 'secondary' }]} />
    </Layout>
  )
}
