import React from 'react'
import { styles } from '@embakitchen/components/header/styles'
import { IHeaderProps } from '@embakitchen/components/header/types'
import Image from 'next/image'
import { Navbar } from '../navbar'

export const Header: React.FC<IHeaderProps> = () => {
  const headerStyles: Record<string, string> = styles as Record<string, string>
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.mobileMenu}>
        <button className={headerStyles.mobileMenuBtn}>
          <Image
            width={6}
            height={12}
            src='/assets/images/kebab-menu.svg'
            alt='menu'
          />
        </button>
      </div>
      <div className={headerStyles.left}>
        <div className={headerStyles.logo}>
          <Image
            src='/assets/images/logo.svg'
            alt='embakitchen logo'
            width={158}
            height={27}
            className={headerStyles.logoImg}
          />
        </div>
        <Navbar />
      </div>
      <div className={headerStyles.right}>
        <div className={headerStyles.tel}>
          <Image
            width={30}
            height={30}
            alt='search'
            src='/assets/images/call-calling.svg'
          />
          126
        </div>
        <div className={headerStyles.search}>
          <Image
            width={24}
            height={24}
            alt='search'
            src='/assets/images/search.svg'
          />
        </div>
        <button className={headerStyles.privateCabinet}>
          <Image
            width={24}
            height={24}
            alt='search'
            src='/assets/images/profile-circle.svg'
          />
          Şəxsi kabinet
        </button>
      </div>
    </header>
  )
}
