'use client'

import * as React from 'react'
import {
  ActionLink,
  Button,
  Icon,
  LanguageSelector,
  Navbar,
  SocialContacts,
} from '~ek/components'

interface SidebarProps {}

const sidebarStyles: Readonly<TailwindStyle> = {
  sidebar: '',
  sidebarTogglerBtn: '',
  sidebarTogglerIcon: '', // w-full h-full or w-6 h-6
  sidebarContent: (isSidebarVisible: unknown) =>
    `bg-gray-1 fixed top-0 right-0 bottom-0 left-0 p-10 transition-all duration-300 ease-in ${(isSidebarVisible as boolean) ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`, // overflow-y-auto z-10
  close: ' h-6 mb-6 flex justify-end',
  closeBtn: '',
  closeIcon: 'w-4 h-4',
  socialContacts: 'mb-6',
  phone: 'mb-6',
  options: 'flex flex-col gap-y-3',
  profileButton:
    'w-full h-11 bg-gray-3 rounded-lg flex justify-center items-center gap-x-2 text-base font-semibold text-gray-10',

  // sidebar: 'w-6 h-6',
  // sidebar: 'w-6 mobile:w-[90px] flex items-center laptop:hidden',
  // sidebarBody: 'flex flex-col gap-y-6',
  // sidebarBodyTop: '',
  // sidebarBodyBottom: 'pt-2',
  // phone: 'relative z-10',
  // options: 'mobile:flex-row mobile:gap-y-0 gap-x-0 mobile:gap-x-6',
  // profileButton: 'mobile:flex-1',
}
const styles: Readonly<StyleRecord> = sidebarStyles as StyleRecord
const getSidebarContentStyles: StyleGetter =
  sidebarStyles.sidebarContent as StyleGetter

export function Sidebar({}: Readonly<SidebarProps>): ReactComponent {
  const [isSidebarVisible, setIsSidebarVisible] = React.useState<boolean>(false)

  React.useEffect(() => {
    document.body.style.overflow = isSidebarVisible ? 'hidden' : 'visible'
  }, [isSidebarVisible])

  const sidebarVisibilityHandler = (shouldBeVisible: boolean): void =>
    setIsSidebarVisible(shouldBeVisible)

  return (
    <aside
      className={styles.sidebar}
      style={{ border: '2px solid green' }}
    >
      <Button
        classes={styles.sidebarTogglerBtn}
        onClick={() => sidebarVisibilityHandler(true)}
      >
        <Icon
          variant='menu'
          classes={styles.sidebarTogglerIcon}
        />
      </Button>

      <div className={getSidebarContentStyles(isSidebarVisible)}>
        <div className={styles.close}>
          <Button
            classes={styles.closeButton}
            onClick={() => sidebarVisibilityHandler(false)}
          >
            <Icon
              variant='close'
              classes={styles.closeIcon}
            />
          </Button>
        </div>

        <div className={styles.sidebarBody}>
          <SocialContacts
            layout='horizontal'
            theme='light'
            gap={3}
            classes={styles.socialContacts}
          />

          <ActionLink
            href='tel:126'
            text='126'
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

      {/* <div className={styles.sidebarBody}>
          <div className={styles.sidebarBodyTop}>
            <Navbar context='header' />
          </div>
        </div> */}
    </aside>
  )
}
