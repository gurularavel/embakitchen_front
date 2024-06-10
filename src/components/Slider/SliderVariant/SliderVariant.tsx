'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { SliderSurface } from '@embakitchen/components'
import 'swiper/css'
import 'swiper/css/pagination'
import { sliderVariantStyles } from '@embakitchen/components/Slider/SliderVariant/SliderVariant.style'
import mainSliderMockImg from '/public/assets/images/slider/main_slider_mock_img.jpg'
import partner1 from '/public/assets/images/slider/partner-1.png'
import partner2 from '/public/assets/images/slider/partner-2.png'
import partner3 from '/public/assets/images/slider/partner-3.png'
import partner4 from '/public/assets/images/slider/partner-4.png'
import partner5 from '/public/assets/images/slider/partner-5.png'
import partner6 from '/public/assets/images/slider/partner-6.png'

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

const PartnersSlider: React.FC = () => {
  const styles: StringPair = sliderVariantStyles.partners as StringPair
  const partners = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
  ]

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Əməkdaşlarımız</h3>

      <div className={styles.wrapper}>
        <Swiper
          loop={true}
          modules={[Autoplay]}
          className={`partners-slider ${styles.slider}`}
          slidesPerView='auto'
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={16}
          breakpoints={{
            1024: {
              spaceBetween: 48,
            },
            1440: {
              spaceBetween: 104.8,
            },
          }}
        >
          {partners.map((partner, i) => (
            <SwiperSlide
              key={i}
              className={styles.slide}
            >
              <Image
                src={partner}
                alt='Embakitchen partner'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export const SliderVariant = {
  MainSlider,
  PartnersSlider,
}
