import type { MetadataRoute } from 'next'

import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/about', '/tournament', '/take-part', '/team', '/schedule', '/travel', '/partners', '/archive', '/archive/2026', '/archive/2026/team', '/archive/2026/schedule', '/archive/2026/partners'].map((path) => ({ url: `${SITE_URL}${path}` }))
}
