import React from 'react'
import Image from 'next/image'
import { footerStyles } from '@embakitchen/components/Footer/Footer.style'
import logo from '/public/assets/images/logo/footer.png'

export const Footer: React.FC = () => {
  const styles: Dictionary<string> = footerStyles as Dictionary<string>

  return (
    <footer className={styles.footer}>
      <Image
        src={logo}
        alt='embakitchen logo'
      />
    </footer>
  )
}
