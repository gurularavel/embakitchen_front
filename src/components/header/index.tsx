import React from 'react'
import Image from 'next/image'
import { Navbar } from '@embakitchen/components/navbar'
import { HeaderProps } from '@embakitchen/components/header/types'
import { styles as headerStyles } from '@embakitchen/components/header/styles'

export const Header: React.FC<HeaderProps> = () => {
  const styles: Record<string, string> = headerStyles as Record<string, string>

  return (
    <header className={styles.header}>
      <div className={styles.mobileMenu}>
        <button className={styles.mobileMenuBtn}>
          <Image
            width={6}
            height={12}
            src='/assets/images/kebab-menu.svg'
            alt='menu'
          />
        </button>
      </div>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image
            src='/assets/images/logo.svg'
            alt='embakitchen logo'
            fill={true}
          />
        </div>
        <Navbar />
      </div>
      <div className={styles.right}>
        <div>
          <a
            className={styles.tel}
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
        <div>
          <button className={styles.search}>
            <Image
              width={24}
              height={24}
              alt='search'
              src='/assets/images/search.svg'
            />
          </button>
        </div>
        <div>
          <button className={styles.privateCabinet}>
            <Image
              width={24}
              height={24}
              alt='search'
              src='/assets/images/profile-circle.svg'
            />
            Şəxsi kabinet
          </button>
        </div>
      </div>
    </header>
  )
}
