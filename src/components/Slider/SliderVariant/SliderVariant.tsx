import React, { useRef } from 'react'
import Image from 'next/image'
import { Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { SliderSurface } from '@embakitchen/components'
import leftArrow from '/public/assets/icons/left_arrow.svg'
import rightArrow from '/public/assets/icons/right_arrow.svg'
import mainSliderImg from '/public/assets/images/slider/main_slider_img.jpg'
import galleryImg1 from '/public/assets/images/slider/gallery_1.png'
import galleryImg2 from '/public/assets/images/slider/gallery_2.png'
import galleryImg3 from '/public/assets/images/slider/gallery_3.png'

interface MainSliderEntry {
  img: StaticImageData
  alt: string
}

export const Main: React.FC = () => {
  const styles: Dictionary<string> =
    sliderVariantStyles.main as Dictionary<string>

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

      <SliderSurface.Main />
    </div>
  )
}

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
