'use client'

import * as React from 'react'
import {
  Button,
  Icon,
  LanguageSelector,
  Navbar,
  PhoneLink,
  SocialContacts,
} from '~ek/components'

interface SidebarProps {}

const sidebarStyles: Readonly<TailwindStyle> = {
  sidebar: 'flex items-center', // w-[90px]
  menuIcon: 'w-6 h-6',
  sidebarContent: (isSidebarVisible: unknown) =>
    `p-10 bg-gray-1 fixed top-0 right-0 bottom-0 left-0 transition-all duration-300 ease-in ${(isSidebarVisible as boolean) ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`,
  closeButton: 'h-6 mb-6 flex justify-end',
  closeIcon: 'w-4 h-4',
  sidebarBody: 'flex flex-col gap-y-6',
  sidebarBodyTop: '',
  sidebarBodyBottom: 'pt-2',
  phone: 'mb-6 relative z-10',
  options:
    'flex flex-col mobile:flex-row gap-y-3 mobile:gap-y-0 gap-x-0 mobile:gap-x-6',
  profileButton:
    'w-full h-11 mobile:flex-1 bg-gray-3 rounded-lg flex justify-center items-center gap-x-2 text-base font-semibold text-gray-10',
}
const styles: Readonly<StyleRecord> = sidebarStyles as StyleRecord
const getSidebarContentStyles: StyleGetter =
  sidebarStyles.sidebarContent as StyleGetter

// sidebarContent: (isSidebarVisible: unknown) => z-10 overflow-y-auto

export function Sidebar({}: Readonly<SidebarProps>): ReactComponent {
  const [isSidebarVisible, setIsSidebarVisible] = React.useState<boolean>(false)

  const sidebarVisibilityHandler = (shouldBeVisible: boolean): void =>
    setIsSidebarVisible(shouldBeVisible)

  return (
    <aside className={styles.sidebar}>
      <Button onClick={() => sidebarVisibilityHandler(true)}>
        <Icon
          variant='menu'
          classes={styles.menuIcon}
        />
      </Button>

      <div className={getSidebarContentStyles(isSidebarVisible)}>
        <div className={styles.closeButton}>
          <Button onClick={() => sidebarVisibilityHandler(false)}>
            <Icon
              variant='close'
              classes={styles.closeIcon}
            />
          </Button>
        </div>

        <div className={styles.sidebarBody}>
          <div className={styles.sidebarBodyTop}>
            <Navbar />
            <SocialContacts
              layout='horizontal'
              gap={3}
            />
          </div>

          <div className={styles.sidebarBodyBottom}>
            <PhoneLink
              href='tel:126'
              phone='126'
              iconVariant='phone'
              gap={2}
              classes={styles.phone}
            />

            <div className={styles.options}>
              <Button classes={styles.profileButton}>
                <Icon variant='profile' />
                <span>Şəxsi kabinet</span>
              </Button>

              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
