'use client'

import { usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import { twMerge } from 'tailwind-merge'
import { Button, Dropdown, NavLink } from '~ek/components'
import type { Language, NavLinkEntry } from '~ek/types'

type NavbarContext = 'header' | 'footer'

interface NavbarProps {
  context: NavbarContext
  classes?: string
}

interface FooterNav {
  title: string
  links: NavLinkEntry['nestedLinks']
}

const navbars: Readonly<Record<NavbarContext, React.ReactElement>> = {
  header: <NavbarHeader />,
  footer: <NavbarFooter />,
}

const commonNavLinks: NavLinkEntry[] = [
  {
    label: 'Mətbəx mebelləri',
    href: '/kitchen-furniture',
  },
  {
    label: 'Mağazalar',
    href: '/stores',
  },
  {
    label: 'Haqqımızda',
    nestedLinks: [
      {
        label: 'Şirkət haqqında',
        href: '/about/company',
      },
      {
        label: 'Layihələrimiz',
        href: '/about/projects',
      },
    ],
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'Kampaniyalar',
    href: '/campaigns',
  },
]

const footerNav: FooterNav[] = [
  {
    title: 'ŞİRKƏT',
    links: [
      { label: 'Haqqımızda', href: '/about' },
      { label: 'Mağazalar', href: '/stores' },
      { label: 'Kampaniyalar', href: '/campaigns' },
      { label: 'Blog', href: '/blogs' },
    ],
  },
  {
    title: 'MƏHSULLAR',
    links: [
      { label: 'Legno', href: '/legno' },
      { label: 'Adel Ral', href: '/adel-ral' },
      { label: 'Franchesco Cream', href: '/franchesco-cream' },
      { label: 'Aldo Ray Gray', href: '/aldo-ray-gray' },
    ],
  },
]

const navbarStyles: Readonly<Record<NavbarContext, TwClasses>> = {
  header: {
    nav: 'h-auto desktop:h-full mb-6 desktop:mb-0 flex flex-col gap-y-6 desktop:flex-row desktop:gap-x-4',
    navItem: 'desktop:last:flex desktop:last:items-center',
    navLink:
      'desktop:h-full desktop:flex desktop:items-center text-base desktop:text-sm font-normal desktop:font-medium text-white desktop:text-nowrap',
    navLinkActive: 'text-secondary-4',
    specialOrderButton:
      'w-[135px] h-11 border border-solid border-gray-4 rounded-lg text-base font-medium text-secondary-4',
  },
  footer: {
    nav: 'w-full laptop:w-[200px]',
    title: 'text-sm font-semibold leading-4 text-tertiary-1 uppercase mb-6',
    link: 'text-sm font-medium leading-4 text-tertiary-4 mb-4 last:mb-0',
  },
}
const navbarHeaderStyles = navbarStyles.header as Readonly<StyleRecord>
const navbarFooterStyles = navbarStyles.footer as Readonly<StyleRecord>

const renderDropdown = (link: NavLinkEntry) => (
  <Dropdown
    label={link.label}
    nestedLinks={link.nestedLinks}
  />
)

const renderNavLink = (
  link: NavLinkEntry,
  locale: Language,
  className?: string,
) => (
  <NavLink
    href={link.href!}
    locale={locale}
    className={className}
  >
    {link.label}
  </NavLink>
)

function NavbarHeader(): React.ReactElement {
  const pathname = usePathname()
  const locale = useLocale() as Language

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
              ? renderNavLink(link, locale, navLinkClass)
              : renderDropdown(link)}
          </li>
        )
      })}
      <li className={navbarHeaderStyles.navItem}>
        <Button classes={navbarHeaderStyles.specialOrderButton}>
          Özəl sifariş
        </Button>
      </li>
    </ul>
  )
}

function NavbarFooter(): React.ReactElement {
  const locale = useLocale() as Language

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
                {renderNavLink(link, locale, navbarFooterStyles.link)}
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
}: Readonly<NavbarProps>): React.ReactElement {
  return <nav className={classes ?? ''}>{navbars[context]}</nav>
}
