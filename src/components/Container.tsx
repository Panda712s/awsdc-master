import clsx from 'clsx'

export function Container({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return <div className={clsx('mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10', className)} {...props} />
}
