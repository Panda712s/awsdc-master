import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'

/** Closing call to action band. */
export function CtaBand({ title, text, actions }: { title: string; text: string; actions: { label: string; href: string; variant?: 'primary' | 'secondary' | 'light' | 'saffron' }[] }) {
  return (
    <section aria-label={title} className="bg-sand-100 py-14 sm:py-20">
      <Container>
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-balance text-bark-900 sm:text-4xl">{title}</h2>
          <p className="mt-3 text-lg leading-relaxed text-bark-700">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          {actions.map((a) => (
            <Button key={a.href} href={a.href} variant={a.variant ?? 'primary'}>
              {a.label}
            </Button>
          ))}
        </div>
        </Reveal>
      </Container>
    </section>
  )
}
