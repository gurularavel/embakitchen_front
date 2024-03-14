import React from 'react'
import { INavbarProps, INavbarItemProps } from '@embakitchen/components/navbar/types'
import { styles } from '@embakitchen/components/navbar/styles'
import Image from 'next/image'

export const Navbar: React.FC<INavbarProps> = () => {
  const navbarStyles: Record<string, string> = styles as Record<string, string>
  return (
    <div className={navbarStyles.navbar}>
      <NavbarItem item='Mətbəx mebelləri' />
      <NavbarItem item='Mağazalar' />
      <NavbarItem
        item='Haqqımızda'
        dropdown={true}
      />
      <NavbarItem item='Blog' />
      <NavbarItem
        item='Kampaniyalar'
        active={true}
      />
      <button className={navbarStyles.specialOrder}>Özəl sifariş</button>
    </div>
  )
}

export const NavbarItem: React.FC<INavbarItemProps> = ({ item, active, dropdown }) => {
  return (
    <div className={`${styles.navbarItem} ${active ? styles.active : ''}`}>
      {item}
      {dropdown ? (
        <Image
          width={20}
          height={20}
          alt='arrowdown'
          src='/assets/images/arrow-down.svg'
        />
      ) : (
        ''
      )}
    </div>
  )
}
