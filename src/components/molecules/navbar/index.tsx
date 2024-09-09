import Link from 'next/link'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { Button, Dropdown, NavLink } from '~ek/components'
import { NavLinkEntry } from '~ek/types'

type NavbarContext = 'header' | 'footer'

interface FooterNav {
  title: string
  links: Partial<NavLinkEntry>[]
}

interface NavbarProps {
  context: NavbarContext
  classes?: string
}

const navbarStyles: Readonly<TailwindStyle> = {
  header: {
    nav: 'mb-6',
    navItem: 'mb-6',
    navLink: 'text-base font-normal leading-6 text-white',
    highlightedLink: 'text-secondary-4',
    specialOrderBtn:
      'w-[135px] h-11 border border-solid border-gray-4 rounded-lg',
  },
  footer: {
    nav: 'w-full laptop:w-[200px] mb-6 laptop:mb-0',
    title: 'text-sm font-semibold leading-4 text-auxiliary-3 uppercase mb-6',
    navList: '',
    link: 'text-sm font-medium leading-4 text-auxiliary-2 mb-4 last:mb-0',
  },
}
const headerStyles: Readonly<StyleRecord> = navbarStyles.header as StyleRecord
const footerStyles: Readonly<StyleRecord> = navbarStyles.footer as StyleRecord

const headerNavLinks: NavLinkEntry[] = [
  {
    text: 'Mətbəx mebelləri',
    href: '/kitchen-furniture',
  },
  {
    text: 'Mağazalar',
    href: '/stores',
  },
  {
    text: 'Haqqımızda',
    items: [
      {
        text: 'Şirkət haqqında',
        href: '/about/company',
      },
      {
        text: 'Layihələrimiz',
        href: '/about/projects',
      },
      {
        text: 'Partnyorlar',
        href: '/about/partners',
      },
    ],
  },
  {
    text: 'Blog',
    href: '/blog',
  },
  {
    text: 'Kampaniyalar',
    href: '/campaigns',
    isHighlighted: true,
  },
]

const footerNav: FooterNav[] = [
  {
    title: 'ŞİRKƏT',
    links: [
      { text: 'Haqqımızda', href: '/about' },
      { text: 'Mağazalar', href: '/stores' },
      { text: 'Kampaniyalar', href: '/campaigns' },
      { text: 'Blog', href: '/blogs' },
    ],
  },
  {
    title: 'MƏHSULLAR',
    links: [
      { text: 'Legno', href: '/legno' },
      { text: 'Adel Ral', href: '/adel-ral' },
      { text: 'Franchesco Cream', href: '/franchesco-cream' },
      { text: 'Aldo Ray Gray', href: '/aldo-ray-gray' },
    ],
  },
]

const navbars: Record<NavbarContext, ReactComponent> = {
  header: <NavbarHeader />,
  footer: <NavbarFooter />,
}

function NavbarHeader(): ReactComponent {
  const renderDropdown = (link: NavLinkEntry) => (
    <Dropdown
      text={link.text}
      items={link.items}
    />
  )

  const renderNavLink = (link: NavLinkEntry, classes?: string) => (
    <NavLink
      href={link.href as string}
      classes={classes}
    >
      {link.text}
    </NavLink>
  )

  return (
    <ul className={headerStyles.nav}>
      {headerNavLinks.map(link => {
        const navLinkClass = twMerge(
          headerStyles.navLink,
          link.isHighlighted ? headerStyles.highlightedLink : '',
        )

        return (
          <li
            key={`${link.href}${link.text}`}
            className={headerStyles.navItem}
          >
            {!link.items
              ? renderNavLink(link, navLinkClass)
              : renderDropdown(link)}
          </li>
        )
      })}
      <Button
        classes={twMerge(
          headerStyles.navLink,
          headerStyles.highlightedLink,
          headerStyles.specialOrderBtn,
        )}
      >
        Özəl sifariş
      </Button>
    </ul>
  )
}

function NavbarFooter(): ReactComponent {
  return (
    <>
      {footerNav?.map((nav: FooterNav, i: number) => (
        <div
          className={footerStyles.nav}
          key={i}
        >
          <h6 className={footerStyles.title}>{nav.title}</h6>
          <ul className={footerStyles.navList}>
            {nav?.links.map((link: Partial<NavLinkEntry>) => (
              <li
                className={footerStyles.link}
                key={link.text}
              >
                <Link href={link.href as string}>{link.text}</Link>
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
}: Readonly<NavbarProps>): ReactComponent {
  return <nav className={classes ?? ''}>{navbars[context]}</nav>
}
