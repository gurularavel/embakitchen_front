import * as React from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  classes?: string
  openInNewWindow?: boolean
}

const navLinkStyles: Readonly<TailwindStyle> = {
  navLink: '',
}
const styles: Readonly<StyleRecord> = navLinkStyles as StyleRecord

export function NavLink({
  href,
  children,
  classes,
  openInNewWindow,
}: Readonly<NavLinkProps>): ReactComponent {
  const props = openInNewWindow
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Link
      href={href}
      className={twMerge(styles.navLink, classes ?? '')}
      {...props}
    >
      {children}
    </Link>
  )
}
