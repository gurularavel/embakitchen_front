import * as React from 'react'
import { Nav } from '~ek/components'

interface NavbarProps {}

const navbarStyles: Readonly<TailwindStyle> = {
  navbar: 'mb-6',
}
const styles: Readonly<StyleRecord> = navbarStyles as StyleRecord

export function Navbar({}: Readonly<NavbarProps>): ReactComponent {
  return (
    <div className={styles.navbar}>
      <Nav />
    </div>
  )
}
