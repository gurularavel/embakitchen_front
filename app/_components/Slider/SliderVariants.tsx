'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { SocialContacts } from '@embakitchen/_components'
import type { SocialContact } from '@embakitchen/_types'
import 'swiper/css'
import 'swiper/css/pagination'
import { sliderStyles } from '@embakitchen/_components/Slider/Slider.style'

const icons: SocialContact[] = [
  {
    img: '/assets/images/icons/whatsapp.svg',
    url: '/',
    description: 'embakitchen whatsapp account',
  },
  {
    img: '/assets/images/icons/facebook.svg',
    url: '/',
    description: 'embakitchen facebook account',
  },
  {
    img: '/assets/images/icons/instagram.svg',
    url: '/',
    description: 'embakitchen instagram account',
  },
  {
    img: '/assets/images/icons/youtube.svg',
    url: '/',
    description: 'embakitchen youtube account',
  },
]

export function MainSlider() {
  const styles: StringPairs = sliderStyles.main as StringPairs

  return (
    <div className={styles.container}>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className={styles.slider}
      >
        {Array(3)
          .fill({
            img: '/assets/images/main-slider-mock-img.jpg',
            description: 'embakitchen homepage slider mock image',
            titleTop: 'Büdcənizə uyğun',
            titleBottom: 'Mətbəx mebeli',
          })
          .map((item, i) => (
            <SwiperSlide
              className={styles.slide}
              key={i}
            >
              <Image
                src={item.img}
                alt={item.description}
                fill={true}
                className={styles.img}
              />
              <div className={styles.textSection}>
                <h2 className={styles.title}>
                  <span className={styles.titleMedium}>{item.titleTop}</span>
                  <span className={styles.titleBold}>{item.titleBottom}</span>
                </h2>
                <div className={styles.buttons}>
                  <button className={styles.specialOrder}>
                    Özəl sifariş yarat
                  </button>
                  <button className={styles.showProducts}>
                    Məhsullara bax
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <SocialContacts
        layout='vertical'
        icons={icons}
      />
    </div>
  )
}

export const SliderVariants = {
  MainSlider,
}
