import * as React from 'react'
import { twMerge } from 'tailwind-merge'
import { Button, Dropdown, NavLink } from '~ek/components'
import { NavLinkEntry } from '~ek/types'

interface NavProps {}

const menuStyles: Readonly<TailwindStyle> = {
  nav: '',
  navItem: 'mb-6',
  navLink: 'text-base font-normal leading-6 text-white',
  highlightedLink: 'text-secondary-4',
  specialOrderBtn:
    'w-[135px] h-11 border border-solid border-gray-4 rounded-lg',
}
const styles: Readonly<StyleRecord> = menuStyles as StyleRecord

const navLinks: NavLinkEntry[] = [
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

export function Nav({}: Readonly<NavProps>): ReactComponent {
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
    <ul className={styles.nav}>
      {navLinks.map(link => {
        const navLinkClass = twMerge(
          styles.navLink,
          link.isHighlighted ? styles.highlightedLink : '',
        )

        return (
          <li
            key={`${link.href}${link.text}`}
            className={styles.navItem}
          >
            {!link.items
              ? renderNavLink(link, navLinkClass)
              : renderDropdown(link)}
          </li>
        )
      })}
      <Button
        classes={twMerge(
          styles.navLink,
          styles.highlightedLink,
          styles.specialOrderBtn,
        )}
      >
        Özəl sifariş
      </Button>
    </ul>
  )
}
