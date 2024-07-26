import React from 'react'
import { Logo, Search, Sidebar } from '@ek/components'
import { headerStyles } from '@ek/components/organisms/styles'

const styles: Readonly<StyleRecord> = headerStyles as StyleRecord

interface HeaderProps {}

export function Header({}: Readonly<HeaderProps>): React.ReactElement {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <Sidebar />
        <Logo variant='header' />
        <Search />
      </div>
    </header>
  )
}
