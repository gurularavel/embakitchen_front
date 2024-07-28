import * as React from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface MenuItemProps {
  href: string
  children: React.ReactNode
  classes?: string
  openInNewWindow?: boolean
}

const menuItemStyles: Readonly<TailwindStyle> = {
  menuItem: 'mb-6 text-base font-normal leading-6 text-white',
}
const styles: Readonly<StyleRecord> = menuItemStyles as StyleRecord

export function MenuItem({
  href,
  children,
  classes,
  openInNewWindow,
}: Readonly<MenuItemProps>): React.ReactElement {
  const props = openInNewWindow
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <li className={twMerge(styles.menuItem, classes ?? '')}>
      <Link
        href={href}
        {...props}
      >
        {children}
      </Link>
    </li>
  )
}
