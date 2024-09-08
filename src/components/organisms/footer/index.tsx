import * as React from 'react'
import {
  ActionLink,
  Button,
  Icon,
  Logo,
  Navbar,
  SocialContacts,
} from '~ek/components'

interface FooterProps {}

const footerStyles: Readonly<TailwindStyle> = {
  footer: 'w-auto mx-4 px-5 pb-6',
  footerContent: '',
  description: 'mb-6 text-base font-medium text-auxiliary-2',
  footerItem: 'mb-6 last:mb-0',
  contactUs: '',
  contactUsItem: 'mb-6 last:mb-0 flex items-center gap-x-2',
  contactUsLabel:
    'inline-block min-w-14 w-14 text-base font-medium text-auxiliary-2',
  contactUsLink: 'text-base font-medium text-auxiliary-3 break-all',
  specialOrder:
    'w-full h-12 flex justify-center items-center rounded-md bg-primary-9 text-base font-semibold text-primary-2',
  specialOrderIcon: 'ml-2',
}
const styles: Readonly<StyleRecord> = footerStyles as StyleRecord

export function Footer({}: Readonly<FooterProps>): ReactComponent {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerContent}>
        <li className={styles.footerItem}>
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
        </li>

        <li className={styles.footerItem}>
          <Navbar context='footer' />
        </li>

        <li className={styles.footerItem}>
          <ul className={styles.contactUs}>
            <li className={styles.contactUsItem}>
              <span className={styles.contactUsLabel}>Əlaqə:</span>
              <ActionLink
                href='tel:+994552207212'
                text='+994552207212'
                classes={styles.contactUsLink}
              />
            </li>

            <li className={styles.contactUsItem}>
              <span className={styles.contactUsLabel}>Email:</span>
              <ActionLink
                href='mailto:support@embakitchen.az'
                text='support@embakitchen.az'
                classes={styles.contactUsLink}
              />
            </li>

            <li className={styles.contactUsItem}>
              <Button classes={styles.specialOrder}>
                <span>Özəl sifariş yarat</span>
                <Icon
                  variant='right-arrow-orange'
                  classes={styles.specialOrderIcon}
                />
              </Button>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  )
}
