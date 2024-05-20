'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { SocialIcons } from '@embakitchen/components/social-icons'
import type { SliderProps } from '@embakitchen/components/slider/types'
import type { SocialIcon } from '@embakitchen/components/social-icons/types'
import { styles as sliderStyles } from '@embakitchen/components/slider/styles'
import 'swiper/css'
import 'swiper/css/pagination'

const icons: SocialIcon[] = [
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

const sliders: Record<string, React.ReactNode> = {
  main: <MainSlider />,
}

export const Slider: React.FC<SliderProps> = ({ type }) => sliders[type]

function MainSlider() {
  const styles: Record<string, string> = sliderStyles.main as Record<string, string>

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
                  <button className={styles.specialOrder}>Özəl sifariş yarat</button>
                  <button className={styles.showProducts}>Məhsullara bax</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <SocialIcons
        layout='vertical'
        icons={icons}
      />
    </div>
  )
}
