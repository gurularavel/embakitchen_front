import * as React from 'react'
import { Logo, Search, Sidebar } from '@ek/components'

interface HeaderProps {}

const headerStyles: Readonly<TailwindStyle> = {
  header: 'w-full h-10 px-5 bg-dark-gray-1',
  headerContentWrapper: 'h-full flex justify-between items-center relative',
}
const styles: Readonly<StyleRecord> = headerStyles as StyleRecord

export function Header({}: Readonly<HeaderProps>): React.ReactElement {
  return (
    <header className={styles.header}>
      <div className={styles.headerContentWrapper}>
        <Sidebar />
        <Logo variant='header' />
        <Search />
      </div>
    </header>
  )
}
