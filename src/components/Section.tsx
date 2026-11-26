import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

/** Standard page section: optional heading that reveals on scroll. */
export function Section({
  id,
  title,
  intro,
  tone = 'plain',
  children,
  className,
}: {
  id?: string
  title?: string
  intro?: string
  tone?: 'plain' | 'sand' | 'dark'
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      aria-label={title}
      className={clsx(
        'scroll-mt-24 py-14 sm:py-20',
        tone === 'sand' && 'bg-sand-100',
        tone === 'dark' && 'bg-bark-900 text-sand-50',
        className,
      )}
    >
      <Container>
        {title ? (
          <Reveal className="mb-10">
            <SectionHeading title={title} onDark={tone === 'dark'}>
              {intro}
            </SectionHeading>
          </Reveal>
        ) : null}
        {children}
      </Container>
    </section>
  )
}
