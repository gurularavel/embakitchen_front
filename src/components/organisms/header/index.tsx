import * as React from 'react'
import { ActionLink, Logo, Navbar, Search, Sidebar } from '~ek/components'

interface HeaderProps {}

const headerStyles: Readonly<TailwindStyle> = {
  header: 'w-full h-10 laptop:h-19 bg-gray-1 px-5',
  compact: {
    header: 'h-full flex items-center justify-between laptop:hidden relative',
    options: 'w-6 mobile:w-[90px] flex items-center gap-x-4',
    phone: 'w-[50px] hidden mobile:flex gap-x-2 text-sm font-medium',
  },
  largeScreen: {
    header: 'hidden laptop:flex',
  },
}
const styles: Readonly<StyleRecord> = headerStyles as StyleRecord
const compactHeaderStyles: Readonly<StyleRecord> =
  headerStyles.compact as StyleRecord
const largeScreenHeaderStyles: Readonly<StyleRecord> =
  headerStyles.largeScreen as StyleRecord

function CompactHeader(): ReactComponent {
  return (
    <div className={compactHeaderStyles.header}>
      <Sidebar />
      <Logo variant='header' />
      <div className={compactHeaderStyles.options}>
        <ActionLink
          href='tel:126'
          text='126'
          iconVariant='phone'
          gap={2}
          classes={compactHeaderStyles.phone}
          iconSize='w-5 h-5'
        />

        <Search />
      </div>
    </div>
  )
}

function LargeScreenHeader(): ReactComponent {
  return <div className={largeScreenHeaderStyles.header}>Laptop Header</div>
}

export function Header({}: Readonly<HeaderProps>): ReactComponent {
  return (
    <header className={styles.header}>
      <CompactHeader />
      <LargeScreenHeader />
    </header>
  )
}
