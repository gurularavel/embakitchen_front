'use client'

import React, { useState } from 'react'
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
    items: [
      {
        id: 1,
        name: 'Şirkət haqqında',
      },
      {
        id: 2,
        name: 'Layihələrimiz',
      },
      {
        id: 3,
        name: 'Partnyorlar',
      },
    ],
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
          name={item.name}
          dropdown={item.dropdown}
          active={item.active}
          items={item.items}
        />
      ))}
      <button className={styles.specialOrder}>Özəl sifariş</button>
    </div>
  )
}

export const NavbarItem: React.FC<NavbarItemProps> = ({ name, active, dropdown, items }) => {
  const [rotate, setRotate] = useState(false)

  return (
    <div
      className={`${styles.navbarItem} ${active ? styles.active : ''}`}
      onClick={() => setRotate(!rotate)}
    >
      <p className={styles.paragraph}>{name}</p>
      {dropdown ? (
        <Image
          width={20}
          height={20}
          alt='arrowdown'
          src='/assets/images/arrow-down.svg'
          className={rotate ? 'rotate-180' : ''}
        />
      ) : null}
      {dropdown ? (
        rotate ? (
          <div className={styles.dropdownItems}>
            {items?.map(item => {
              return (
                <div
                  className={styles.dropdownItem}
                  key={item.id}
                >
                  <p className={styles.dropdownParagraph}>{item.name}</p>
                </div>
              )
            })}
          </div>
        ) : null
      ) : null}
    </div>
  )
}
