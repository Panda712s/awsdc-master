import clsx from 'clsx'

export function SectionHeading({
  id,
  title,
  children,
  className,
  onDark,
}: {
  id?: string
  title: string
  children?: React.ReactNode
  className?: string
  onDark?: boolean
}) {
  return (
    <div className={clsx('max-w-2xl', className)}>
      <h2 id={id} className={clsx('font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl', onDark ? 'text-sand-50' : 'text-bark-900')}>
        {title}
      </h2>
      {children ? (
        <p className={clsx('mt-4 text-lg leading-relaxed text-pretty', onDark ? 'text-sand-200' : 'text-bark-700')}>{children}</p>
      ) : null}
    </div>
  )
}
