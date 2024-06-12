'use client'

import React, { useRef } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import { SliderSurface } from '@embakitchen/components'
import 'swiper/css'
import 'swiper/css/pagination'
import { sliderVariantStyles } from '@embakitchen/components/Slider/SliderVariant/SliderVariant.style'
import leftArrow from '/public/assets/icons/left_arrow.svg'
import rightArrow from '/public/assets/icons/right_arrow.svg'
import mainSliderImg from '/public/assets/images/slider/main_slider_img.jpg'
import galleryImg1 from '/public/assets/images/slider/gallery_1.png'
import galleryImg2 from '/public/assets/images/slider/gallery_2.png'
import galleryImg3 from '/public/assets/images/slider/gallery_3.png'
import partner1 from '/public/assets/images/slider/partner_1.png'
import partner2 from '/public/assets/images/slider/partner_2.png'
import partner3 from '/public/assets/images/slider/partner_3.png'
import partner4 from '/public/assets/images/slider/partner_4.png'
import partner5 from '/public/assets/images/slider/partner_5.png'
import partner6 from '/public/assets/images/slider/partner_6.png'

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
            img: mainSliderImg,
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

const GallerySlider: React.FC = () => {
  const styles: StringPair = sliderVariantStyles.gallery as StringPair
  const gallerySliderImages = Array(3)
    .fill([galleryImg1, galleryImg2, galleryImg3])
    .flat()
  const swiperRef = useRef<SwiperType>()

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Swiper
          loop={true}
          className={`gallery-slider ${styles.slider}`}
          modules={[Navigation]}
          centeredSlides={true}
          onBeforeInit={swiper => {
            swiperRef.current = swiper
          }}
          slidesPerView={1}
          spaceBetween={0}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 27,
            },
            1440: {
              spaceBetween: 40,
            },
          }}
        >
          {gallerySliderImages?.map((img, i) => (
            <SwiperSlide
              key={i}
              className={styles.slide}
            >
              <Image
                src={img}
                alt='embakitchen product'
                className={styles.img}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className={`${styles.nav} ${styles.prev}`}
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Image
            src={leftArrow}
            alt='embakitchen gallery slider previous element'
          />
        </button>
        <button
          className={`${styles.nav} ${styles.next}`}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <Image
            src={rightArrow}
            alt='embakitchen gallery slider next element'
          />
        </button>
      </div>
    </div>
  )
}

const PartnersSlider: React.FC = () => {
  const styles: StringPair = sliderVariantStyles.partners as StringPair
  const partners = Array(2)
    .fill([partner1, partner2, partner3, partner4, partner5, partner6])
    .flat()

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
  GallerySlider,
  PartnersSlider,
}
