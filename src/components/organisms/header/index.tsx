'use client'

import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import {
  ActionLink,
  Button,
  Icon,
  LanguageSelector,
  Logo,
  Navbar,
  Search,
  Sidebar,
} from '~ek/components'
import { useScreenSize } from '~ek/hooks'
import { SCREENS } from '~ek/utils'

interface WideScreenHeaderProps {
  screenWidth: number
}

const headerStyles: Readonly<TwClasses> = {
  header: 'h-10 laptop:h-19 bg-gray-1 px-5 laptop:px-15 widescreen:px-25',
  wrapper: 'h-full flex items-center justify-between relative',
  compact: {
    options: 'w-6 mobile:w-[90px] h-full flex items-center gap-x-4',
    phone: 'w-[50px] h-full hidden mobile:flex gap-x-2 text-sm font-medium',
  },
  wide: {
    wrapper: 'desktop:gap-x-[33px]',
    left: 'h-full flex gap-x-[70px]',
    right: 'w-auto min-w-[269px] h-full flex items-center gap-x-5',
    options: 'h-full flex gap-x-3',
    languageSelectorButton: 'w-[67px]',
    languageSelectorDropdown: 'top-full origin-top',
    profileButton:
      'w-[190px] h-11 my-auto bg-gray-3 rounded-lg flex gap-x-2 justify-center items-center text-base font-semibold text-gray-10',
  },
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
        sizes='w-25 h-[17px]'
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

function WideScreenHeader({
  screenWidth,
}: Readonly<WideScreenHeaderProps>): React.ReactElement {
  return (
    <div className={twMerge(styles.wrapper, wideHeaderStyles.wrapper)}>
      {screenWidth < SCREENS.desktop && <Sidebar />}

      <div className={wideHeaderStyles.left}>
        <Logo
          context='header'
          sizes='w-[158px] h-[27px]'
        />

        {screenWidth >= SCREENS.desktop && (
          <Navbar
            context='header'
            layout='horizontal'
            gap={16}
          />
        )}
      </div>
      <div className={wideHeaderStyles.right}>
        <ActionLink
          href='tel:126'
          label='126'
          actionLinkIcon={{ variant: 'phone', sizes: 'w-[30px] h-[30px]' }}
          gap={8}
        />

        <Search />

        <div className={wideHeaderStyles.options}>
          <LanguageSelector
            context='header'
            classes={wideHeaderStyles.languageSelectorButton}
            dropdownClasses={wideHeaderStyles.languageSelectorDropdown}
          />

          <Button classes={wideHeaderStyles.profileButton}>
            <Icon
              variant='profile'
              sizes='w-6 h-6'
            />
            <span>Şəxsi kabinet</span>
          </Button>
        </div>
      </div>
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
        (width < SCREENS.laptop ? (
          <CompactScreenHeader />
        ) : (
          <WideScreenHeader screenWidth={width} />
        ))}
    </header>
  )
}
