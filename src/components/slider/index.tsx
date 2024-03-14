'use client'

import React, { ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import { ISliderProps } from '@embakitchen/components/slider/types'
import { styles } from '@embakitchen/components/slider/styles'

const sliders: Record<string, ReactNode> = {
  main: <MainSlider />,
}

export const Slider: React.FC<ISliderProps> = ({ type }) => sliders[type]

function MainSlider() {
  const mainSliderStyles: Record<string, string> = styles.main as Record<string, string>

  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className={`${styles.slider} ${(styles.main as { [key: string]: string }).slider}`}
    >
      <SwiperSlide>
        <Image
          src='/assets/images/main-slider-mock-img.jpg'
          alt='embakitchen homepage slider mock image'
          fill={true}
        />
        <div className={mainSliderStyles.textSection}>
          <h2 className={mainSliderStyles.title}>Büdcənizə uyğun mətbəx mebeli</h2>
          <div className={mainSliderStyles.buttons}>
            <button>Özəl sifariş yarat</button>
            <button>Məhsullara bax</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
