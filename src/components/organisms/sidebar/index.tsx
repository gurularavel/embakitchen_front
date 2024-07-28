'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Button,
  Icon,
  LanguageSelector,
  Navbar,
  SocialContacts,
} from '@ek/components'

interface SidebarProps {}

const sidebarStyles: Readonly<TailwindStyle> = {
  sidebar: 'flex',
  sidebarContent: (isSidebarVisible: unknown) =>
    `p-10 fixed top-0 right-0 bottom-0 left-0 z-10 overflow-y-auto bg-dark-gray-1 origin-top-left transition-all duration-300 ease-in ${(isSidebarVisible as boolean) ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`,
  closeBtnWrapper: 'h-6 mb-6 flex justify-end',
  sidebarBody: '',
  sidebarNavTop: 'mb-6',
  sidebarNavBottom: 'pt-2',
  phone:
    'flex items-center gap-x-2 text-xl font-medium leading-7 text-secondary-4 mb-6',
  profileButton:
    'w-full bg-gray-3 h-11 rounded-lg flex items-center justify-center gap-x-2 text-base font-semibold leading-6 text-light-gray-10 mb-3',
}
const styles: Readonly<StyleRecord> = sidebarStyles as StyleRecord
const getSidebarContentStyles: StyleGetter =
  sidebarStyles.sidebarContent as StyleGetter

export function Sidebar({}: Readonly<SidebarProps>): React.ReactElement {
  const [isSidebarVisible, setIsSidebarVisible] = React.useState<boolean>(false)

  const toggleSidebarVisibility = (shouldBeVisible: boolean): void =>
    setIsSidebarVisible(shouldBeVisible)

  return (
    <aside className={styles.sidebar}>
      <Button onClick={() => toggleSidebarVisibility(true)}>
        <Icon variant='menu' />
      </Button>

      <div className={getSidebarContentStyles(isSidebarVisible)}>
        <div className={styles.closeBtnWrapper}>
          <Button onClick={() => toggleSidebarVisibility(false)}>
            <Icon variant='close' />
          </Button>
        </div>

        <div className={styles.sidebarBody}>
          <div className={styles.sidebarNavTop}>
            <Navbar />
            <SocialContacts layout='horizontal' />
          </div>

          <div className={styles.sidebarNavBottom}>
            <Link
              href='tel:126'
              className={styles.phone}
            >
              <Icon variant='phone' />
              <span>126</span>
            </Link>

            <Button classes={styles.profileButton}>
              <Icon variant='profile' />
              <span>Şəxsi kabinet</span>
            </Button>

            <LanguageSelector />
          </div>
        </div>
      </div>
    </aside>
  )
}
