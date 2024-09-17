'use client'

import * as React from 'react'
import { ActionLink, Logo, Search, Sidebar } from '~ek/components'
import { useScreenSize } from '~ek/hooks'
import { WIDE_SCREEN_HEADER_BREAKPOINT } from '~ek/utils'

const headerStyles: Readonly<TwClasses> = {
  header: 'h-10 laptop:h-19 bg-gray-1 px-5 laptop:px-15 widescreen:px-25',
  wrapper: 'h-full flex items-center justify-between relative',
  compact: {
    options: 'w-6 mobile:w-[90px] h-full flex items-center gap-x-4',
    phone: 'w-[50px] h-full hidden mobile:flex gap-x-2 text-sm font-medium',
  },
  wide: {},
}
const styles = headerStyles as Readonly<StyleRecord>
const compactHeaderStyles = headerStyles.compact as Readonly<StyleRecord>
const wideHeaderStyles = headerStyles.wide as Readonly<StyleRecord>

function CompactScreenHeader(): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <Logo
        context='header'
        sizes='w-25 h-[17px] laptop:w-[158px] laptop:h-[27px]'
      />
      <div className={compactHeaderStyles.options}>
        <ActionLink
          href='tel:126'
          label='126'
          actionLinkIcon={{ variant: 'phone', sizes: 'w-5 h-5' }}
          gap={8}
          classes={compactHeaderStyles.phone}
        />

        <Search />
      </div>
    </div>
  )
}

function WideScreenHeader(): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <p>Wide screen header</p>
    </div>
  )
}

export function Header(): React.ReactElement {
  const { width } = useScreenSize()
  const [isClient, setIsClient] = React.useState<boolean>(false)

  React.useEffect(() => setIsClient(true), [])

  return (
    <header className={styles.header}>
      {isClient &&
        (width < WIDE_SCREEN_HEADER_BREAKPOINT ? (
          <CompactScreenHeader />
        ) : (
          <WideScreenHeader />
        ))}
    </header>
  )
}

//   import { Navbar } from '~ek/components'
//   compact: {
//     header: 'h-full flex items-center justify-between laptop:hidden relative',
//   },
//   largeScreen: {
//     header: 'hidden laptop:flex',
//   },
