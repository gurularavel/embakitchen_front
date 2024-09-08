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

interface FooterMenuItem {
  title: string
  links: Dictionary<string>[]
}

const contacts: SocialContact[] = [
  {
    img: iconWhatsapp,
    url: '/whatsapp',
    alt: 'embakitchen whatsapp account',
  },
  {
    img: iconFacebook,
    url: '/facebook',
    alt: 'embakitchen facebook account',
  },
  {
    img: iconInstagram,
    url: '/instagram',
    alt: 'embakitchen instagram account',
  },
  {
    img: iconYoutube,
    url: '/youtube',
    alt: 'embakitchen youtube account',
  },
]

const footerMenuItems: FooterMenuItem[] = [
  {
    title: 'ŞİRKƏT',
    links: [
      { text: 'Haqqımızda', url: '/about' },
      { text: 'Mağazalar', url: '/stores' },
      { text: 'Kampaniyalar', url: '/campaigns' },
      { text: 'Blog', url: '/blogs' },
    ],
  },
  {
    title: 'MƏHSULLAR',
    links: [
      { text: 'Legno', url: '/legno' },
      { text: 'Adel Ral', url: '/adel-ral' },
      { text: 'Franchesco Cream', url: '/franchesco-cream' },
      { text: 'Aldo Ray Gray', url: '/aldo-ray-gray' },
    ],
  },
]

export const Footer: React.FC = () => {
  const styles: Dictionary<string> = footerStyles as Dictionary<string>

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.companyInfo}>
          {/* <div className={styles.logo}>
            <Image
              src={logo}
              alt='embakitchen logo'
              className={styles.logoImg}
            />
          </div> */}

          {/* <div className={styles.description}>
            <h5>
              Embakitchen - Embawood şirkətinin mətbəx mebeli üzrə ixtisaslaşmış
              brendidir.
            </h5>
          </div> */}

          {/* <SocialContacts
            layout='horizontal'
            contacts={contacts}
            wrapperGap='gap-x-3'
            iconStyle='w-6 h-6'
          /> */}
        </div>

        <nav className={styles.nav}>
          {footerMenuItems?.map((item: FooterMenuItem, i: number) => (
            <div
              className={styles.navItem}
              key={i}
            >
              <h6 className={styles.navTitle}>{item.title}</h6>
              <ul className={styles.navList}>
                {item?.links.map((link: Dictionary<string>, i: number) => (
                  <li
                    className={styles.navLink}
                    key={link.text}
                  >
                    <Link href={link.url}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
