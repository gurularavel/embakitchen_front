import Link from 'next/link'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  classes?: string
  openInNewTab?: boolean
}

export function NavLink({
  href,
  children,
  classes,
  openInNewTab,
}: Readonly<NavLinkProps>): React.ReactElement {
  const props = openInNewTab
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Link
      href={href}
      className={classes ?? ''}
      {...props}
    >
      {children}
    </Link>
  )
}
