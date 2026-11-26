import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'
import { ARCHIVE_2026_LABEL, ARCHIVE_2026_PATH } from '@/lib/site'

export default function NotFound() {
  return (
    <Layout>
      <Container className="py-24 sm:py-32">
        <p className="font-display text-xl font-bold text-clay-700">404</p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-bark-900 sm:text-5xl">Page not found</h1>
        <p className="mt-4 max-w-lg text-lg text-bark-700">We couldn’t find that page. It may have moved, or the link may be incorrect.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/">Go to AWSDC 2027</Button>
          <Button href={ARCHIVE_2026_PATH} variant="secondary">
            {ARCHIVE_2026_LABEL}
          </Button>
        </div>
      </Container>
    </Layout>
  )
}
