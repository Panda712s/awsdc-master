import Image from 'next/image'
import clsx from 'clsx'

import { Reveal } from '@/components/Reveal'
import type { Photo } from '@/data/types'

/** Rounded photo that zooms slightly on hover. */
export function PhotoTile({ photo, aspect = 'aspect-[4/3]', sizes = '(min-width: 1024px) 30vw, 90vw', className, delay = 0, priority }: { photo: Photo; aspect?: string; sizes?: string; className?: string; delay?: number; priority?: boolean }) {
  return (
    <Reveal delay={delay} className={clsx('group relative overflow-hidden rounded-2xl bg-sand-200', aspect, className)}>
      <Image src={photo.src} alt={photo.alt} fill sizes={sizes} priority={priority} className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none" />
    </Reveal>
  )
}
