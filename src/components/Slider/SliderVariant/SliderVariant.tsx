import React, { useRef } from 'react'
import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { SliderSurface } from '@embakitchen/components'
import leftArrow from '/public/assets/icons/left_arrow.svg'
import rightArrow from '/public/assets/icons/right_arrow.svg'
import galleryImg1 from '/public/assets/images/slider/gallery_1.png'
import galleryImg2 from '/public/assets/images/slider/gallery_2.png'
import galleryImg3 from '/public/assets/images/slider/gallery_3.png'

export const Gallery: React.FC = () => {
  const swiperRef = useRef<SwiperType>()
  const styles: Dictionary<string> =
    sliderVariantStyles.gallery as Dictionary<string>
  const gallerySliderImages = Array(3)
    .fill([galleryImg1, galleryImg2, galleryImg3])
    .flat()

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
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          touchEventsTarget='container'
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
              <SliderSurface.Gallery />
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
