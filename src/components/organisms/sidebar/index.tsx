'use client'

import React, { useState } from 'react'
import { Button, Icon } from '@ek/components'
import { sidebarStyles } from '@ek/components/organisms/sidebar/sidebar.style'

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
        <h1>Sidebar</h1>
      </div>
    </aside>
  )
}
