'use client'

import * as React from 'react'
import { Button, Icon } from '~ek/components'

interface DrawerProps {
  isDrawerVisible: boolean
  setIsDrawerVisible: (isDrawerVisible: boolean) => void
  children: React.ReactNode
}

const drawerStyles: Readonly<TwClasses> = {
  drawer: (isDrawerVisible: unknown) =>
    `fixed top-0 right-0 bottom-0 left-0 z-20 transition-opacity duration-50 ${(isDrawerVisible as boolean) ? 'opacity-100 visible' : 'opacity-0 invisible'}`,
  overlay: 'absolute top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.5)]',
  closeDrawer: 'h-6 flex justify-end mb-6',
  closeDrawerIcon: 'w-6 h-6',
  content: (isDrawerVisible: unknown) =>
    `w-full tablet:w-[484px] h-screen bg-white p-8 absolute top-0 right-0 bottom-0 transition-transform duration-300 overflow-y-auto ${(isDrawerVisible as boolean) ? 'translate-x-0' : 'translate-x-full'}`,
}
const styles = drawerStyles as Readonly<StyleRecord>
const getDrawerStyles = drawerStyles.drawer as StyleGetter
const getContentStyles = drawerStyles.content as StyleGetter

export function Drawer({
  isDrawerVisible,
  setIsDrawerVisible,
  children,
}: Readonly<DrawerProps>): React.ReactElement {
  React.useEffect(() => {
    document.body.style.overflowY = isDrawerVisible ? 'hidden' : 'visible'
  }, [isDrawerVisible])

  return (
    <div className={getDrawerStyles(isDrawerVisible)}>
      <div
        className={styles.overlay}
        onClick={() => setIsDrawerVisible(false)}
      ></div>

      <div className={getContentStyles(isDrawerVisible)}>
        <div className={styles.closeDrawer}>
          <Button onClick={() => setIsDrawerVisible(false)}>
            <Icon
              variant='close-dark'
              sizes={styles.closeDrawerIcon}
            />
          </Button>
        </div>

        {children}
      </div>
    </div>
  )
}
