import type { NavLink } from '@/data/types'

export const SITE_URL = 'https://www.awsdc.co.za'

export const ARCHIVE_INDEX_PATH = '/archive'
export const ARCHIVE_2026_PATH = '/archive/2026'
export const ARCHIVE_2026_LABEL = 'Previous Website – 2026'

/** Pages of the current (2027) site. */
export const currentNav: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Tournament', href: '/tournament' },
  { label: 'Team', href: '/team' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Travel & stay', href: '/travel' },
  { label: 'Partners', href: '/partners' },
]

/** Pages inside the 2026 archive. */
export const archive2026Nav: NavLink[] = [
  { label: 'Overview', href: ARCHIVE_2026_PATH },
  { label: 'Team', href: `${ARCHIVE_2026_PATH}/team` },
  { label: 'Schedule', href: `${ARCHIVE_2026_PATH}/schedule` },
  { label: 'Partners', href: `${ARCHIVE_2026_PATH}/partners` },
]
