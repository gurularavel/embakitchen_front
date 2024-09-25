'use client'

import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { Button, Dropdown, NavLink } from '~ek/components'
import type { NavLinkEntry } from '~ek/types'

type NavbarContext = 'header' | 'footer'

interface NavbarProps {
  context: NavbarContext
}

interface FooterNav {
  title: string
  links: Partial<NavLinkEntry>[]
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
      {
        label: 'Partnyorlar',
        href: '/about/partners',
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

const navbarStyles: Readonly<TwClasses> = {
  header: {
    nav: 'h-auto desktop:h-full mb-6 desktop:mb-0 flex flex-col gap-y-6 desktop:flex-row desktop:gap-x-4',
    navItem: 'desktop:last:flex desktop:last:items-center',
    navLink:
      'desktop:h-full desktop:flex desktop:items-center text-base desktop:text-sm font-normal desktop:font-medium text-white desktop:text-nowrap',
    navLinkActive: 'text-secondary-4',
    specialOrderButton:
      'w-[135px] h-11 border border-solid border-gray-4 rounded-lg text-base font-medium text-secondary-4',
  },
}
const navbarHeaderStyles = navbarStyles.header as Readonly<StyleRecord>

const renderDropdown = (link: NavLinkEntry) => (
  <Dropdown
    label={link.label}
    nestedLinks={link.nestedLinks}
  />
)

const renderNavLink = (link: NavLinkEntry, classes?: string) => (
  <NavLink
    href={link.href as string}
    classes={classes}
  >
    {link.label}
  </NavLink>
)

function NavbarHeader(): React.ReactElement {
  const pathname = usePathname()

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
              ? renderNavLink(link, navLinkClass)
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
  return (
    <div>
      <p>Navbar Footer</p>
    </div>
  )
}

export function Navbar({ context }: Readonly<NavbarProps>): React.ReactElement {
  return <nav>{navbars[context]}</nav>
}

// interface NavbarProps { classes?: string }

// const navbarStyles: Readonly<TailwindStyle> = {
//   header: {
//     nav: 'h-auto laptop:h-full flex flex-col laptop:flex-row items-center mb-6 laptop:mb-0',
//   },
//   footer: {
//     nav: 'w-full laptop:w-[200px]',
//     title: 'text-sm font-semibold leading-4 text-auxiliary-3 uppercase mb-6',
//     navList: '',
//     link: 'text-sm font-medium leading-4 text-auxiliary-2 mb-4 last:mb-0',
//   },
// }
// const headerStyles: Readonly<StyleRecord> = navbarStyles.header as StyleRecord
// const footerStyles: Readonly<StyleRecord> = navbarStyles.footer as StyleRecord

// function NavbarFooter(): ReactComponent {
//   return (
//     <>
//       {footerNav?.map((nav: FooterNav, i: number) => (
//         <div
//           className={footerStyles.nav}
//           key={i}
//         >
//           <h6 className={footerStyles.title}>{nav.title}</h6>
//           <ul className={footerStyles.navList}>
//             {nav?.links.map((link: Partial<NavLinkEntry>) => (
//               <li
//                 className={footerStyles.link}
//                 key={link.text}
//               >
//                 <Link href={link.href as string}>{link.text}</Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </>
//   )
// }

// export function Navbar({
//   classes,
// }: Readonly<NavbarProps>): ReactComponent {
//   return <nav className={classes ?? ''}>{navbars[context]}</nav>
// }
