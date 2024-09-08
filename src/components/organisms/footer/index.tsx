import * as React from 'react'
import { Logo, SocialContacts } from '~ek/components'

interface FooterProps {}

const footerStyles: Readonly<TailwindStyle> = {
  footer: 'w-auto mx-4 px-5',
  description: 'mb-6 text-base font-medium text-auxiliary-2',
}
const styles: Readonly<StyleRecord> = footerStyles as StyleRecord

export function Footer({}: Readonly<FooterProps>): ReactComponent {
  return (
    <footer className={styles.footer}>
      <Logo variant='footer' />

      <h5 className={styles.description}>
        Embakitchen - Embawood şirkətinin mətbəx mebeli üzrə ixtisaslaşmış
        brendidir.
      </h5>

      <SocialContacts
        layout='horizontal'
        theme='dark'
        gap={3}
        classes='w-6 h-6'
      />
    </footer>
  )
}
