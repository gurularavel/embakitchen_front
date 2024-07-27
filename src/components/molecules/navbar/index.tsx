import * as React from 'react'
import { Menu } from '@ek/components'

interface NavbarProps {}

const navbarStyles: Readonly<TailwindStyle> = {
  navbar: '',
}
const styles: Readonly<StyleRecord> = navbarStyles as StyleRecord

export function Navbar({}: Readonly<NavbarProps>): React.ReactElement {
  return (
    <div className={styles.navbar}>
      <Menu />
    </div>
  )
}
