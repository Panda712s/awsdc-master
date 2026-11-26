import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import type { Contact } from '@/data/types'

const digits = (n: string) => n.replace(/[^\d]/g, '')

/** Official contact details. */
export function ContactCard({ contact }: { contact: Contact }) {
  const linkCls = 'font-semibold text-sand-50 underline decoration-clay-500 underline-offset-4 hover:decoration-saffron-400'
  return (
    <Reveal>
      <div className="grid gap-8 rounded-3xl bg-bark-900 p-7 text-sand-50 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <h3 className="font-display text-3xl font-bold">For more information or to register</h3>
          <p className="mt-3 text-lg text-sand-200">Get in touch with the organising team.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={`mailto:${contact.email}`} variant="saffron">
              Email {contact.email}
            </Button>
          </div>
        </div>
        <dl className="space-y-4 text-base">
          <div>
            <dt className="text-sm font-medium text-sand-300">WhatsApp</dt>
            {contact.whatsapp.map((w) => (
              <dd key={w.number} className="mt-1">
                <a href={`https://wa.me/${digits(w.number)}`} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  {w.number}
                </a>{' '}
                <span className="text-sand-300">({w.name})</span>
              </dd>
            ))}
          </div>
          <div>
            <dt className="text-sm font-medium text-sand-300">Mobile</dt>
            {contact.mobile.map((m) => (
              <dd key={m.number} className="mt-1">
                <a href={`tel:+${digits(m.number)}`} className={linkCls}>
                  {m.number}
                </a>{' '}
                <span className="text-sand-300">({m.name})</span>
              </dd>
            ))}
          </div>
        </dl>
      </div>
    </Reveal>
  )
}
