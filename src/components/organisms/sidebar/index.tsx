'use client'

import * as React from 'react'
import { Button, Icon, Navbar, SocialContacts } from '@ek/components'

interface SidebarProps {}

const sidebarStyles: Readonly<TailwindStyle> = {
  sidebar: 'flex',
  sidebarContent: (isSidebarVisible: unknown) =>
    `p-10 fixed top-0 right-0 bottom-0 left-0 z-10 bg-dark-gray-1 origin-top-left transition-all duration-300 ease-in ${(isSidebarVisible as boolean) ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`,
  closeBtnWrapper: 'h-6 mb-6 flex justify-end',
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

        <Navbar />
        <SocialContacts layout='horizontal' />
      </div>
    </aside>
  )
}
