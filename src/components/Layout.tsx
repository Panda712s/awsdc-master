import { ArchiveBanner, ArchiveStrip } from '@/components/EditionNotice'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { awsdc2027 } from '@/data/awsdc-2027'
import type { Edition } from '@/data/types'
import { ARCHIVE_2026_LABEL, ARCHIVE_2026_PATH, archive2026Nav, currentNav } from '@/lib/site'

/**
 * Page chrome. Pass the edition being shown: the archived edition gets its own
 * banner, navigation and footer so it is never mistaken for the current site.
 */
export function Layout({ edition = awsdc2027, children }: { edition?: Edition; children: React.ReactNode }) {
  const archived = edition.status === 'archived'

  return (
    <>
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-full focus:bg-bark-900 focus:px-4 focus:py-2 focus:text-sand-50">
        Skip to content
      </a>
      {archived ? <ArchiveBanner year={edition.year} /> : <ArchiveStrip />}
      {archived ? (
        <Header nav={archive2026Nav} cta={{ label: 'Back to AWSDC 2027', href: '/' }} brandLabel={String(edition.year)} brandHref={ARCHIVE_2026_PATH} />
      ) : (
        <Header nav={currentNav} cta={{ label: 'Register', href: '/take-part' }} menuExtra={{ label: ARCHIVE_2026_LABEL, href: ARCHIVE_2026_PATH }} />
      )}
      <main id="content" className="flex-auto">
        {children}
      </main>
      <Footer edition={edition} />
    </>
  )
}
