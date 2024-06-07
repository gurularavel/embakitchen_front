'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { SliderSurface } from '@embakitchen/components'
import 'swiper/css'
import 'swiper/css/pagination'
import { sliderVariantStyles } from '@embakitchen/components/Slider/SliderVariant/SliderVariant.style'
import mainSliderMockImg from '/public/assets/images/main_slider_mock_img.jpg'

interface MainSliderEntry {
  img: StaticImageData
  alt: string
}

const MainSlider: React.FC = () => {
  const styles: StringPair = sliderVariantStyles.main as StringPair

  return (
    <div className={styles.wrapper}>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        loop={true}
        className={`main-slider ${styles.slider}`}
      >
        {Array<MainSliderEntry>(3)
          .fill({
            img: mainSliderMockImg,
            alt: 'embakitchen homepage slider mock image',
          })
          .map((item, i) => (
            <SwiperSlide key={i}>
              <Image
                src={item.img}
                alt={item.alt}
                className={styles.img}
              />
            </SwiperSlide>
          ))}
      </Swiper>

      <SliderSurface.MainSliderSurface />
    </div>
  )
}

export const SliderVariant = {
  MainSlider,
}
