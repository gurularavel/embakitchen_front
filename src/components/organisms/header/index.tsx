import * as React from 'react'
import { ActionLink, Logo, Navbar, Search, Sidebar } from '~ek/components'

interface HeaderProps {}

const headerStyles: Readonly<TailwindStyle> = {
  header: 'w-full h-10 laptop:h-19 bg-gray-1 px-5',
  headerMobile:
    'h-full flex items-center justify-between laptop:hidden relative',
  // options: 'w-6 mobile:w-[90px] flex items-center gap-x-4',
  // phone: 'w-[50px] hidden mobile:flex gap-x-2 text-sm font-medium',
}
const styles: Readonly<StyleRecord> = headerStyles as StyleRecord

export function Header({}: Readonly<HeaderProps>): ReactComponent {
  return (
    <header
      className={styles.header}
      style={{ border: '2px solid red' }}
    >
      <div className={styles.headerMobile}>
        <Sidebar />
        <Logo variant='header' />
        <Search />
      </div>

      {/* <div className={styles.wrapper}>
        <Sidebar />
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
      </div> */}
    </header>
  )
}
