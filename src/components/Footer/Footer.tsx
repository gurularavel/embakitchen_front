import React from 'react'
import { footerStyles } from '@embakitchen/components/Footer/Footer.style'

export const Footer: React.FC = () => {
  const styles: Dictionary<string> = footerStyles as Dictionary<string>

  return (
    <footer className={styles.footer}>
      <h1>Footer</h1>
    </footer>
  )
}
