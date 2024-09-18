'use client'

import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { Button, Dropdown, NavLink } from '~ek/components'
import type { NavLinkEntry } from '~ek/types'

type NavbarContext = 'header' | 'sidebar' | 'footer'

interface NavbarProps {
  context: NavbarContext
}

const navbars: Readonly<Record<NavbarContext, React.ReactElement>> = {
  header: <NavbarHeader />,
  sidebar: <NavbarSidebar />,
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

const navbarStyles: Readonly<TwClasses> = {
  sidebar: {
    navItem: 'mb-6',
    navLink: 'text-base font-normal text-white',
    navLinkActive: 'text-secondary-4',
    specialOrderButton:
      'w-[135px] h-11 border border-solid border-gray-4 rounded-lg text-base font-medium text-secondary-4',
  },
}
const navbarSidebarStyles = navbarStyles.sidebar as Readonly<StyleRecord>

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
    <ul>
      {commonNavLinks.map(link => {
        const navLinkClass = twMerge(
          navbarSidebarStyles.navLink,
          pathname === link.href ? navbarSidebarStyles.navLinkActive : '',
        )

        return (
          <li
            key={link.label}
            className={navbarSidebarStyles.navItem}
          >
            {!link.nestedLinks
              ? renderNavLink(link, navLinkClass)
              : renderDropdown(link)}
          </li>
        )
      })}

      <li className={navbarSidebarStyles.navItem}>
        <Button classes={navbarSidebarStyles.specialOrderButton}>
          Özəl sifariş
        </Button>
      </li>
    </ul>
  )
}

function NavbarSidebar(): React.ReactElement {
  const pathname = usePathname()

  return (
    <ul>
      {commonNavLinks.map(link => {
        const navLinkClass = twMerge(
          navbarSidebarStyles.navLink,
          pathname === link.href ? navbarSidebarStyles.navLinkActive : '',
        )

        return (
          <li
            key={link.label}
            className={navbarSidebarStyles.navItem}
          >
            {!link.nestedLinks
              ? renderNavLink(link, navLinkClass)
              : renderDropdown(link)}
          </li>
        )
      })}

      <li className={navbarSidebarStyles.navItem}>
        <Button classes={navbarSidebarStyles.specialOrderButton}>
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

// interface FooterNav {
//   title: string
//   links: Partial<NavLinkEntry>[]
// }

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

// const footerNav: FooterNav[] = [
//   {
//     title: 'ŞİRKƏT',
//     links: [
//       { text: 'Haqqımızda', href: '/about' },
//       { text: 'Mağazalar', href: '/stores' },
//       { text: 'Kampaniyalar', href: '/campaigns' },
//       { text: 'Blog', href: '/blogs' },
//     ],
//   },
//   {
//     title: 'MƏHSULLAR',
//     links: [
//       { text: 'Legno', href: '/legno' },
//       { text: 'Adel Ral', href: '/adel-ral' },
//       { text: 'Franchesco Cream', href: '/franchesco-cream' },
//       { text: 'Aldo Ray Gray', href: '/aldo-ray-gray' },
//     ],
//   },
// ]

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
