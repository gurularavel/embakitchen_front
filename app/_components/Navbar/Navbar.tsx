'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { navbarStyles } from '@embakitchen/_components/Navbar/Navbar.style'

interface DropdownItem {
  id: number
  name: string
  active?: boolean
}

interface NavbarItemProps {
  name: string
  active?: boolean
  isDropdown?: boolean
  items?: DropdownItem[]
}

interface NavItem {
  id: number
  name: string
  isDropdown?: boolean
  items?: DropdownItem[]
  active?: boolean
}

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
    isDropdown: true,
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

export const Navbar: React.FC = () => (
  <div className={styles.navbar}>
    {navItems.map(item => (
      <NavbarItem
        key={item.id}
        name={item.name}
        isDropdown={item.isDropdown}
        active={item.active}
        items={item.items}
      />
    ))}
    <button className={styles.specialOrder}>Özəl sifariş</button>
  </div>
)

export const NavbarItem: React.FC<NavbarItemProps> = ({ name, active, isDropdown, items }) => {
  const [isRotated, setIsRotated] = useState(false)

  return (
    <div
      className={`${styles.navbarItem} ${active ? styles.active : ''}`}
      onClick={() => setIsRotated(!isRotated)}
    >
      <p className={styles.paragraph}>{name}</p>
      {isDropdown ? (
        <Image
          width={20}
          height={20}
          alt='arrowdown'
          src='/assets/images/arrow-down.svg'
          className={isRotated ? 'rotated-180' : ''}
        />
      ) : null}
      {isDropdown && isRotated ? (
        <div className={styles.dropdownItems}>
          {items?.map(item => (
            <div
              className={styles.dropdownItem}
              key={item.id}
            >
              <p className={styles.dropdownParagraph}>{item.name}</p>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export const NavbarMobile: React.FC = () => (
  <div className={styles.navbarMobile}>
    <div className={styles.closeMenu}>
      <Image
        width={20}
        height={20}
        alt='arrowdown'
        src='/assets/images/cross.svg'
      />
    </div>
    <div className={styles.navbarMobileItem}>
      {navItems.map(item => (
        <NavbarMobileItem
          key={item.id}
          name={item.name}
          isDropdown={item.isDropdown}
          active={item.active}
          items={item.items}
        />
      ))}
      <button className={styles.specialOrder}>Özəl sifariş</button>
    </div>

    <div className={styles.mobileBottom}>
      <div>
        <a
          className={styles.mobileTel}
          href='tel:126'
        >
          <Image
            width={30}
            height={30}
            alt='search'
            src='/assets/images/call-calling.svg'
          />
          126
        </a>
      </div>
      <div className={styles.mobileButtons}>
        <button className={styles.mobilePrivateCabinet}>
          <Image
            width={24}
            height={24}
            alt='search'
            src='/assets/images/profile-circle.svg'
          />
          Şəxsi kabinet
        </button>
        <button className={styles.mobileLang}>
          Az
          <Image
            width={24}
            height={24}
            alt='search'
            src='/assets/images/arrow-down.svg'
          />
        </button>
      </div>
    </div>
  </div>
)

export const NavbarMobileItem: React.FC<NavbarItemProps> = ({
  name,
  active,
  isDropdown,
  items,
}) => {
  const [isRotated, setIsRotated] = useState(false)

  return (
    <div
      className={`${styles.navbarItem} ${active ? styles.active : ''}`}
      onClick={() => setIsRotated(!isRotated)}
    >
      <p className={active ? `${styles.active}` : `${styles.mobileParagraph}`}>
        {name}
        {isDropdown && isRotated ? (
          <div className={styles.mobileDropdownItems}>
            {items?.map(item => {
              return (
                <div
                  className={styles.mobileDropdownItem}
                  key={item.id}
                >
                  <p className={styles.mobileParagraph}>{item.name}</p>
                </div>
              )
            })}
          </div>
        ) : null}
      </p>
      {isDropdown ? (
        <Image
          width={20}
          height={20}
          alt='arrowdown'
          src='/assets/images/arrow-down.svg'
          className={isRotated ? 'rotated-180 mt-[-110px]' : ''}
        />
      ) : null}
    </div>
  )
}
