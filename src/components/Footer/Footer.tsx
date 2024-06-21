import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SocialContacts } from '@embakitchen/components'
import type { SocialContact } from '@embakitchen/types'
import { footerStyles } from '@embakitchen/components/Footer/Footer.style'
import logo from '/public/assets/images/logo/footer.png'
import iconWhatsapp from '/public/assets/icons/social/dark/whatsapp.svg'
import iconFacebook from '/public/assets/icons/social/dark/facebook.svg'
import iconInstagram from '/public/assets/icons/social/dark/instagram.svg'
import iconYoutube from '/public/assets/icons/social/dark/youtube.svg'
import rightArrowOrange from '/public/assets/icons/right_arrow_orange.svg'

const contacts: SocialContact[] = [
  {
    img: iconWhatsapp,
    url: '/',
    alt: 'embakitchen whatsapp account',
  },
  {
    img: iconFacebook,
    url: '/',
    alt: 'embakitchen facebook account',
  },
  {
    img: iconInstagram,
    url: '/',
    alt: 'embakitchen instagram account',
  },
  {
    img: iconYoutube,
    url: '/',
    alt: 'embakitchen youtube account',
  },
]

export const Footer: React.FC = () => {
  const styles: Dictionary<string> = footerStyles as Dictionary<string>

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.companyInfo}>
          <div className={styles.logo}>
            <Image
              src={logo}
              alt='embakitchen logo'
              className={styles.logoImg}
            />
          </div>

          <div className={styles.description}>
            <h5>
              Embakitchen - Embawood şirkətinin mətbəx mebeli üzrə ixtisaslaşmış
              brendidir.
            </h5>
          </div>

          <SocialContacts
            layout='horizontal'
            contacts={contacts}
            wrapperGap='gap-x-3'
            iconStyle='w-6 h-6'
          />
        </div>

        <nav className={styles.nav}>
          <div className={styles.navItem}>
            <h6 className={styles.navTitle}>ŞİRKƏT</h6>
            <ul className={styles.navList}>
              <li className={styles.navLink}>
                <Link href='/'>Haqqımızda</Link>
              </li>
              <li className={styles.navLink}>
                <Link href='/'>Mağazalar</Link>
              </li>
              <li className={styles.navLink}>
                <Link href='/'>Kampaniyalar</Link>
              </li>
              <li className={styles.navLink}>
                <Link href='/'>Blog</Link>
              </li>
            </ul>
          </div>
          <div className={styles.navItem}>
            <h6 className={styles.navTitle}>MƏHSULLAR</h6>
            <ul className={styles.navList}>
              <li className={styles.navLink}>
                <Link href='/'>Legno</Link>
              </li>
              <li className={styles.navLink}>
                <Link href='/'>Adel Ral</Link>
              </li>
              <li className={styles.navLink}>
                <Link href='/'>Franchesco Cream</Link>
              </li>
              <li className={styles.navLink}>
                <Link href='/'>Aldo Ray Gray</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className={styles.contactUs}>
          <ul>
            <li className={styles.contactUsItem}>
              <span className={styles.contactUsLabel}>Əlaqə:</span>
              <a href='tel:+994552207212'>
                <strong className={styles.contactUsInfo}>
                  +994 55 220 72 12
                </strong>
              </a>
            </li>
            <li className={styles.contactUsItem}>
              <span className={styles.contactUsLabel}>Email:</span>
              <a href='mailto:support@embakitchen.az'>
                <strong className={styles.contactUsInfo}>
                  support@embakitchen.az
                </strong>
              </a>
            </li>
            <li className={styles.contactUsItem}>
              <button className={styles.specialOrder}>
                <span>Özəl sifariş yarat</span>
                <Image
                  src={rightArrowOrange}
                  alt='embakitchen special order'
                  className={styles.specialOrderIcon}
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
