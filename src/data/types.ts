import type { StaticImageData } from 'next/image'

export type NavLink = { label: string; href: string }

/** A way to take part (register, apply…). `href: null` means "not open yet". */
export type Opportunity = {
  id: string
  title: string
  description: string
  /** Registration / application URL (or mailto:). Leave null until officially announced. */
  href: string | null
  /** Button text when href is set. */
  actionLabel?: string
  /** Shown while href is null. */
  pendingLabel?: string
}

export type Person = {
  name: string
  role: string
  country?: string
  image: StaticImageData
}

export type TeamGroup = {
  id: string
  name: string
  shortName: string
  description: string
  /** Leave empty until appointments are confirmed – a placeholder is shown. */
  members: Person[]
}

export type SlotKind = 'debate' | 'speaking' | 'meal' | 'travel' | 'social' | 'admin'

export type ScheduleSlot = {
  name: string
  start: string
  end: string
  kind: SlotKind
}

export type ScheduleDay = {
  /** ISO date, e.g. 2027-03-26 */
  date: string
  summary: string
  slots: ScheduleSlot[]
}

export type Partner = {
  name: string
  logo: StaticImageData
  /** e.g. "Organiser", "Host institution" */
  role?: string
  href?: string
}

export type Fact = { label: string; value: string | string[] }

export type FeeTier = { name: string; amount: string; description: string }

export type Deadline = { label: string; date: string }

export type Photo = { src: StaticImageData; alt: string }

export type Venue = { name: string; description?: string; photos: Photo[] }

export type SocialEvent = { title: string; description: string; photos: Photo[] }

export type VisaInfo = {
  visaFree: string[]
  note: string
  evisaIntro: string
  evisaOptions: { label: string; processing: string; price: string }[]
}

export type StayOption = {
  name: string
  address: string
  distanceKm: string
  priceZar: string
  breakfast: 'provided' | 'not provided' | 'varies' | 'not stated'
}

export type Contact = {
  email: string
  whatsapp: { name: string; number: string }[]
  mobile: { name: string; number: string }[]
}

export type Stat = { value: number; label: string; suffix?: string }

export type EditionDetails = {
  country: string
  teamCap: string
  overview: Fact[]
  fees: FeeTier[]
  commitmentFee: { amount: string; description: string }
  deadlines: Deadline[]
  letter: { paragraphs: string[]; signatories: string[]; committee: string[] }
  hostCity: { title: string; paragraphs: string[]; excursionTitle: string; excursion: string[]; photos: Photo[] }
  airport: { title: string; text: string }
  venues: { institution: string; institutionPhotos: Photo[]; rooms: Venue[] }
  hotel: { name: string; text: string; photos: Photo[] }
  stayOptions: StayOption[]
  stayDisclaimer: string
  visa: VisaInfo
  socialEvents: SocialEvent[]
  introPhotos: Photo[]
  heroPhotos: Photo[]
  stats: Stat[]
  marquee: Photo[]
}

export type Edition = {
  year: number
  /** Used in URLs and metadata. */
  slug: string
  name: string
  shortName: string
  status: 'upcoming' | 'archived'
  /** ISO dates (YYYY-MM-DD). null = not announced. */
  startDate: string | null
  endDate: string | null
  city: string | null
  venue: string | null
  intro: string[]
  /** Format note shown above the schedule (only when confirmed). */
  formatNote: string | null
  opportunities: Opportunity[]
  team: TeamGroup[]
  schedule: ScheduleDay[]
  partners: Partner[]
  /** Contact details, shown only if provided. */
  contact: Contact | null
  /** Extra confirmed information (2027 only). */
  details?: EditionDetails
}
