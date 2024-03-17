import React from 'react'
import Image from 'next/image'
import { NavbarProps, NavbarItemProps, NavItem } from '@embakitchen/components/navbar/types'
import { styles as navbarStyles } from '@embakitchen/components/navbar/styles'

const styles: Record<string, string> = navbarStyles as Record<string, string>

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

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className={styles.navbar}>
      {navItems.map(item => (
        <NavbarItem
          key={item.id}
          item={item.name}
          dropdown={item.dropdown}
          active={item.active}
        />
      ))}
      <button className={styles.specialOrder}>Özəl sifariş</button>
    </div>
  )
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ item, active, dropdown }) => {
  return (
    <div className={`${styles.navbarItem} ${active ? styles.active : ''}`}>
      <p className={styles.paragraph}>{item}</p>
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
