import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import mark from '@/images/logos/awsdc-mark.png'

/** AWSDC emblem + wordmark, used in the header. */
export function Brand({ href = '/', label, onDark }: { href?: string; label?: string; onDark?: boolean }) {
  return (
    <Link href={href} className="group flex items-center gap-3" aria-label={`AWSDC${label ? ` ${label}` : ''} home`}>
      <Image src={mark} alt="" className="h-10 w-auto sm:h-11" sizes="48px" priority />
      <span className="flex flex-col leading-none">
        <span className={clsx('font-display text-xl font-bold tracking-wide sm:text-2xl', onDark ? 'text-sand-50' : 'text-bark-900')}>
          AWSDC{label ? <span className="ml-1.5 text-clay-700">{label}</span> : null}
        </span>
        <span className={clsx('mt-1 hidden text-[0.7rem] font-medium sm:block', onDark ? 'text-sand-200' : 'text-bark-600')}>
          Africa World Schools Debating Championships
        </span>
      </span>
    </Link>
  )
}
