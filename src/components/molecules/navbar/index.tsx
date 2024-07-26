import React from 'react'
import { Menu } from '@ek/components'
import { navbarStyles } from '@ek/components/molecules/styles'

const styles: StyleRecord = navbarStyles as StyleRecord

interface NavbarProps {}

export function Navbar({}: Readonly<NavbarProps>): React.ReactElement {
  return (
    <div className={styles.container}>
      <Menu />
    </div>
  )
}
