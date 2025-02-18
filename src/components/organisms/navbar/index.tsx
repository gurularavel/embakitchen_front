'use client'

import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { Button, Dropdown, NavLink } from '~ek/components'
import { useStore } from '~ek/hooks'
import type { NavLinkEntry } from '~ek/types'

type NavbarContext = 'header' | 'footer'

interface NavbarProps {
  context: NavbarContext
  classes?: string
  closeMenu?: VoidFunction
}

interface FooterNav {
  title: string
  links: NavLinkEntry['nestedLinks']
}

const navbarStyles: Readonly<Record<NavbarContext, TwClasses>> = {
  header: {
    nav: 'h-auto desktop:h-full mb-6 desktop:mb-0 flex flex-col gap-y-6 desktop:flex-row desktop:gap-x-4',
    navItem: 'desktop:last:flex desktop:last:items-center',
    navLink:
      'desktop:h-full desktop:flex desktop:items-center text-base desktop:text-sm font-normal desktop:font-medium text-white desktop:text-nowrap',
    navLinkActive: 'text-secondary-4',
    specialOrderButton:
      'h-11 px-6 border border-solid border-gray-4 rounded-lg text-base font-medium text-secondary-4',
  },
  footer: {
    nav: 'w-full laptop:w-[200px]',
    title: 'text-sm font-semibold leading-4 text-tertiary-1 uppercase mb-6',
    link: 'text-sm font-medium leading-4 text-tertiary-4 mb-4 last:mb-0',
  },
}
const navbarHeaderStyles = navbarStyles.header as Readonly<StyleRecord>
const navbarFooterStyles = navbarStyles.footer as Readonly<StyleRecord>

const renderDropdown = (link: NavLinkEntry, closeMenu?: VoidFunction) => (
  <Dropdown
    label={link.label}
    nestedLinks={link.nestedLinks}
    closeMenu={closeMenu}
  />
)

const renderNavLink = (
  link: NavLinkEntry,
  className?: string,
  closeMenu?: VoidFunction,
) => (
  <NavLink
    href={link.href!}
    className={className}
    onClick={closeMenu}
  >
    {link.label}
  </NavLink>
)

function NavbarHeader({
  closeMenu,
}: {
  closeMenu?: VoidFunction
}): React.ReactElement {
  const pathname = usePathname()
  const t = useTranslations('buttons')
  const commonNavLinks: NavLinkEntry[] = useTranslations('links').raw('header')
  const {
    clientSlice: {
      setIsAuthFormDrawerVisible,
      setIsOrderFormDrawerVisible,
      setSelectedProduct,
    },
    authSlice: { user },
  } = useStore(state => state)

  const makeCustomOrder = (): void => {
    if (user) {
      setIsOrderFormDrawerVisible(true)
      setSelectedProduct(null)
    } else {
      setIsAuthFormDrawerVisible(true)
    }
  }

  return (
    <ul className={navbarHeaderStyles.nav}>
      {commonNavLinks.map(link => {
        const navLinkClass = twMerge(
          navbarHeaderStyles.navLink,
          pathname === link.href ? navbarHeaderStyles.navLinkActive : '',
        )

        return (
          <li
            key={link.label}
            className={navbarHeaderStyles.navItem}
          >
            {!link.nestedLinks
              ? renderNavLink(link, navLinkClass, closeMenu)
              : renderDropdown(link, closeMenu)}
          </li>
        )
      })}
      <li className={navbarHeaderStyles.navItem}>
        <Button
          classes={navbarHeaderStyles.specialOrderButton}
          onClick={makeCustomOrder}
        >
          {t('customOrder')}
        </Button>
      </li>
    </ul>
  )
}

function NavbarFooter(): React.ReactElement {
  const t = useTranslations('links')
  const footerNav: FooterNav[] = t.raw('footer')

  return (
    <>
      {footerNav?.map((nav: FooterNav, i: number) => (
        <div
          key={i}
          className={navbarFooterStyles.nav}
        >
          <h6 className={navbarFooterStyles.title}>{nav.title}</h6>
          <ul>
            {nav?.links?.map((link: Omit<NavLinkEntry, 'nestedLinks'>) => (
              <li
                key={link.label}
                className={navbarFooterStyles.link}
              >
                {renderNavLink(link, navbarFooterStyles.link)}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}

export function Navbar({
  context,
  classes,
  closeMenu,
}: Readonly<NavbarProps>): React.ReactElement {
  return (
    <nav className={classes ?? ''}>
      {context === 'header' ? (
        <NavbarHeader closeMenu={closeMenu} />
      ) : (
        <NavbarFooter />
      )}
    </nav>
  )
}
