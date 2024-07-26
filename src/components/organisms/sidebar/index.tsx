'use client'

import React, { useState } from 'react'
import { Button, Icon, Navbar } from '@ek/components'
import { sidebarStyles } from '@ek/components/organisms/styles'

const getSidebarContentStyles: StyleGetter =
  sidebarStyles.sidebarContent as StyleGetter
const styles: Readonly<StyleRecord> = sidebarStyles as StyleRecord

interface SidebarProps {}

export function Sidebar({}: Readonly<SidebarProps>): React.ReactElement {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(false)

  const toggleSidebarVisibility = (shouldBeVisible: boolean): void =>
    setIsSidebarVisible(shouldBeVisible)

  return (
    <aside className={styles.container}>
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
      </div>
    </aside>
  )
}
