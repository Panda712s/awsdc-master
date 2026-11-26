import { About } from '@/components/About'
import { CtaBand } from '@/components/CtaBand'
import { ExploreCards } from '@/components/ExploreCards'
import { Hero } from '@/components/Hero'
import { Highlights } from '@/components/Highlights'
import { Layout } from '@/components/Layout'
import { PhotoMarquee } from '@/components/PhotoMarquee'
import { PhotoStrip } from '@/components/PhotoStrip'
import { Stats } from '@/components/Stats'
import { awsdc2027 as edition } from '@/data/awsdc-2027'
import { ARCHIVE_2026_LABEL, ARCHIVE_2026_PATH } from '@/lib/site'

const d = edition.details!
const leadership = edition.team.filter((g) => ['convenors', 'cap'].includes(g.id)).flatMap((g) => g.members)

export default function Home() {
  return (
    <Layout edition={edition}>
      <Hero edition={edition} />
      <Stats stats={d.stats} />
      <About edition={edition} heading />
      <PhotoMarquee photos={d.marquee} />
      <Highlights events={d.socialEvents} />
      <PhotoStrip
        people={leadership}
        title="Meet the leadership"
        intro="The convenors and Chief Adjudication Panel guiding AWSDC 2027."
        href="/team"
        cta="Meet the full team"
      />
      <ExploreCards
        title="Plan your trip"
        intro="Everything you need to know before you arrive in Pretoria."
        items={[
          { title: 'Tournament', description: 'Host city, venues, and the overview of the championship.', href: '/tournament' },
          { title: 'Schedule', description: 'Seven days, from arrival on 19 March to departure on 25 March.', href: '/schedule' },
          { title: 'Travel & stay', description: 'Airport shuttles, visa requirements and accommodation options.', href: '/travel' },
        ]}
      />
      <CtaBand
        title="Bring your school to Pretoria"
        text="Registration is open, with a 100 team cap. See the fees and deadlines, then get in touch to register."
        actions={[
          { label: 'Register your team', href: '/take-part' },
          { label: ARCHIVE_2026_LABEL, href: ARCHIVE_2026_PATH, variant: 'secondary' },
        ]}
      />
    </Layout>
  )
}
