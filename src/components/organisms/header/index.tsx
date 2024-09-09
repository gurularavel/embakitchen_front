import * as React from 'react'
import { ActionLink, Logo, Navbar, Search, Sidebar } from '~ek/components'

interface HeaderProps {}

const headerStyles: Readonly<TailwindStyle> = {
  header: 'w-full h-10 bg-gray-1 px-5',
  wrapper: 'relative h-full flex items-center justify-between',
  options: 'w-[90px] flex items-center gap-x-4',
  phone: 'w-[50px] hidden mobile:flex gap-x-2 text-sm font-medium',
}
const styles: Readonly<StyleRecord> = headerStyles as StyleRecord

export function Header({}: Readonly<HeaderProps>): ReactComponent {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Sidebar />
        <Logo variant='header' />
        <Navbar context='header' />
        <div className={styles.options}>
          <ActionLink
            href='tel:126'
            text='126'
            iconVariant='phone'
            gap={2}
            classes={styles.phone}
            iconSize='w-5 h-5'
          />

          <Search />
        </div>
      </div>
    </header>
  )
}
