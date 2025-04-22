'use client'

import * as React from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { twMerge } from 'tailwind-merge'
import {
  ActionLink,
  AuthForm,
  Button,
  Drawer,
  Icon,
  LanguageSelector,
  Logo,
  Navbar,
  NavLink,
  OrderForm,
  Search,
  Sidebar,
} from '~ek/components'
import { useStore, useScreenSize } from '~ek/hooks'
import { LOCALIZED_PATHNAMES, SCREENS } from '~ek/utils'
import type { AuthFormVariant, Language } from '~ek/types'

interface WideScreenHeaderProps {
  screenWidth: number
}

const headerStyles: Readonly<TwClasses> = {
  header: 'h-10 laptop:h-19 bg-gray-1 px-5 laptop:px-15 widescreen:px-25',
  wrapper: 'h-full flex items-center justify-between relative',
  tabHeader: 'flex gap-x-4 mb-8',
  tabActive: 'bg-primary-10 border-primary-5 font-semibold text-primary-1',
  tabContent: '',
  tabSwitcher:
    'w-1/2 h-12 flex items-center justify-center bg-white border border-solid border-tertiary-8 text-lg font-medium text-gray-4',
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
          href='tel:3303'
          label='3303'
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
  const t = useTranslations('buttons')
  const locale = useLocale()
  const {
    clientSlice: { setIsAuthFormDrawerVisible },
    authSlice: { user },
  } = useStore(state => state)

  return (
    <div className={twMerge(styles.wrapper, wideHeaderStyles.wrapper)}>
      {screenWidth < SCREENS.desktop && <Sidebar />}

      <div className={wideHeaderStyles.left}>
        <Logo
          context='header'
          sizes='w-[158px] h-[27px]'
        />

        {screenWidth >= SCREENS.desktop && <Navbar context='header' />}
      </div>
      <div className={wideHeaderStyles.right}>
        <ActionLink
          href='tel:3303'
          label='3303'
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

          {user ? (
            <NavLink
              className={wideHeaderStyles.profileButton}
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
              classes={wideHeaderStyles.profileButton}
              onClick={() => setIsAuthFormDrawerVisible(true)}
            >
              <Icon
                variant='profile-light'
                sizes='w-6 h-6'
              />
              <span>{t('personalAccount')}</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export function Header(): React.ReactElement {
  const { width } = useScreenSize()
  const t = useTranslations('buttons')
  const {
    clientSlice: {
      isClientRendering,
      setClientRendering,
      isAuthFormDrawerVisible,
      setIsAuthFormDrawerVisible,
      isOrderFormDrawerVisible,
      setIsOrderFormDrawerVisible,
    },
    authSlice: { setAuthData, removeAuthData },
  } = useStore(state => state)
  const [selectedAuthForm, setSelectedAuthForm] =
    React.useState<AuthFormVariant>('login')

  React.useEffect(() => {
    const token = localStorage.getItem('token')
      ? JSON.parse(localStorage.getItem('token')!)
      : null
    const user = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')!)
      : null
    const cookies = document.cookie.split('; ').reduce(
      (result, cookie) => {
        const [key, value] = cookie.split('=')
        return { ...result, [key]: value }
      },
      {} as Record<string, string>,
    )

    if (token && user && cookies['token'] === token) {
      setAuthData({
        token,
        user,
      })
    } else {
      removeAuthData()
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    }
  }, [setAuthData, removeAuthData])

  React.useEffect(() => {
    setClientRendering(true)
  }, [setClientRendering])

  const switchActiveTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement
    setSelectedAuthForm(target.dataset.value as AuthFormVariant)
  }

  return (
    <header className={styles.header}>
      {isClientRendering &&
        (width < SCREENS.laptop ? (
          <CompactScreenHeader />
        ) : (
          <WideScreenHeader screenWidth={width} />
        ))}

      <Drawer
        isDrawerVisible={isAuthFormDrawerVisible}
        setIsDrawerVisible={setIsAuthFormDrawerVisible}
      >
        <div className={styles.tabHeader}>
          <Button
            classes={twMerge(
              styles.tabSwitcher,
              selectedAuthForm === 'login' ? styles.tabActive : '',
            )}
            data-value='login'
            onClick={switchActiveTab}
          >
            {t('login')}
          </Button>
          <Button
            classes={twMerge(
              styles.tabSwitcher,
              selectedAuthForm === 'registration' ? styles.tabActive : '',
            )}
            data-value='registration'
            onClick={switchActiveTab}
          >
            {t('register')}
          </Button>
        </div>

        <div className={styles.tabContent}>
          <AuthForm
            variant={selectedAuthForm}
            setSelectedAuthForm={setSelectedAuthForm}
          />
        </div>
      </Drawer>

      <Drawer
        isDrawerVisible={isOrderFormDrawerVisible}
        setIsDrawerVisible={setIsOrderFormDrawerVisible}
      >
        <OrderForm />
      </Drawer>
    </header>
  )
}
