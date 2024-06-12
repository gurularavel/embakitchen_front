import React from 'react'
import { SocialContacts } from '@embakitchen/components'
import type { SocialContact } from '@embakitchen/types'
import { sliderSurfaceStyles } from '@embakitchen/components/Slider/SliderSurface/SliderSurface.style'
import iconWhatsapp from '/public/assets/icons/social/whatsapp.svg'
import iconFacebook from '/public/assets/icons/social/facebook.svg'
import iconInstagram from '/public/assets/icons/social/instagram.svg'
import iconYoutube from '/public/assets/icons/social/youtube.svg'

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

const Main: React.FC = () => {
  const styles: Dictionary<string> =
    sliderSurfaceStyles.main as Dictionary<string>

  return (
    <div>
      <div className={styles.fixedSection}>
        <h3 className={styles.text}>
          <span className={styles.textTop}>Büdcənizə uyğun</span>
          <span className={styles.textBottom}>Mətbəx mebeli</span>
        </h3>
        <div className={styles.buttons}>
          <button className={styles.specialOrder}>Özəl sifariş yarat</button>
          <button className={styles.showProducts}>Məhsullara bax</button>
        </div>
      </div>

      <SocialContacts
        layout='vertical'
        contacts={contacts}
      />
    </div>
  )
}

const Gallery: React.FC = () => {
  const styles: Dictionary<string> =
    sliderSurfaceStyles.gallery as Dictionary<string>

  return (
    <div className={styles.wrapper}>
      <strong className={styles.tag}>Ən çox satılan</strong>
      <h5 className={styles.title}>Adel Ral</h5>
    </div>
  )
}

export const SliderSurface = {
  Main,
  Gallery,
}
