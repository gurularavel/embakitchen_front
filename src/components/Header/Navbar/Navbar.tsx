import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { navbarStyles } from '@embakitchen/components/Header/Navbar/Navbar.style'
import phone from '/public/assets/icons/phone.svg'
import search from '/public/assets/icons/search.svg'
import profile from '/public/assets/icons/profile.svg'
import downChevron from '/public/assets/icons/down_chevron.svg'

interface Menu {
  text: string
  href: string
  classes?: string
}

const menu: Menu[] = [
  {
    text: 'Mətbəx mebelləri',
    href: '/kitchen-furnitures',
  },
  {
    text: 'Mağazalar',
    href: '/stores',
  },
  {
    text: 'Haqqımızda',
    href: '/about',
  },
  {
    text: 'Blog',
    href: '/blog',
  },
  {
    text: 'Kampaniyalar',
    href: '/campaigns',
    classes: navbarStyles.highlightedLink as string,
  },
  {
    text: 'Özəl sifariş',
    href: '/special-order',
    classes: `${navbarStyles.highlightedLink} ${navbarStyles.specialOrder}`,
  },
]

export const Navbar: React.FC = () => {
  const styles: Dictionary<string> = navbarStyles as Dictionary<string>

  return (
    <nav className={styles.nav}>
      <div>
        <ul className={styles.menu}>
          {menu.map(m => (
            <li key={m.href}>
              <Link
                href={m.href}
                className={`${styles.link} ${m.classes ?? ''}`}
              >
                {m.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul className={styles.options}>
          <li>
            <a
              href='tel:126'
              className={styles.phone}
            >
              <Image
                src={phone}
                alt='call embakitchen'
                className={styles.phoneIcon}
              />
              <span className={styles.phoneNumber}>126</span>
            </a>
          </li>

          <li>
            <button className={styles.searchBtn}>
              <Image
                src={search}
                alt='embakitchen search'
                className={styles.searchIcon}
              />
            </button>
          </li>

          <li className={styles.additionalOptions}>
            <div className={styles.language}>
              <div className={styles.selectedLanguage}>
                <span>Az</span>
                <Image
                  src={downChevron}
                  alt='embakitchen dropdown icon'
                />
              </div>
            </div>

            <div>
              <Link
                href='/profile'
                className={styles.profileLink}
              >
                <Image
                  src={profile}
                  alt='embakitchen profile page'
                  className={styles.profileIcon}
                />
                <span>Şəxsi kabinet</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

// // 'use client'

// // interface DropdownItem {
// //   id: number
// //   name: string
// //   active?: boolean
// // }

// // interface NavbarItemProps {
// //   name: string
// //   active?: boolean
// //   isDropdown?: boolean
// //   items?: DropdownItem[]
// // }

// // interface NavItem {
// //   id: number
// //   name: string
// //   isDropdown?: boolean
// //   items?: DropdownItem[]
// //   active?: boolean
// // }

// // export const navItems: NavItem[] = [
// //   {
// //     id: 1,
// //     name: 'Mətbəx mebelləri',
// //   },
// //   {
// //     id: 2,
// //     name: 'Mağazalar',
// //   },
// //   {
// //     id: 3,
// //     name: 'Haqqımızda',
// //     isDropdown: true,
// //     items: [
// //       {
// //         id: 1,
// //         name: 'Şirkət haqqında',
// //       },
// //       {
// //         id: 2,
// //         name: 'Layihələrimiz',
// //       },
// //       {
// //         id: 3,
// //         name: 'Partnyorlar',
// //       },
// //     ],
// //   },
// //   {
// //     id: 4,
// //     name: 'Blog',
// //   },
// //   {
// //     id: 5,
// //     name: 'Kampaniyalar',
// //     active: true,
// //   },
// // ]

// // export const Navbar: React.FC = () => (
// //   <div className={styles.navbar}>
// //     {navItems.map(item => (
// //       <NavbarItem
// //         key={item.id}
// //         name={item.name}
// //         isDropdown={item.isDropdown}
// //         active={item.active}
// //         items={item.items}
// //       />
// //     ))}
// //     <button className={styles.specialOrder}>Özəl sifariş</button>
// //   </div>
// // )

// // export const NavbarItem: React.FC<NavbarItemProps> = ({
// //   name,
// //   active,
// //   isDropdown,
// //   items,
// // }) => {
// //   const [isRotated, setIsRotated] = useState(false)

// //   return (
// //     <div
// //       className={`${styles.navbarItem} ${active ? styles.active : ''}`}
// //       onClick={() => setIsRotated(!isRotated)}
// //     >
// //       <p className={styles.paragraph}>{name}</p>
// //       {isDropdown ? (
// //         <Image
// //           width={20}
// //           height={20}
// //           alt='arrowdown'
// //           src='/assets/images/arrow-down.svg'
// //           className={isRotated ? 'rotated-180' : ''}
// //         />
// //       ) : null}
// //       {isDropdown && isRotated ? (
// //         <div className={styles.dropdownItems}>
// //           {items?.map(item => (
// //             <div
// //               className={styles.dropdownItem}
// //               key={item.id}
// //             >
// //               <p className={styles.dropdownParagraph}>{item.name}</p>
// //             </div>
// //           ))}
// //         </div>
// //       ) : null}
// //     </div>
// //   )
// // }

// // export const NavbarMobile: React.FC = () => (
// //   <div className={styles.navbarMobile}>
// //     <div className={styles.closeMenu}>
// //       <Image
// //         width={20}
// //         height={20}
// //         alt='arrowdown'
// //         src='/assets/images/cross.svg'
// //       />
// //     </div>
// //     <div className={styles.navbarMobileItem}>
// //       {navItems.map(item => (
// //         <NavbarMobileItem
// //           key={item.id}
// //           name={item.name}
// //           isDropdown={item.isDropdown}
// //           active={item.active}
// //           items={item.items}
// //         />
// //       ))}
// //       <button className={styles.specialOrder}>Özəl sifariş</button>
// //     </div>

// //     <div className={styles.mobileBottom}>
// //       <div>
// //         <a
// //           className={styles.mobileTel}
// //           href='tel:126'
// //         >
// //           <Image
// //             width={30}
// //             height={30}
// //             alt='search'
// //             src='/assets/images/call-calling.svg'
// //           />
// //           126
// //         </a>
// //       </div>
// //       <div className={styles.mobileButtons}>
// //         <button className={styles.mobilePrivateCabinet}>
// //           <Image
// //             width={24}
// //             height={24}
// //             alt='search'
// //             src='/assets/images/profile-circle.svg'
// //           />
// //           Şəxsi kabinet
// //         </button>
// //         <button className={styles.mobileLang}>
// //           Az
// //           <Image
// //             width={24}
// //             height={24}
// //             alt='search'
// //             src='/assets/images/arrow-down.svg'
// //           />
// //         </button>
// //       </div>
// //     </div>
// //   </div>
// // )

// // export const NavbarMobileItem: React.FC<NavbarItemProps> = ({
// //   name,
// //   active,
// //   isDropdown,
// //   items,
// // }) => {
// //   const [isRotated, setIsRotated] = useState(false)

// //   return (
// //     <div
// //       className={`${styles.navbarItem} ${active ? styles.active : ''}`}
// //       onClick={() => setIsRotated(!isRotated)}
// //     >
// //       <p className={active ? `${styles.active}` : `${styles.mobileParagraph}`}>
// //         {name}
// //         {isDropdown && isRotated ? (
// //           <div className={styles.mobileDropdownItems}>
// //             {items?.map(item => {
// //               return (
// //                 <div
// //                   className={styles.mobileDropdownItem}
// //                   key={item.id}
// //                 >
// //                   <p className={styles.mobileParagraph}>{item.name}</p>
// //                 </div>
// //               )
// //             })}
// //           </div>
// //         ) : null}
// //       </p>
// //       {isDropdown ? (
// //         <Image
// //           width={20}
// //           height={20}
// //           alt='arrowdown'
// //           src='/assets/images/arrow-down.svg'
// //           className={isRotated ? 'rotated-180 mt-[-110px]' : ''}
// //         />
// //       ) : null}
// //     </div>
// //   )
// // }
