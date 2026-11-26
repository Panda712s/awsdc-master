import Link from 'next/link'
import clsx from 'clsx'

type Variant = 'primary' | 'secondary' | 'light' | 'saffron'

const variants: Record<Variant, string> = {
  primary: 'bg-clay-700 text-white hover:bg-clay-800',
  secondary: 'border-2 border-bark-900 text-bark-900 hover:bg-bark-900 hover:text-sand-50',
  light: 'border-2 border-sand-50/70 text-sand-50 hover:bg-sand-50 hover:text-bark-900',
  saffron: 'bg-saffron-400 text-bark-950 hover:bg-saffron-300',
}

type ButtonProps = {
  href: string
  variant?: Variant
  className?: string
  children: React.ReactNode
}

/** Link-styled button. External URLs open in a new tab safely. 44px+ touch target. */
export function Button({ href, variant = 'primary', className, children }: ButtonProps) {
  const classes = clsx(
    'inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-colors',
    variants[variant],
    className,
  )
  const external = /^https?:\/\//.test(href)
  const direct = /^(mailto|tel):/.test(href)

  if (direct) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    )
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
