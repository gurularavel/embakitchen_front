import React from 'react'
import Link from 'next/link'
import { menuItemStyles } from '@ek/components/atoms/styles'

const styles: StyleRecord = menuItemStyles as StyleRecord

interface MenuItemProps {
  href: string
  twStyles?: string
  children: React.ReactNode
}

export function MenuItem({
  href,
  twStyles,
  children,
}: MenuItemProps): React.ReactElement {
  return (
    <li className={`${styles.container} ${twStyles ?? ''}`}>
      <Link href={href}>{children}</Link>
    </li>
  )
}
