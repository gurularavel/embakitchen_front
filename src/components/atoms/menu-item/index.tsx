import * as React from 'react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

interface MenuItemProps {
  href: string
  children: React.ReactNode
  classes?: string
}

const menuItemStyles: Readonly<TailwindStyle> = {
  menuItem: 'mb-6 text-base font-normal leading-6 text-white',
}
const styles: Readonly<StyleRecord> = menuItemStyles as StyleRecord

export function MenuItem({
  href,
  children,
  classes,
}: Readonly<MenuItemProps>): React.ReactElement {
  return (
    <li className={twMerge(styles.menuItem, classes ?? '')}>
      <Link href={href}>{children}</Link>
    </li>
  )
}
