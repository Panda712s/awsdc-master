import Image from 'next/image'

import type { Photo } from '@/data/types'

/** Slowly scrolling strip of photos. Pauses on hover; becomes a swipeable row for reduced motion. */
export function PhotoMarquee({ photos }: { photos: Photo[] }) {
  const row = (hidden: boolean) =>
    photos.map((p, i) => (
      <li key={`${hidden ? 'b' : 'a'}${i}`} className={hidden ? 'shrink-0 motion-reduce:hidden' : 'shrink-0'} aria-hidden={hidden || undefined}>
        <Image
          src={p.src}
          alt={hidden ? '' : p.alt}
          sizes="(min-width: 640px) 24rem, 18rem"
          className="h-56 w-auto rounded-2xl object-cover sm:h-72"
        />
      </li>
    ))

  return (
    <section aria-label="Photos from AWSDC" className="overflow-hidden py-14 sm:py-20">
      <div className="motion-reduce:overflow-x-auto">
        <ul className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused] motion-reduce:animate-none">
          {row(false)}
          {row(true)}
        </ul>
      </div>
    </section>
  )
}
