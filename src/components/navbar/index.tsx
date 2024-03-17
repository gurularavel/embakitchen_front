import React from 'react'
import Image from 'next/image'
import { INavbarProps, INavbarItemProps } from '@embakitchen/components/navbar/types'
import { styles } from '@embakitchen/components/navbar/styles'

type NavItem = {
  id: number
  name: string
  dropdown?: boolean
  active?: boolean
}

export const navItems: NavItem[] = [
  {
    id: 1,
    name: 'Mətbəx mebelləri',
  },
  {
    id: 2,
    name: 'Mağazalar',
  },
  {
    id: 3,
    name: 'Haqqımızda',
    dropdown: true,
  },
  {
    id: 4,
    name: 'Blog',
  },
  {
    id: 5,
    name: 'Kampaniyalar',
    active: true,
  },
]

export const Navbar: React.FC<INavbarProps> = () => {
  const navbarStyles: Record<string, string> = styles as Record<string, string>

  return (
    <div className={navbarStyles.navbar}>
      {navItems.map(item => (
        <NavbarItem
          key={item.id}
          item={item.name}
          dropdown={item.dropdown}
          active={item.active}
        />
      ))}
      <button className={navbarStyles.specialOrder}>Özəl sifariş</button>
    </div>
  )
}

export const NavbarItem: React.FC<INavbarItemProps> = ({ item, active, dropdown }) => {
  const navbarItemStyles: Record<string, string> = styles as Record<string, string>

  return (
    <div className={`${navbarItemStyles.navbarItem} ${active ? navbarItemStyles.active : ''}`}>
      <p className={navbarItemStyles.paragraph}>{item}</p>
      {dropdown ? (
        <Image
          width={20}
          height={20}
          alt='arrowdown'
          src='/assets/images/arrow-down.svg'
        />
      ) : null}
    </div>
  )
}
