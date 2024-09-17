'use client'

import * as React from 'react'
import { Logo, Search, Sidebar } from '~ek/components'
import { useScreenSize } from '~ek/hooks'
import { WIDE_SCREEN_HEADER_BREAKPOINT } from '~ek/utils'

const headerStyles: Readonly<TwClasses> = {
  header: 'h-10 laptop:h-19 bg-gray-1 px-5 laptop:px-15 widescreen:px-25',
  wrapper: 'h-full flex items-center justify-between',
}
const styles = headerStyles as Readonly<StyleRecord>

function CompactScreenHeader(): React.ReactElement {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <Logo
        context='header'
        sizes='w-25 h-[17px] laptop:w-[158px] laptop:h-[27px]'
      />
      <Search />
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

// import { ActionLink, Navbar } from '~ek/components'

// const headerStyles: Readonly<TailwindStyle> = {
//   compact: {
//     header: 'h-full flex items-center justify-between laptop:hidden relative',
//     options: 'w-6 mobile:w-[90px] flex items-center gap-x-4',
//     phone: 'w-[50px] hidden mobile:flex gap-x-2 text-sm font-medium',
//   },
//   largeScreen: {
//     header: 'hidden laptop:flex',
//   },
// }
// const compactHeaderStyles: Readonly<StyleRecord> =
//   headerStyles.compact as StyleRecord
// const largeScreenHeaderStyles: Readonly<StyleRecord> =
//   headerStyles.largeScreen as StyleRecord

// function CompactHeader(): ReactComponent {
//   return (
//     <div className={compactHeaderStyles.header}>
//       <Sidebar />
//       <Logo variant='header' />
//       <div className={compactHeaderStyles.options}>
//         <ActionLink
//           href='tel:126'
//           text='126'
//           iconVariant='phone'
//           gap={2}
//           classes={compactHeaderStyles.phone}
//           iconSize='w-5 h-5'
//         />

//         <Search />
//       </div>
//     </div>
//   )
// }

// function LargeScreenHeader(): ReactComponent {
//   return <div className={largeScreenHeaderStyles.header}>Laptop Header</div>
// }
