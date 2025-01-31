'use client'

import * as React from 'react'
import { useLocale, useTranslations } from 'next-intl'
import {
  ActionLink,
  Button,
  Icon,
  LanguageSelector,
  Navbar,
  NavLink,
  SocialContacts,
} from '~ek/components'
import { LOCALIZED_PATHNAMES, updatePrimitiveState } from '~ek/utils'
import { useStore } from '~ek/hooks'
import type { Language } from '~ek/types'

const sidebarStyles: Readonly<TwClasses> = {
  sidebar:
    'w-auto mobile:w-[90px] laptop:w-[269px] h-full flex items-center relative z-20',
  menuIcon: 'w-6 h-6',
  sidebarContent: (isVisible: unknown) =>
    `bg-gray-1 p-10 overflow-y-auto fixed top-0 right-0 bottom-0 left-0 transition-all duration-300 ease-in ${(isVisible as boolean) ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`,
  closeSidebar: 'h-6 mb-6 flex justify-end',
  closeIcon: 'w-4 h-4',
  sidebarBody: '',
  socialContacts: 'mb-6',
  phone: 'mb-6 pt-2 mobile:pt-3.5',
  options:
    'flex flex-col mobile:flex-row gap-y-3 mobile:gap-y-0 gap-x-0 mobile:gap-x-6',
  profileButton:
    'w-full h-11 bg-gray-3 rounded-lg flex mobile:flex-1 gap-x-2 justify-center items-center text-base font-semibold text-gray-10',
}
const styles = sidebarStyles as Readonly<StyleRecord>
const getSidebarContentStyles: StyleGetter =
  sidebarStyles.sidebarContent as StyleGetter

export function Sidebar(): React.ReactElement {
  const [isVisible, setIsVisible] = React.useState<boolean>(false)
  const t = useTranslations('buttons')
  const locale = useLocale()
  const {
    clientSlice: { setIsAuthFormDrawerVisible },
    authSlice: { user },
  } = useStore(state => state)

  React.useEffect(() => {
    document.body.style.overflow = isVisible ? 'hidden' : 'auto'
  }, [isVisible])

  return (
    <aside className={styles.sidebar}>
      <Button onClick={() => updatePrimitiveState(true, setIsVisible)}>
        <Icon
          variant='menu'
          sizes={styles.menuIcon}
        />
      </Button>

      <div className={getSidebarContentStyles(isVisible)}>
        <div className={styles.closeSidebar}>
          <Button onClick={() => updatePrimitiveState(false, setIsVisible)}>
            <Icon
              variant='close-light'
              sizes={styles.closeIcon}
            />
          </Button>
        </div>

        <div className={styles.sidebarBody}>
          <Navbar context='header' />

          <SocialContacts
            layout='horizontal'
            colorScheme='light'
            gap={12}
            classes={styles.socialContacts}
          />

          <ActionLink
            href='tel:126'
            label='126'
            actionLinkIcon={{ variant: 'phone', sizes: 'w-[30px] h-[30px]' }}
            gap={8}
            classes={styles.phone}
          />

          <div className={styles.options}>
            {user ? (
              <NavLink
                className={styles.profileButton}
                href={LOCALIZED_PATHNAMES['/profile'][locale as Language]}
              >
                <Icon
                  variant='profile-light'
                  sizes='w-6 h-6'
                />
                <span>{t('personalAccount')}</span>
              </NavLink>
            ) : (
              <Button
                classes={styles.profileButton}
                onClick={() => setIsAuthFormDrawerVisible(true)}
              >
                <Icon
                  variant='profile-light'
                  sizes='w-6 h-6'
                />
                <span>{t('personalAccount')}</span>
              </Button>
            )}

            <LanguageSelector
              context='sidebar'
              dropdownClasses='bottom-12 border border-solid border-gray-4'
            />
          </div>
        </div>
      </div>
    </aside>
  )
}
